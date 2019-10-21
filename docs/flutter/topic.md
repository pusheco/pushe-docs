---
id: flutter-topic
title: گروه‌بندی کاربران با تاپیک
---

تاپیک را می‌توان یک گروه به حساب آورد که کاربران یک اپ را می‌توان به آن اضافه و از آن حذف کرد.

## عضویت کاربر در تاپیک


<div dir='ltr'>

#### `static void subscribe(topicName)`

</div>

کاربر را به تاپیک‌ مشخص اضافه می‌کند.

```js
var sportTopic = "sport";
Pushe.subscribe(sportTopic);
```

## لغو عضویت کاربر از تاپیک

<div dir='ltr'>

#### `static void unsubscribe(topicName)`

</div>

کاربر را از تاپیک در صورت وجود حذف می‌کند (در صورتی که قبلا عضو نشده‌باشد اتفاقی نمی‌افتد)

```js
var topicToRemoveUserFrom = "sport";
Pushe.unsubscribe(topicToRemoveUserFrom);
```

## گرفتن تاپیک‌های کاربر

<div dir='ltr'>

#### `static Future<List<String>> getSubscribedTopic()`

</div>

برای گرفتن تاپیک‌هایی که این دیوایس در آنها عضو است می‌توانید از کد زیر استفاده کنید:

```js
var usersTopics = await Pushe.getSubscribedTopics();



// Or use the non-async way
Pushe.getSubscribedTopics().then((topics) {
    // Use the topic list of the device.
})
```