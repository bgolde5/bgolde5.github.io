---
layout: post
title: Documenting Your Code in Xcode
comments: True
---

As a developer I'm always trying to balance my time between coding and commenting. I'd prefer to spend as little amount as time as possible commenting my code while at the time time, maximizing the usefulness of my comments. With that said, I'd like to share [VVDocumenter-Xcode](https://github.com/onevcat/VVDocumenter-Xcode) with you.

VVDocumenter takes advantage of Xcode's commenting markup language by generating comment stubs for you by simply typing three forward slashes "///" above a parameter, method, etc.

<iframe src="https://drive.google.com/file/d/0B3O6dpa-XnSYSmthazB3MFlIbEk/preview" width="400" height="150"></iframe>

<br>
If you're not familiar with Xcode's commenting markup language, please visit [this](https://developer.apple.com/library/mac/documentation/DeveloperTools/Conceptual/HeaderDoc/tags/tags.html#//apple_ref/doc/uid/TP40001215-CH346-CHDJFEGF) website for Objective-C or [this](https://developer.apple.com/library/ios/documentation/Xcode/Reference/xcode_markup_formatting_ref/index.html#//apple_ref/doc/uid/TP40016497-CH2-SW1) website for Swift. If you're familiar with Javadocs, Xcode's markup language for Objective C and Swift is very similar.

Lastly, the final question is, why care about commenting code in a particular way? In Xcode, if you use the option key and hover over a method, you'll see a question mark appear and the method will highlight blue. If you click a properly commented method, you'll see something like this:

<iframe src="https://drive.google.com/file/d/0B3O6dpa-XnSYLXVsSmt4dWlxU0E/preview" width="400" height="150"></iframe>

<br>
Pretty right? Now for the icing on the cake.... An open source project called [Jazzy](https://github.com/realm/jazzy) is gaining momentum. Jazzy is very similar to Javadocs in the sense that it produces a very pretty html document similar to Apple's standard documentation.

<img src="https://github.com/realm/jazzy/blob/master/screenshot.jpg?raw=true" />

With the combination of the Apple's markup language, VVDocumenter and Jazzy, you now have a powerful toolset to comment you code with minimal effort!
