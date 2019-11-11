---
id: cordova-topic
title: گروه‌بندی با تاپیک
---

تاپیک را می‌توان یک گروه به حساب آورد که کاربران یک اپ را می‌توان به آن اضافه و از آن حذف کرد.

## عضویت کاربر در تاپیک

از: `co.ronash.pushe.Pushe`

<div dir='ltr'>

#### `static void subscribe(Context, topicName)`

</div>

کاربر را به تاپیک‌ مشخص اضافه می‌کند.

```java
String sportTopic = "sport";
Pushe.subscribe(sportTopic);
```

## لغو عضویت کاربر از تاپیک

از: `co.ronash.pushe.Pushe`
#### `static void unsubscribe(Context, topicName)`

کاربر را از تاپیک در صورت وجود حذف می‌کند (در صورتی که قبلا عضو نشده‌باشد اتفاقی نمی‌افتد)

```java
String topicToRemoveUserFrom = "sport";
Pushe.unsubscribe(topicToRemoveUserFrom);
```
