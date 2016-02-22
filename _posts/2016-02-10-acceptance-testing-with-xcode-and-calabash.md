---
layout: post
title: Automated Acceptance Testing with Xcode and Calabash
comments: True
---

## Overview
Calabash is a tool that allows you to write automated acceptance tests for mobile applications. It's both open source and cross platform. Calabash also provides powerful cloud services for a fee and it is maintained by Xamarin.

This tutorial is broken into three parts:
 - Part 1: Installing the Calabash environment
 - Part 2: Shows iOS developers how to set up an existing application with Calabash
 - Part 3: Shows QA personnel / testers how to create and perform acceptance tests using Calabash with little to no knowledge of Xcode

## Requirements
  - MacOS El Capitan
  - Xcode 7
  - iOS Devices >= 8.0
  - iOS Simulators >= 8.0
  - ruby >= 2.0
  - Homebrew

## Part 1 - Installing Calabash
Before we begin with installing Calabash, we must ensure you have the basic Calabash requirements installed first. I'm going to assume that you have the most recent version of MacOS, Xcode, and the iOS devices/simulators. If you do not, please update them now. Note: If you have the latest Xcode, then you also have the latest iOS simulator.

Next you must install Homebrew. Homebrew is a command line tool that allows you to manage packages in MacOS. It's perfect for installing all of the software that you need with ease.

```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Now install the latest ruby using Homebrew:
```
$ brew install ruby
```

Now we can install the Calabash Sandbox. This will allow us to begin using Calabash with our applications.
```
curl -sSL https://raw.githubusercontent.com/calabash/install/master/install-osx.sh | bash
```

Next is an example on how to begin using the Calabash Sandbox:
```
$ calabash-sandbox
This terminal is now ready to use with Calabash.
To exit, type 'exit'.
```

## Part 2 - Integrating Calabash with an Existing Application
This part is specifically designed to show iOS developers how to set up Calabash with an existing application. If you're a QA person / tester and you've just been given an application with Calabash already pre-configured, then you can skip to Part 3.

Now let's begin with configuring our app. You can use an existing application but I recommend starting simple. I've created a basic application that you can use for this tutorial. You can [download it here](https://github.com/bradleygolden/SimpleApp/archive/master.zip) or if you have use git:
```
$ git clone git@github.com:bradleygolden/SimpleApp.git
```

Open the application in Xcode and you'll see a basic application that I've mostly set up for you however, there are a few things you'll need to do first.

First things first, run the application to ensure it works using ```cmd-r``` or press the play button in the toolbar on the top of Xcode.

<iframe src="https://drive.google.com/file/d/0B3O6dpa-XnSYYnZoWkZFeHZlM2M/preview" width="640" height="480"></iframe>

Now that we know the app works, we will need to add identifiers to all of our UI objects so that Calabash will be able to easily identify them. I'll show you how to do the first UI object and you can do the rest.

Navigate Click the UI object in the Main.storyboard and navigating to the "Identity Inspector" or press ```option + cmd + 3```.





## Part 3 - Performing Automated Acceptance Tests
