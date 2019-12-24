---
id: Pushe-Delegate
title: پروتکل PusheDelegate
sidebar_label: پروتکل PusheDelegate
---

# معرفی

این پروتکل `callback`هایی را که پوشه در اختیار شما قرار می‌دهد، تعریف کرده است. کلاس `PusheClient` دارای متغیری به صورت
```swift
public weak var delegate: PusheDelegate?
```
است. می‌توانید با پیاده‌سازی پروتکل `PusheDelegate` و assign کردن ‍‍‍`delegate` برای `PusheClient` از طریق 
```swift
PusheClient.shared.delegate = yourPusheDelegateImplementation
```
`callback`های خود را به پوشه معرفی کنید.

## functionها

### userNotGrantedNotificationsPermission

```swift
func userNotGrantedNotificationsPermission()
```

این callback زمانی اجرا خواهد که کاربر اجازه دریافت پوش نوتیفیکیشن را به برنامه شما ندهد.

### didReceivedRemoteNotification

```swift
func didReceivedRemoteNotification(notification: PusheNotification)
```

این callback زمانی اجرا خواهد شد که برنامه شما یک پوش نوتیفیکیشن را دریافت کند، البته در صورتی که کاربر برنامه شما را force close نکرده باشد.

### didReceivedResponseForNotification

```swift
func didReceivedResponseForNotification(notification: PusheNotification)
```
این callback زمانی اجرا خواهد که کاربر بر روی پوش نوتیفیکیشن دریافت‌شده کلیک کند.