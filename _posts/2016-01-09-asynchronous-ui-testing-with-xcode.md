---
layout: post
title: Asynchronous UI Testing with Xcode
comments: True
categories: ['post']
---

When UI testing with Xcode 7's new XCTest framework, you may find yourself in need a of a reliable way to make asynchronous calls when testing various components. I've created a simple application for you to use to see this concept in action.

Before you scroll below or download the app, first I will give you a big picture of what the scenario is. I have an application that currently displays a submit button. Upon pressing the submit button, a request that takes between 1 and 5 seconds occurs. After the request is complete, a contact button becomes available.

<iframe src="https://drive.google.com/file/d/0B3O6dpa-XnSYc3h4cnZWT0hZZlU/preview" width="640" height="480"></iframe>

What I'd like to do is simulate a UI test by pressing the submit button and then press the contact button. The only issue is that the submit button can take any time between 1 and 5 seconds! So what should I do?

**Locating The Problem**

First **[download the app here](https://github.com/bradleygolden/async-ui-testing-xcode-demo)**.

Once the app is downloaded, navigate to "SubmitViewController.m"

You'll find the following method in that file:

{% highlight objective-c %}
- (void)submitOperation {

    int delayAmount = arc4random_uniform(4) + 1; // delay for a random amount between 1 and 5 seconds

    [activityView startAnimating];

    [NSThread sleepForTimeInterval:delayAmount]; // simulate time to reach out to server

    // upon completion of sleep
    dispatch_async(dispatch_get_main_queue(), ^{
        [activityView stopAnimating];
        [self performSegueWithIdentifier:@"contactSegue" sender:NULL];
    });
}
{% endhighlight %}

This method simulates some call to a server that takes an indeterminate amount of time. This is what makes UI testing slightly more complicated as we now have to account for async calls.

Take some time to look over the code. This tutorial assumes you know the basics of iOS development.

Run the app with <code>CMD-R</code> to get an idea how this basic app works.

Now that you have an idea as to how this works, let's move on to some basic UI testing.

**The Wrong Approach**

Navigate to "Async_UI_TestingUITests.m"

You'll find 3 tests.
 - testButton
 - testButtonSync
 - testButtonAsync

Go ahead and run the tests with <code>CMD-B + CMD-U</code>

Now run the tests a few times. What did you notice?

2 of the 3 tests should pass consistently but one of the tests will fail. Why is that?

The issue is in the testButton method.

{% highlight objective-c %}
- (void)testButton {
    XCUIApplication *app = [[XCUIApplication alloc] init];

    XCUIElement *contactButton = app.buttons[@"contactButton"];

    // tap the submit button
    [app.buttons[@"submitButton"] tap];

    // press the contact button
    [contactButton tap];
}
{% endhighlight %}

This method assumes that the submit button has no delay but in reality it may have a delay between 1-5 seconds!

**The Naive Approach**

Now take a look at the testButtonSync method:

{% highlight objective-c %}
- (void)testButtonSync {
    XCUIApplication *app = [[XCUIApplication alloc] init];

    XCUIElement *contactButton = app.buttons[@"contactButton"];

    // tap the submit button
    [app.buttons[@"submitButton"] tap];

    // wait 10 seconds to segue to the next view
    [NSThread sleepForTimeInterval:10];

    // press the contact button
    [contactButton tap];
}
{% endhighlight %}

Notice that the tester decided to fix the issue of not knowing the response time by delaying the app by 10 seconds. This works but now you'll have to wait for 10 seconds every time you run the test simulator!

We want a way to click the button as soon as it's available.

**The Smart Approach**

Now take a look at the testButtonAsync method:

{% highlight objective-c %}
- (void)testButtonAsync {
    XCUIApplication *app = [[XCUIApplication alloc] init];

    XCUIElement *contactButton = app.buttons[@"contactButton"];

    NSPredicate *exists = [NSPredicate predicateWithFormat:@"exists == 1"];

    [app.buttons[@"submitButton"] tap]; // tap the submit button

    // perform async loop, waiting for the object specified to appear
    [self expectationForPredicate:exists evaluatedWithObject:contactButton handler:nil];

    [self waitForExpectationsWithTimeout:10 handler:nil]; // wait no longer than 10 seconds for the request to go through

    [contactButton tap]; // this object has been found, perform this action
}
{% endhighlight %}

In this example, I am using a predicate to check when <code>contactButton</code> is available:

<code>[self expectationForPredicate:exists evaluatedWithObject:contactButton handler:nil];</code>

I then wait *at most* 10 seconds for the contact button to appear:

<code>[self waitForExpectationsWithTimeout:10 handler:nil];</code>

 Once the button appears the contact button will be tapped immediately!
