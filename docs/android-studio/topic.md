---
id: studio-topic
title: تاپیک
---

تاپیک را می‌توان یک گروه به حساب آورد که کاربران یک اپ را می‌توان به آن اضافه و از آن حذف کرد.

## عضویت کاربر در تاپیک

از: `co.ronash.pushe.Pushe`
> تمام نسخه‌ها

<div dir='ltr'>

#### `static void subscribe(Context, topicName)`

</div>

کاربر را به تاپیک‌ مشخص اضافه می‌کند.

```java
String sportTopic = "sport";
Pushe.subscribe(sportTopic);
```

> نام تاپیک باید انگلیسی باید و Regex آن مطابق داکیومنت فایربیس بصورت زیر است:
> `[a-zA-Z0-9-_.~%]+`

## لغو عضویت کاربر از تاپیک

از: `co.ronash.pushe.Pushe`
> تمام نسخه‌ها

<div dir='ltr'>

#### `static void unsubscribe(Context, topicName)`

</div>

کاربر را از تاپیک در صورت وجود حذف می‌کند (در صورتی که قبلا عضو نشده‌ باشد اتفاقی نمی‌افتد)

```java
String topicToRemoveUserFrom = "sport";
Pushe.unsubscribe(topicToRemoveUserFrom);
```
