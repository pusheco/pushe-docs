---
id: pushe-protocol
title: پوشه | راهنما آی‌اواس | پروتکل PusheProtocol
sidebar_label: پروتکل PusheProtocol
hide_title: true
description: راهنمای آی‌اواس - پروتکل PusheProtocol
---

# معرفی پروتکل PusheProtocol

پروتکل `PusheProtocol`، توابعی را که پوشه در اختیار کاربر قرار می‌دهد، در خود دارد و کلاس ‍‍`PusheClient` این پروتکل را پیاده‌سازی کرده است. این توابع در ادامه معرفی شده‌اند.

## functionها

<div dir='ltr'>

### `didReceiveNotificationExtensionRequest(::)`

</div>

```swift
@available(iOS 10.0, *)
@objc(didReceiveNotificationExtensionRequest::) func didReceiveNotificationExtensionRequest(mutableContent: UNMutableNotificationContent, contentHandler: @escaping (UNNotificationContent) -> ())
```
این تابع محتوای ضمیمه شده به پوش نوتیفیکیشن را دانلود می‌کند. این تابع را باید در تابع

<div dir='ltr'>

`didReceive(_:withContentHandler:)`

</div>

از کلاس `NotificationService` که در `Target` متناظر با `NotificationServiceExtension` قرار دارد، `call` کنید.

&nbsp; &nbsp; &nbsp; &nbsp;[نحوه اضافه کردن Notification Service Extension](/docs/ios/extra/notification-service-extension)

-----

<div dir='ltr'>

### `isRegistered()`

</div>

```swift
@objc(isRegistered) func isRegistered() -> Bool
```

وضعیت ثبت دستگاه در سرورهای پوشه را مشخص می‌کند.

<div dir='ltr'>

-----

### `getAPNsToken()`

</div>

```swift
@objc(getAPNsTokenAsString) func getAPNsToken() -> String?
@objc(getAPNsTokenAsData) func getAPNsToken() -> Data?
```

در صورت دریافت توکن `APNs` توسط دستگاه، این توکن رو بر‌می‌گرداند. درغیراین‌صورت `nil` برمی‌گرداند.

<div dir='ltr'>

-----

### `getDeviceId()`

</div>

```swift
@objc(getDeviceId) func getDeviceId() -> String?
```

مقدار متناظر با 
<div dir='ltr'>

`UIDevice.current.identifierForVendor?.uuidString`

</div>

را برای دستگاه برمی‌گرداند.

-----

<div dir='ltr'>

### `getAdvertisingId()`

</div>

```swift
@objc(getAdvertisingId) func getAdvertisingId() -> String
```

مقدار متناظر با 
<div dir='ltr'>

`ASIdentifierManager.shared().advertisingIdentifier.uuidString`

</div>

را برای دستگاه برمی‌گرداند.

-----

<div dir='ltr'>

### `subscribe(to:)`

</div>

```swift
@objc(subscribe:) func subscribe(to topic: String)
```

user را در topic ورودی، ثبت‌نام می‌کند.

<div dir='ltr'>

### `subscribe(to:completionHandler:)`

</div>

```swift
@objc(subscribe::) func subscribe(to topic: String, completionHandler: @escaping (Error?) -> ())
```

user را در topic ورودی ثبت‌نام می‌کند، سپس closure ورودی را اجرا می‌کند.

-----

<div dir='ltr'>

### `unsubscribe(from:)`

</div>

```swift
@objc(unsubscribe:) func unsubscribe(from topic: String)
```

ثبت‌نام user در topic ورودی را باطل می‌کند.

<div dir='ltr'>

### `unsubscribe(from:completionHandler:)`

</div>

```swift
@objc(unsubscribe::) func unsubscribe(from topic: String, completionHandler: @escaping (Error?) -> ())
```

ثبت‌نام user را در topic ورودی باطل می‌کند، سپس closure ورودی را اجرا می‌کند.

-----

<div dir='ltr'>

### `getSubscribedTopics()`

</div>

```swift
@objc(getSubscribedTopics) func getSubscribedTopics() -> [String]
```

تاپیک‌هایی که کاربر در آن‌ها عضویت دارد را برمی‌گرداند.

-----

<div dir='ltr'>

### `addTags(with:)`

</div>

```swift
@objc(addTags:) func addTags(with keysAndValues: [String: String])
```

`tag`های ورودی را برای کاربر ثبت می‌کند. توجه کنید که برای هر دستگاه حداکثر می‌توانید ۱۰ عدد `tag` تعریف کنید.

-----

<div dir='ltr'>

### `removeTags(with:)`

</div>

```swift
@objc(removeTags:) func removeTags(with keys: [String])
```

تگ‌های دارای کلید‌های مشخص‌شده را برای کاربر در صورت وجود حذف می‌کند.

-----

<div dir='ltr'>

### `getSubscribedTags()`

</div>

```swift
@objc(getSubscribedTags) func getSubscribedTags() -> [String: String]
```

یک دیکشنری شامل تگ‌هایی که برای کاربر ثبت شده‌اند را برمی‌گرداند.

-----

<div dir='ltr'>

### `sendEvent(event:)`

</div>

```swift
@objc(sendEvent:) func sendEvent(event: Event)
```

رویداد ورودی را برای کاربر ثبت می‌کند.

<div dir='ltr'>

### `sendEvent(with:)`

</div>

```swift
@objc(sendEventWithName:) func sendEvent(with name: String)
```

رویدادی را با نام ورودی می‌سازد و برای کاربر ثبت می‌کند.

## `property` ها

<div dir='ltr'>

### `registerationCompletionHandler`

</div>

```swift
@objc var registerationCompletionHandler: (() -> ())? { get set }
```

می‌توانید `callback` خود برای رجیسترشدن دستگاه در پوشه را به این متغیر ‍‍‍‍`assign` کنید. پس از رجیستر شدن دستگاه در پوشه، این `closure` اجرا خواهد شد.