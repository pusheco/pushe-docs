---
id: pushe-protocol
title: پروتکل PusheProtocol
sidebar_label: پروتکل PusheProtocol
---

# معرفی

پروتکل `PusheProtocol`، توابعی را که پوشه در اختیار کاربر قرار می‌دهد، در خود دارد و کلاس ‍‍`PusheClient` این پروتکل را پیاده‌سازی کرده است. این توابع در ادامه معرفی شده‌اند.

## functionها

### start

```swift
public func start(pusheAppId: String)
```

با `appId` ورودی، پوشه را راه‌اندازی می‌کند. این تابع را در تابع 
```swift
application(_:didFinishLaunchingWithOptions:)
```
از کلاس ‍‍`AppDelegate` برنامه خود، call کنید.

### didReceiveNotificationExtensionRequest

```swift
public func didReceiveNotificationExtensionRequest(mutableContent: UNMutableNotificationContent, contentHandler: @escaping (UNNotificationContent) -> ()) 
```
این تابع محتوای ضمیمه شده به پوش نوتیفیکیشن را دانلود می‌کند. این تابع را باید در تابع
```swift
didReceive(_:withContentHandler:)
```
از کلاس `NotificationService` در call `NotificationServiceExtension Target` کنید.

### subscribe

```swift
public func subscribe(topic: String)
```

user را در topic ورودی، ثبت‌نام می‌کند.

```swift
public func subscribe(topic: String, completionHandler: @escaping (Error?) -> ())
```
user را در topic ورودی ثبت‌نام می‌کند، سپس closure ورودی را اجرا می‌کند.
### unsubscribe

```swift
public func unsubscribe(topic: String)
```

ثبت‌نام user در topic ورودی را باطل می‌کند.

```swift
func unsubscribe(topic: String, completionHandler: @escaping (Error?) -> ())
```

ثبت‌نام user را در topic ورودی باطل می‌کند، سپس closure ورودی را اجرا می‌کند.