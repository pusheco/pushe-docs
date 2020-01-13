---
id: callbacks
title: پوشه | راهنما آی‌اواس | رویدادهای نوتیفیکیشن
sidebar_label: رویدادهای نوتیفیکیشن
hide_title: true
description: راهنمای آی‌اواس - رویدادهای نوتیفیکیشن
---

# رویدادهای نوتیفیکیشن

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

در صورتی که نوتیفیکیشنی از پوشه به کاربر ارسال شود،
می‌توانید callbackی تعریف‌ کنید و هنگام رخ‌دادن یکی از رویدادهای زیر کدهای خود را فراخوانی کنید:
* دریافت نوتیفیکیشن (در صورتی‌که کاربر برنامه را `force close` نکرده باشد.)
* دریافت JSON یا silent notification (در صورتی‌که کاربر برنامه را `force close` نکرده باشد.)
* کاربر بر روی اعلان کلیک کند

## اجرای کد هنگام رخ‌دادن رویداد

<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]}>

<TabItem value="swift">

```swift
class MyCallbacks: PusheDelegate {
    // protocol implementation
}

...

PusheClient.shared.delegate = myCallbacksInstance
```

</TabItem>

<TabItem value="objc">

```objc
// MARK: TODO
```

</TabItem>

</Tabs>

## پروتکل `PusheDelegate`

برای اطلاعات بیشتر در مورد این پروتکل، به [PusheDelegate's API reference](/docs/ios/pushe-delegate) مراجعه کنید.

```swift
protocol PusheDelegate {
    func userNotGrantedNotificationsPermission()
    func didReceivedRemoteNotification(notification: NotificationData)
    func didReceivedResponseForNotification(notification: NotificationData)
}
```

`NotificationData`دارای فیلدهای زیر است:

|فیلد|توضیحات|
|:--:|--|
|title|تیتر نوتیفیکیشن|
|body|محتوای نوتیفیکیشن|
|subtitle|تیتر فرعی نوتیفیکیشن|
|mediaURL|آدرس محتوای ضمیمه|

برای اطلاعات بیشتر در مورد کلاس `NotificationData`، به [ٔNotificationData's API reference](/docs/ios/notification-data) مراجعه کنید.