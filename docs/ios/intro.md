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

- برای داشتن امکان دریافت `Push notification` در برنامه خود، باید `Apple Develeper Account` داشته باشید.
- با استفاده از `Apple Developer Account` خود، یک کلید `APNs` ایجاد کنید.
    - [نحوه ایجاد کلید APNs](/docs/ios/extra/apns-key)
- در کنسول فایربیس یک پروژه ایجاد کنید و ‍`Server key` و `Sender ID` دریافت کنید.
    - [نحوه دریافت Sender ID و Server key از فایربیس](/docs/general/firebase/get-credentials)
- در کنسول فایربیس، یک برنامه ایجاد کرده و فایل `GoogleService-Info.plist` دریافتی را به پروژه خود در `Xcode` اضافه کنید.
    - [نحوه ایجاد برنامه در فایربیس و دریافت فایل GoogleService-Info.plist](/docs/ios/extra/firebase/create-app)
- کلید `APNs` خود را در برنامه‌تان در فایربیس آپلود کنید.
    - [نحوه آپلود کلید APNs در فایربیس](/docs/ios/extra/firebase/upload-apns-to-firebase)
- اپلیکشین خود را در ** کنسول پوشه ** ثبت کنید و `appId` متناظر با برنامه خود را دریافت کنید.
- دستگاه تست باید یک دستگاه فیزیکی باشد. (در حال حاضر `simulator`های `Xcode` از `Push Notification` پشتیبانی نمی‌کنند.)
- قابلیت‌های موردنیاز را در `Xcode` به برنامه خود اضافه کنید.
    - [نحوه فعال کردن قابلیت‌های موردنیاز برای دریافت Push Notification](/docs/ios/extra/capabilities)
- برای دریافت عکس، فیلم و ... در `Pushe Notification`، یک `Notification Service Extension` به برنامه خود اضافه کنید.
    - [نحوه اضافه کردن Notification Service Extension](/docs/ios/extra/notification-service-extension)

## نصب پوشه با استفاده از cocoapods

در **`Podfile`** پوشه را برای Target اصلی و Notification Service Extension اضافه کنید:

```ruby
target 'PusheDemo' do
    use_frameworks!
        pod 'Pushe', '1.0.5'

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
        pod 'Pushe', '1.0.5'
end
```

سپس با دستور زیر می‌توانید پوشه را نصب کنید.

```bash
pod install --repo-update
```
## اضافه‌کردن کد‌های لازم

در فایل `Info.plist` متناظر با `Target` برنامه، کلید‌ها و مقادیر زیر را وارد کنید.

<div dir='ltr'>

| key | value | type |
|--|:--:|--|
|PusheAppId|دریافتی از کنسول پوشه [appId](/docs/ios/extra/pushe/how-to-get-pushe-app-id)|String|
|FirebaseAppDelegateProxyEnabled|NO|Boolean|

</div>

و در Target مربوط به `NotificationServiceExtension`:

<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]}>

<TabItem value="swift">

```swift
// NotificationService.swift file

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
    
    [PusheClient.shared didReceiveNotificationExtensionRequest:self.bestAttemptContent :self.contentHandler];
}

- (void)serviceExtensionTimeWillExpire {
    self.contentHandler(self.bestAttemptContent);
}

@end
```

</TabItem>

</Tabs>

## تست و ثبت دستگاه در پوشه

پس از اجرای برنامه و فراخوانی کد رجیستر پوشه، باید در کنسول **Xcode** لاگ‌های زیر را ببینید (ممکن است به دلیل ارتباط با سرور این پروسه چند ثانیه طول بکشد):

```
Setting up Pushe ...
apns-token:<f5b7616ba649b73bc1dae34e019e35fc2602ecb05d578b369a85a8c480480abc>
fcm-token:<uIMhZl83bOudsizqViJSl4:APA91bFNClxSt2AoVWl37MlXQS_RXlWAEJpRR44dcqBg-jfUvpfc0kclcYV4-hZAGvighZmvVF0lracKDZMtSuQNu6bJhXok6GI_pE8kxfDNXFq98ParWvjex8aAUPzB93gUQn0SKLBU>
registering in Pushe ...
📗 -> successfully registered in Pushe
```
<br /><br />

## ادامه‌ی کار
(بر روی لینک مورد نظر کلیک کنید)

### [پروژه‌ی نمونه در گیت‌هاب](https://github.com/pusheco/android-studio-sample)
بررسی امکانات در نمونه‌ای از قبل طراحی شده دارای تمام امکانات کتابخانه‌ی پوشه

### [سوالات و مشکلات احتمالی](/docs/ios/errors)
در صورتی که در یکی از مراحل زیر به مشکلی برخوردید یا هر سوالی در مورد کتابخانه‌ دارید
