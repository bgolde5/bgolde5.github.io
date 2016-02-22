---
layout: post
title: Swift vs. Objective C
comments: True
---

<iframe src="https://drive.google.com/file/d/0B3O6dpa-XnSYUjJyQ2lCd2tHSnM/preview" width="468" height="202"></iframe>

## Introduction
So you're interested in developing software in Swift or Objective-C, but how do you know which to choose? I work at an enterprise level company that has recently researched this question, and I want to briefly share with you my findings so that you can make an informed decision.

I will begin with a simple Q & A.

#### Can I write a complete Swift framework without depending on Objective-C?  
Yes, many popular apps such as lyft, Yahoo Weather, and LinkedIn are now entirely built in Swift. The process for creating a framework is similar except Objective-C is now replaced with Swift.

Reference: <http://www.apple.com/swift/>

#### Are Swift frameworks compatible with app’s written in Objective-C?
Yes, Swift frameworks are compatible with apps previously written in Objective-C with some caveats. The following Swift only features will not be available to Objective-C apps:
 * Generics
 * Tuples
 * Enumerations defined in Swift without Int raw value type
 * Structures defined in Swift
 * Top-level functions defined in Swift
 * Global variables defined in Swift
 * Type aliases defined in Swift
 * Swift-style variadics
 * Nested types
 * Curried functions

Reference: <https://developer.apple.com/library/ios/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html#//apple_ref/doc/uid/TP40014216-CH10-ID136>

Reference: <https://developer.apple.com/library/ios/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html>


#### Are there any popular SDK’s or open source libraries already written in Swift? (e.g. Alamofire)
Yes, 1/3 of the SDK’s found on [this website](https://medium.com/app-coder-io/27-ios-open-source-libraries-to-skyrocket-your-development-301b67d3124c#.2ypapea5x) are written in Swift.

#### What are the downsides of using SDK’s written in Swift?
Some features in Swift are not available to Objective-C as mentioned earlier. Also, because Swift is a fairly new language, the support for it is not as thorough as Objective-C. This is changing though!

#### Is Swift compatible with CocoaPods?
Yes, you can use any pod written in Objective-C, Swift or both with an app written in Objective-C, Swift, or both. Just remember that some Swift features are not compatible with Objective-C.

Reference: <https://developer.apple.com/library/ios/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html>

#### What’s going to be changed in Swift in the near future?
All information regarding upcoming changes to Swift can be found here: <https://github.com/apple/swift-evolution>

#### Conclusion
After asking these questions myself, I determined this:
  1. There are still many companies out there using Objective-C. With that said, I've decided to continue to write SDK's in Objective-C, because I know that they will be compatible with both Objective-C apps and Swift apps. This is not the case however if we decide to write SDK's solely in Swift.

  2. If I'm building an application that will have zero possible Objective-C dependencies, then Swift is a sure way to go because of its clean style and easy to learn syntax.

  3. I will reassess this decision in the next year as the next Swift versions are introduced and I can determine that my clients will no longer need Objective-C frameworks.
