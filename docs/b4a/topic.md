---
id: b4a-topic
title: گروه‌بندی کاربران با تاپیک
---

تاپیک را می‌توان یک گروه به حساب آورد که کاربران یک اپ را می‌توان به آن اضافه و از آن حذف کرد.

## عضویت کاربر در تاپیک


<div dir='ltr'>

#### `Sub subscribe(topicName As String)`

</div>

کاربر را به تاپیک‌ مشخص اضافه می‌کند.

```js
Dim Pushe As Pushe
Dim topic As String = "topicName"
Pushe.subscribe(topic)
```

> نام تاپیک باید انگلیسی باید و Regex آن مطابق داکیومنت فایربیس بصورت زیر است:
> `[a-zA-Z0-9-_.~%]+`

## لغو عضویت کاربر از تاپیک

<div dir='ltr'>

#### `Sub unsubscribe(topicName As String)`

</div>

کاربر را از تاپیک در صورت وجود حذف می‌کند (در صورتی که قبلا عضو نشده‌باشد اتفاقی نمی‌افتد)

```js
Dim Pushe As Pushe
Dim topic As String = "topicName"
Pushe.unsubscribe(topic)
```