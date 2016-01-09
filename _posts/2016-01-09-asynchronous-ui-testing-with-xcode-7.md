---
layout: post
title: Asynchronous UI Testing with Xcode 7
comments: True
---

When UI testing with Xcode 7's new XCTest framework, you may find yourself in
need a of a reliable way to make asynchronous calls when testing various components. I may have a fairly simple
and elegant solution for you to use that I find useful.

To give you a big picture of what's going on, I'm in a view that currently shows a submit button. Upon pressing the submit button, some data from the current view is a sent to a database and the database responds with a success flag when that data is successfully stored. Upon receiving the success flag, the view segues to another view that contains a contact button. What I'd like to do is simulate a UI test by pressing the submit button and then the contact button. The only issue is that the submit button can take any amount of time! So what should I do?

**Naive Approach**

{% highlight objective-c %}
XCUIElement *contactBtn = app.tables.buttons[@"contactBtn"];

// tap the submit button
[app.tables.buttons[@"Submit"] tap];

// wait 5 seconds to segue to the next view
[NSThread sleepForTimeInterval:5];

// press the contact button
[contactBtn tap];
{% endhighlight %}

In the above example, I simulate the user pressing the submit button and then waiting for 5 seconds for the next view to populate. This works great if I know that I want the test to fail if the submit process takes longer than 5 seconds. However, what happens when the submit usually takes less than 5 seconds? I don't want to wait 5 seconds every time I run this test.

**The Solution**
{% highlight objective-c %}
XCUIElement *contactBtn = app.tables.buttons[@"contactBtn"];

NSPredicate *exists = [NSPredicate predicateWithFormat:@"exists == 1"];

[app.tables.buttons[@"Submit"] tap]; // tap the submit button

// perform async loop, waiting for the object specified to appear
[self expectationForPredicate:exists evaluatedWithObject:contactBtn handler:nil];

[contactBtn tap]; // this object has been found, perform this action

[self waitForExpectationsWithTimeout:5 handler:nil]; // wait no longer than 5 seconds for the request to go through
{% endhighlight %}

Now in this example, a bit more is going on. I use a predicate for the purpose of checking if something exists on the current view. I then tap the submit button and immediately enter an asynchronous loop. In that asynchronous loop I'm looking for an object to appear (the contact button). *Take note that that loop will run for at most 5 seconds.*

If segueing to the view with the contact button only takes 1 seconds after pressing the submit button, then the contact button will be tapped right away. If the loop takes more than 5 seconds, then the test fails. How convenient!
