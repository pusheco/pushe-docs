---
id: topic
title: پوشه | راهنما آی‌اواس | تاپیک
sidebar_label: تاپیک
hide_title: true
description: راهنمای آی‌اواس - تاپیک
---

# تاپیک

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

تاپیک را می‌توان یک گروه به حساب آورد که کاربران یک اپ را می‌توان به آن اضافه و از آن حذف کرد. شما می‌توانید کاربران خود را در تاپیک یا تاپیک‌های متفاوت ثبت‌نام کنید و برحسب علاقه‌مندی کاربران یا دسته‌بندی خودتان به تاپیک مرتبط پوش بفرستید. مثلا اگر شما اپلیکیشن خبری دارید و کاربرانی به اخبار ورزشی علاقمند هستند و عده‌ای به اخبار فرهنگی، می‌توانید دسته اول را در تاپیک ورزشی و دسته دوم را در تاپیک فرهنگی ثبت‌نام کنید و هنگام ارسال پوش، برحسب محتوای پوش‌تان به تاپیک مرتبط آن را ارسال کنید تا فقط کاربران علاقمند به آن موضوع آن را دریافت کنند.برای استفاده از این امکان باید کاربران خود را در تاپیک مورد نظر عضو کنید. 


## عضویت کاربر در تاپیک

<div dir='ltr'>

#### `func subscribe(topic: String)`
#### `func subscribe(topic: String, completionHandler: @escaping (Error?) -> ())`

</div>

کاربر را به تاپیک‌ مشخص اضافه می‌کند.

|پارامتر ورودی|استفاده|
|:--:|--|
|topic|یک string بیان‌گر عنوان تاپیک موردنظر|

<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]}>

<TabItem value="swift">

```swift
let sportTopic = "sport"
PusheClient.shared.subscribe(topic: sportTopic)
// ----------
let sportTopic = "sport"
PusheClient.shared.subscribe(topic: sportTopic, completionHandler: { (error) in
    // execute your completion closure here
})
```

</TabItem>

<TabItem value="objc">

```objc
// MARK: TODO
```

</TabItem>

</Tabs>

> نام تاپیک باید انگلیسی باشد و Regex آن مطابق داکیومنت فایربیس بصورت زیر است: <br />
> `[a-zA-Z0-9-_.~%]+`

## لغو عضویت کاربر از تاپیک

<div dir='ltr'>

#### `func unsubscribe(topic: String)`
#### `func unsubscribe(topic: String, completionHandler: @escaping (Error?) -> ())`

</div>

عضویت کاربر در تاپیک را حذف می‌کند.

|پارامتر ورودی|استفاده|
|:--:|--|
|topic|یک string بیان‌گر عنوان تاپیک موردنظر|

<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]}>

<TabItem value="swift">

```swift
let topicToRemoveUserFrom = "sport";
PusheClient.shared.unsubscribe(topic: topicToRemoveUserFrom);
// ----------
let topicToRemoveUserFrom = "sport"
PusheClient.shared.unsubscribe(topic: topicToRemoveUserFrom, completionHandler: { (error) in
    // execute your completion closure here
})
```

</TabItem>

<TabItem value="objc">

```objc
// MARK: TODO
```

</TabItem>

</Tabs>
