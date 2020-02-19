---
id: event
title: پوشه | راهنما آی‌اواس | رویدادها
sidebar_label: رویدادها
hide_title: true
description: راهنمای آی‌اواس - رویدادها
---

# رویدادها

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

در صورتی که ایونت(رویداد) خاصی در برنامه اتفاق افتاد می‌توانید آن‌ را با استفاده از Pushe ثبت کنید.

##  رویداد چیست

برای بررسی کردن رفتار کاربرانتان هنگام استفاده از اپلیکیشن، می‌توانید هر جایی که اکشن کاربر برای شما اهمیت دارد یک رویداد یا ایونت به سمت سرورهای پوشه ارسال کنید. برای مثال وقتی کاربر وارد صفحه خرید می‌شود، وقتی که کاربر روی دکمه جستجو کلیک می‌کند و یا در صورتی که کاربر پلن خود را در برنامه از رایگان به پولی تغییر میدهد و به اصطلاح پرمیوم می‌شود و ...

اینکه چه رویدادی را ثبت کنید به مدیر محصول، تیم مارکتینگ و یا کسی که تحلیل رفتارهای کاربران در اپلیکیشن را انجام می‌دهد بستگی دارد

## ارسال رویداد

> **منظور از رویداد یا ایونت چیست؟**<br /><br />
> برای مثال در صورتی که کاربر پلن خود را در برنامه از رایگان به پولی تغییر داد می‌توان از این امکان برای ارسال و ثبت این رویداد استفاده نمود.

<div dir='ltr'>

#### `@objc(sendEventWithName:) func sendEvent(with name: String)`
#### `@objc(sendEvent:) func sendEvent(event: Event)`

</div>

<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]}>

<TabItem value="swift">

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

</TabItem>

<TabItem value="objc">

```objc
NSString * _Nonnull eventName = @"permium_activated";
[PusheClient.shared sendEventWithName:eventName];
// ----------
NSString * _Nonnull eventName = @"permium_activated";
EventAction * eventAction = EventActionPurchase;
NSDictionary * _Nonnull eventData = @{@"first": @1,
                                      @"second": @{@"nested": @"something"},
                                      @"third": @TRUE};
Event * _Nonnull event = [[Event alloc] initWithName:eventName action:eventAction data:eventData];
[PusheClient.shared sendEvent:event];
```

</TabItem>

</Tabs>