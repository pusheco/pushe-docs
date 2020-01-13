---
id: notification-data
title: کلاس NotificationData
sidebar_label: کلاس NotificationData
---

# معرفی

کلاس `NotificationData` ورودی callbackهای مربوط به رویداد‌های نوتیفیکیشن در [پروتکل PusheDelegate](/docs/ios/pushe-delegate) است که اطلاعات مربوط به نوتیفیکیشن مربوط را در خود دارد.
این کلاس به صورت زیر تعریف شده است:

```swift
class NotificationData: NSObject {
    public let title: String
    public let subtitle: String?
    public let body: String
    public let mediaURL: String?
}
```

|فیلد|توضیحات|
|:--:|--|
|title|تیتر نوتیفیکیشن|
|body|محتوای نوتیفیکیشن|
|subtitle|تیتر فرعی نوتیفیکیشن|
|mediaURL|آدرس محتوای ضمیمه|