---
id: event
title: پوشه | راهنما آی‌اواس | رویدادها
sidebar_label: رویدادها
hide_title: true
description: راهنمای آی‌اواس - رویدادها
---

# رویدادها

در صورتی که ایونت(رویداد) خاصی در برنامه اتفاق افتاد می‌توانید آن‌ را با استفاده از Pushe ثبت کنید.

## ارسال رویداد

> **منظور از رویداد یا ایونت چیست؟**<br /><br />
> برای مثال در صورتی که کاربر پلن خود را در برنامه از رایگان به پولی تغییر داد می‌توان از این امکان برای ارسال و ثبت این رویداد استفاده نمود.

<div dir='ltr'>

#### `func sendEvent(name: String)`
#### `func sendEvent(event: Event)`

</div>

```swift
let eventName = "permium_activated";
PusheClient.shared.sendEvent(name: eventName);
// ----------
let eventName = "permium_activated";
let eventAction = EventAction.purchase
let eventData: [String: Any] = ["first": 1,
                                "second": ["nested": "something"],
                                "third": true]
let event = Event(name: eventName, action: eventAction, data: eventData)
PusheClient.shared.sendEvent(event: event)
```