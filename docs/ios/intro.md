---
id: intro
title: پوشه | راهنما آی‌اواس | نصب و راه‌اندازی پوشه در Xcode
sidebar_label: راه‌اندازی سریع
hide_title: true
description: راهنمای آی‌اواس - نصب و راه‌اندازی پوشه در Xcode
---

# نصب و راه‌اندازی پوشه در Xcode

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## پیش‌نیازها

- برای داشتن امکان دریافت Push notification در برنامه خود، باید Apple Develeper Account داشته باشید.
- با استفاده از Apple Developer Account خود، یک کلید APNs ایجاد کنید. 
    - [نحوه ایجاد کلید APNs](/docs/ios/extra/apns-key)
- در کنسول فایربیس یک پروژه ایجاد کنید و ‍`Server key` و `Sender ID` دریافت کنید.
    - [نحوه دریافت Sender ID وServer key از فایربیس](/docs/ios/extra/firebase)
- در کنسول فایربیس، یک برنامه متناظر با برنامه خود ایجاد کنید و ‍‍‍فایل `GoogleService-Info.plist` را دریافت کرده و به پروژه خود اضافه کنید. 
    - [نحوه دریافت Sender ID وServer key از فایربیس](/docs/ios/extra/firebase)
- اپلیکشین خود را در ** کنسول پوشه ** ثبت کنید و appId متناظر با برنامه خود را دریافت کنید.
- دستگاه تست باید یک دستگاه فیزیکی باشد. (در حال حاضر simulatorهای Xcode از Push Notification پشتیبانی نمی‌کنند.)
- قابلیت‌های موردنیاز را در Xcode به برنامه خود اضافه کنید.
    - [نحوه فعال کردن قابلیت‌های موردنیاز برای دریافت Push Notification](/docs/ios/extra/capabilities)
- برای دریافت عکس، فیلم و ... در Pushe Notification، یک Notification Service Extension به برنامه خود اضافه کنید.
    - [نحوه اضافه کردن Notification Service Extension](/docs/ios/extra/notification-service-extension)

## نصب پوشه با استفاده از cocoapods

در **`Podfile`** پوشه را برای Target اصلی و Notification Service Extension اضافه کنید:

```ruby
target 'PusheDemo' do
    use_frameworks!
        pod 'Pushe'

    target 'PusheDemoTests' do
        inherit! :search_paths
        # Pods for testing
    end

    target 'PusheDemoUITests' do
        inherit! :search_paths
        # Pods for testing
    end

end

target 'DemoNotificationServiceExtension' do
    use_frameworks!
        pod 'Pushe'
end
```

سپس با دستور زیر می‌توانید پوشه را نصب کنید.

```bash
pod install
```
توجه کنید که ورژن ۰.۹.۰ آخرین ورژن پوشه برای iOS است که از xcode  ورژن ۱۱.۲ و swift ورژن ۵.۱.۲ پشتیبانی می‌کند. در صورتی‌که می‌خواهید ورژن خاصی از پوشه مثلا ورژن ۰.۹.۰ را نصب کنید، به جای 
```ruby
pod Pushe
```
از دستور
```ruby
pod 'Pushe', '0.9.0'
```
استفاده کنید.

## اضافه‌کردن کد‌های لازم

در Target مربوط به برنامه:

<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]}>

<TabItem value="swift">

```swift
// AppDelegate.swift file

import UIKit
import Pushe

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        PusheClient.shared.pusheDelegate = somethingImplementingPusheDelegate    // this line is optional
        PusheClient.shared.start(pusheAppId: "enter your appId from pushe console here")
        
        return true
    }
}
```

</TabItem>

<TabItem value="objc">

```objc
// AppDelegate.m file

#import "AppDelegate.h"
@import Pushe;

@interface AppDelegate () <UNUserNotificationCenterDelegate>

@end

@implementation AppDelegate 

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	PusheClient.shared.delegate = somethingImplementingPusheDelegate;    // this line is optional
    [PusheClient.shared start:@"enter your appId from pushe console here"];
	
    return YES;
}

@end
```

</TabItem>

</Tabs>

و در Target مربوط به `NotificationServiceExtension`:

<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]}>

<TabItem value="swift">

```swift
// NotificationService.swift.swift file

import UserNotifications
import Pushe

class NotificationService: UNNotificationServiceExtension {

    var contentHandler: ((UNNotificationContent) -> Void)?
    var bestAttemptContent: UNMutableNotificationContent?

    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {
        self.contentHandler = contentHandler
        self.bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)
        
        if let bestAttemptContent = self.bestAttemptContent {
            PusheClient.shared.didReceiveNotificationExtensionRequest(mutableContent: bestAttemptContent, contentHandler: contentHandler)
        }
    }
    
    override func serviceExtensionTimeWillExpire() {
        if let contentHandler = self.contentHandler, let bestAttemptContent =  self.bestAttemptContent {
            contentHandler(bestAttemptContent)
        }
    }
}
```

</TabItem>

<TabItem value="objc">

```objc
// NotificationService.m file

#import "NotificationService.h"
@import Pushe;

@interface NotificationService ()

@property (nonatomic, strong) void (^contentHandler)(UNNotificationContent *contentToDeliver);
@property (nonatomic, strong) UNMutableNotificationContent *bestAttemptContent;

@end

@implementation NotificationService

- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler { 
    self.contentHandler = contentHandler;
    self.bestAttemptContent = [request.content mutableCopy];
    
    [PusheClient.shared didReceiveNotificationExtensionRequest:self.receivedRequest
                      withMutableNotificationContent:self.bestAttemptContent];
}

- (void)serviceExtensionTimeWillExpire {
    self.contentHandler(self.bestAttemptContent);
}

@end
```

</TabItem>

</Tabs>

اگر مایل باشید، می‌توانید پروتکل `pusheDelegate` را پیاده‌سازی کنید تا بتوانید callbackهایی را در هنگام دریافت پوش‌نوتیفیکیشن، کلیک کاربر و ... اجرا کنید.

## تست و ثبت دستگاه در پوشه

پس از اجرای برنامه و فراخوانی کد رجیستر پوشه، باید در **Xcode console** لاگ‌های زیر را ببینید (ممکن است به دلیل ارتباط با سرور این پروسه چند ثانیه طول بکشد):

```
registering in Pushe ...
📗 -> successfully registered in Pushe
```
<br /><br />

<!--
## [امکانات](#features)

* برای دریافت DeviceID و AdvertisementID می‌توانید از توابع زیر استفاده کنید.

```swift
let deviceID = PusheApp.getDeviceID()
let advertisementID = PusheApp.getAdvertisementID()
```

```objc
NSString *deviceID = [PusheApp getDeviceID];
NSString *advertisementID = [PusheApp getAdvertisementID];
```
-->

## ادامه‌ی کار
(بر روی لینک مورد نظر کلیک کنید)

### [پروژه‌ی نمونه در گیت‌هاب](https://github.com/pusheco/android-studio-sample)
بررسی امکانات در نمونه‌ای از قبل طراحی شده دارای تمام امکانات کتابخانه‌ی پوشه

### [سوالات و مشکلات احتمالی](/docs/ios/errors)
در صورتی که در یکی از مراحل زیر به مشکلی برخوردید یا هر سوالی در مورد کتابخانه‌ دارید
