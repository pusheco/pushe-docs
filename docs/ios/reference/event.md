---
id: event
title: پوشه | راهنما آی‌اواس | کلاس Event
sidebar_label: کلاس Event
hide_title: true
description: راهنمای آی‌اواس - کلاس Event
---

# معرفی کلاس Event

کلاس Event داده‌های مربوط به یک رویداد را در خود نگه می‌دارد.
این کلاس به صورت زیر تعریف شده است:

```swift
@objc public class Event: NSObject {
    let name: String
    let action: EventAction
    let data: [String: Any]
}
```

|فیلد|توضیحات|
|:--:|--|
|name|نام رویداد|
|action|کنش رویداد|
|data|داده‌های رویداد|