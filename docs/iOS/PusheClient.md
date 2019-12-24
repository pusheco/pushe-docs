---
id: Pushe-Client
title: کلاس PusheClient
sidebar_label: کلاس PusheClient
---

# معرفی

کلاس `PusheClient`، رابط شما با پوشه خواهد بود. این کلاس پروتکل `PusheProtocol` را پیاده‌سازی کرده است. برای call کردن این توابع باید از
```swift
public static let shared = PusheClient()
```
که در کلاس `PusheClient` تعریف شده است، استفاده کنید.
همچنین کلاس `` دارای 
```swift
public weak var delegate: PusheDelegate?
```
است که callbackهای مختلفی را در اختیار شما قرار می‌دهد. می‌توانید پروتکل `PusheDeleage` را پیاده‌سازی کرده و این متغیر را مقداردهی کنید.