---
layout: post
title: Appium vs. Xcode's XCTest
comments: True
---

# Appium vs. Xcode's XCTest

## Overview
With the current competitive nature of the App Store, it's important to know whether your app is functioning exactly how you expect it to. Therefore, it's very important to test your app thoroughly using both unit tests and acceptance tests. In this post I will outline two very important tools for acceptance testing, Appium and Xcode's XCTest framework.

## Why acceptance testing?
Acceptance testing ensures that the user experience is solid and that your app is functioning as expected. Without acceptance testing, you must conduct manual tests that are both time consuming and dependent on the developer. Acceptance tests allow for developers to automate the testing process and use tools such as "Continuous Integration" (CI).

## The Acceptance Testing Lifecycle
It's important to decide the workflow for testing your apps. Below is an example of the ATDD (Acceptance Test Driven Development) workflow:

  - Create user experience/story and covert to acceptance tests
  - Write/Run acceptance tests (they will fail)
  - Code the app
  - Track acceptance tests as they begin to pass
  - Watch all acceptance tests pass
  - Release app

## Which frameworks should I consider?
Given the newest release of UI automated testing to Xcode's XCTest, Xcode is now a large competitor in acceptance testing. However, there are many other frameworks to consider as well that have been tested thoroughly and have a large following. Below is a list of a few:

 - Appium
 - Xcode's XCTest
 - Calabash
 - Frank
 - And more...


 I'm going to cover Appium and Xcode only for this post because personally, I've found these two to be the most convenient for mobile developers with little to no web experience or knowledge of ruby.

### Appium
This framework is tried and tested by many companies.

Pros:

- It's open source
- Uses Selenium and the WebDriver protocol
- Free to use
- Supports multiple languages (Java, JavaScript, Objective C,
  .NET, PHP, Python, Ruby, and soon to come... Swift)
- Can be used with Android and iOS
- Tests the same application file that you plan to submit to the App Store/Google Play. This is a bonus for ensuring that the final build for your app is fully functional.
- Has a large community
- Can be used with Cucumber

Cons:

- With iOS, running tests simultaneously with a simulator requires a separate iOS device for each simulator. Using a cloud based continuous integration service such as Sauce Labs can fix this issue.
- Not compatible with Android API's lower than 16. They use Selendroid to fix this but this results in more complexity.
- Challenging to implement certain gestures
- A lot more overhead for developers to learn on top of the development process

### XCTest
This framework is now baked into Xcode. Developers can simply press a record button and build their UI tests with minimal effort.

Pros:

- Very little overhead for developers to learn
- Used with native iOS languages
- Allows for continuous integration
- Faster than many external frameworks

Cons:

- No cross platform support
- Restricted to Objective C or Swift
- Is very new and contains some bugs

## Do I choose Appium or Xcode?
First it depends on your preferences. If you're willing to learn a new framework like Appium and possibly a new language in exchange for cross platform support, then Appium may be for you. It allows you to reuse code and it minimizes the work on the testing team because the language is the same across multiple test cases and multiple platforms. However, if the developers not on the testing team are required to write acceptance tests, then Appium may have an unrealistic learning curve.

Learning Appium requires knowledge of how to use Selenium and the WebDriver protocol which in itself is a lot to ask of the development team. I for one would be much more comfortable working in the Xcode environment with XCTest rather than using Appium.

## Creating Readable Tests with Appium and Xcode
With a testing framework, it's important that tests are clearly understandable by people from all facets of the development process. It's also important that developers are able to write tests in an intuitive way. Both Appium and Xcode offer support in this area.

Below is an example for writing tests in Appium using [Cucumber](https://cucumber.io/):

```
Feature: Class search
  To allow a user to find a classes taught by a professor, the school must offer an easy way for users to filter classes by professor name.

  Scenario: Search classes by professor
    Given I have a list of classes
    When I search classes taught by professor Doe
    Then I find professor Doe is teaching Algorithms and Software Development I
```

Clean right? Now imagine if writing tests was as simple as using common Engish as shown above. Again, this is easy with Appium. Of course there is some work to tie plain english with code, but it's not difficult to do. Xcode doesn't offer a solid solution for integrating something like Cucumber but there is a new framework available that takes advantage of Swift, Gherkin, and Xcode's XCTest. You can see that plugin [here](https://github.com/net-a-porter-mobile/XCTest-Gherkin). Now tests can Xcode can look like this:

```
func testSearchByProfessor() {
        Given("I have a list of classes")
        When("I search for classes taught by professor Doe")
        Then("I find professor Doe is teaching Algorithms and Software Development")
}
```

Still looks clean right? This was written in Xcode using Swift! With the ability to write clean tests in Xcode, developers can now use Xcode's record option to capture UI actions and then wrap those actions with Gherkin. This is simple to do and has a very small learning curve for developers that have prior iOS experience.

If you are thinking about writing acceptance tests using Xcode and the TDD model, I also recommend you check out [KIF](https://github.com/kif-framework/KIF). KIF makes it easier for testers and developers using Xcode and it can be combined with the Gherkin framework shown above! With the power of Gherkin and KIF, Xcode is on it's way to making acceptance testing much easier for developers and testers.

## Conclusion
Personally, after researching Appium and Xcode, I found Xcode to be the winner. As a mobile developer, I want to spend as little amount of time testing as possible. At the same time, I want to ensure the tests I write are complete. If I use Xcode, then I have the luxury of working in a familiar environment with a language that I know well. Adding a few frameworks such as Gherkin and KIF is simple as they easily integrate with Xcode and are very simple to use. Not only are these frameworks simple to use, Xcode is obviously stepping up their support for acceptance testing and I'm sure XCTest will only improve in the future.

References:
http://shashikantjagtap.net/ios-automated-testing-in-the-bdd-with-appium-cucumber-on-mac-osx/
http://www.3pillarglobal.com/insights/appium-a-cross-browser-mobile-automation-tool
