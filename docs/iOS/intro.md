---
id: xcode-intro
title: راه‌اندازی در Xcode
sidebar_label: راه‌اندازی سریع
---

## پیش‌نیازها

- برای داشتن امکان دریافت Push notification در برنامه خود، باید Apple Develeper Account داشته باشید.
- با استفاده از Apple Developer Account خود، یک کلید APNs ایجاد کنید. 
    - [نحوه ایجاد کلید APNs](/docs/iOS/extra/iOS-APNs-key)
- در کنسول فایربیس، یک برنامه متناظر با برنامه خود ایجاد کنید و ‍‍‍`Server key` و ‍‍‍`Sender ID` دریافت کنید. 
    - [نحوه دریافت Sender ID وServer key از فایربیس](/docs/iOS/extra/iOS-firebase)
- اپلیکشین خود را در ** کنسول پوشه ** ثبت کنید و appId متناظر با برنامه خود را دریافت کنید.
- دستگاه تست باید یک دستگاه فیزیکی باشد. (در حال حاضر simulatorهای Xcode از Push Notification پشتیبانی نمی‌کنند.)
- قابلیت‌های موردنیاز را در Xcode به برنامه خود اضافه کنید.
    - [نحوه فعال کردن قابلیت‌های موردنیاز برای دریافت Push Notification](/docs/iOS/extra/iOS-capabilities)
- برای دریافت عکس، فیلم و ... در Pushe Notification، یک Notification Service Extension به برنامه خود اضافه کنید.
    - [نحوه اضافه کردن Notification Service Extension](/docs/iOS/extra/iOS-NotificationServiceExtension)

## اضافه‌کردن کتابخانه به پروژه با استفاده از cocoapods

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

* در صورتی‌که از زبان `Swift` استفاده می‌کنید:

 محتوای فایل `AppDelegate.swift` را براساس کد زیر تغییر دهید:

```swift
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

اگر مایل باشید، می‌توانید پروتکل `pusheDelegate` را پیاده‌سازی کنید تا بتوانید callbackهایی را در هنگام دریافت پوش‌نوتیفیکیشن، کلیک کاربر و ... اجرا کنید.

 همچنین محتوای فایل NotificationService.swift را مطابق زیر تغییر دهید:

```swift
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

* در صورتی‌که از زبان `Objective-C` استفاده می‌کنید:

 در ابتدا سعی کنید پروژه را Build کنید، اگر با خطای `undefined symbol` مواجه شدید، گام‌های ۱ و ۲ را انجام دهید، در غیراین‌صورت می‌توانید با انجام گام ۳ پوشه را راه‌اندازی کنید:

 گام اول: اطمینان حاصل کنید که در target اصلی برنامه و `Notification Service Extension`، مقدار فیلد `Always Embed Swift Standard Libraries` در قسمت `Build Settings` برابر با `Yes` باشد.     
 <img src="/docs/iOS/images/34. Objc.png" />   

 <img src="/docs/iOS/images/35. Objc.png" />    

 گام دوم: بر روی فایل پروژه‌تان راست کلیک کنید و New File بزنید.

 <img src="/docs/iOS/images/36. Bridging header.png" />   

 از بین گزینه‌های موجود، Swift File را انتخاب کنید وNext را بزنید.     

 <img src="/docs/iOS/images/37. Bridging header.png" />   

 اطمینان حاصل کنید که این فایل هم عضو target اصلی و هم عضو Notification Service Extension پروژه باشد و سپس Create را بزنید.    

 <img src="/docs/iOS/images/38. Bridging header.png" />    

 در مرحله آخر، گزینه Create bridging header را انتخاب کنید.    

 <img src="/docs/iOS/images/39. Bridging header.png" />

* گام سوم: محتوای فایل `AppDelegate.m` را براساس کد زیر تغییر دهید:      
```objc
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
همچنین محتوای فایل NotificationService.m را مطابق زیر تغییر دهید:        
```objc
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

## تست و ثبت دستگاه در پوشه

پس از اجرای برنامه و فراخوانی کد رجیستر پوشه، باید در **Xcode console** لاگ‌های زیر را ببینید (ممکن است به دلیل ارتباط با سرور این پروسه چند ثانیه طول بکشد):

```
registering in Pushe ...
📗 -> successfully registered in Pushe
```
<br /><br />

## ادامه‌ی کار
(بر روی لینک مورد نظر کلیک کنید)

### [پروژه‌ی نمونه در گیت‌هاب](https://github.com/pusheco/android-studio-sample)
بررسی امکانات در نمونه‌ای از قبل طراحی شده دارای تمام امکانات کتابخانه‌ی پوشه

### [سوالات و مشکلات احتمالی](/docs/android-studio/studio-errors)
در صورتی که در یکی از مراحل زیر به مشکلی برخوردید یا هر سوالی در مورد کتابخانه‌ دارید

### [مشاهده‌ی امکانات بیشتر](/docs/android-studio/studio-advanced)
مشاهده‌ی امکانات پیشرفته ارائه‌ شده در کتابخانه‌‌ی پوشه