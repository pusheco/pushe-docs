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

#### `@objc(subscribe:) func subscribe(to topic: String)`
#### `@objc(subscribe::) func subscribe(to topic: String, completionHandler: @escaping (Error?) -> ())`

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
NSString *_Nonnull sportTopic = @"sport";
[PusheClient.shared subscribe:sportTopic];
// ----------
NSString *_Nonnull sportTopic = @"sport";
[PusheClient.shared subscribe:sportTopic :^(NSError * _Nullable error) {
  // execute your completion closure here 
}];
```

</TabItem>

</Tabs>

> نام تاپیک باید انگلیسی باشد و Regex آن مطابق داکیومنت فایربیس بصورت زیر است: <br />
> `[a-zA-Z0-9-_.~%]+`

## لغو عضویت کاربر از تاپیک

<div dir='ltr'>

#### `@objc(unsubscribe:) func unsubscribe(from topic: String)`
#### `@objc(unsubscribe::) func unsubscribe(from topic: String, completionHandler: @escaping (Error?) -> ())`

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
NSString *_Nonnull sportTopic = @"sport";
[PusheClient.shared unsubscribe:sportTopic];
// ----------
NSString *_Nonnull sportTopic = @"sport";
[PusheClient.shared unsubscribe:sportTopic :^(NSError * _Nullable error) {
  // execute your completion closure here 
```

</TabItem>

</Tabs>

## تاپیک‌هایی که کاربر در حال حاضر در آن‌ها عضویت دارد

<div dir='ltr'>

#### `@objc(getSubscribedTopics) public func getSubscribedTopics() -> [String]`

</div>

تاپیک‌هایی که در حال حاضر کاربر در آن‌ها عضویت دارد، را به صورت آرایه‌ای از `String`ها برمی‌گرداند.

<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]}>

<TabItem value="swift">

```swift
let subscribedTopics = PusheClient.shared.getSubscribedTopics()
```

</TabItem>

<TabItem value="objc">

```objc
NSArray<NSString *> * _Nonnull subscribedTopics = [PusheClient.shared getSubscribedTopics];
```

</TabItem>

</Tabs>