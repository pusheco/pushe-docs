---
id: tag
title: پوشه | راهنما آی‌اواس | برچسب (Tag)
sidebar_label: برچسب (Tag)
hide_title: true
description: راهنمای آی‌اواس - برچسب (Tag)
---

# برچسب (Tag)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

هر کاربری که در لیست نصب‌های برنامه قرار گیرد می‌تواند یک جیسون به همراه خود داشته باشد که نمایانگر ویژگی‌های مختلف مختص آن کاربر باشد.
برای ارسال اعلان و ... می‌توان از این تگ‌ها استفاده کرد و دسته‌ی خاصی از کاربران را مشخص کرد.

مثال:
- کاربرانی که در تاریخ خاصی متولد شده‌اند برای ارسال اعلان تبریک تولد.
- کاربرانی که نام آنها محمد است و ۲۵ سال دارند.
- و ...

## اضافه‌کردن تگ

<div dir='ltr'>

#### `func addTags(with keysAndValues: [String: String])`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|keysAndValues|یک دیکشنری به فرم [String: String]|

<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]}>

<TabItem value="swift">

```swift
let tags: [String: String] = ["name": "Mohammad",
                              "age": "25",
                              "birthday": "1435187386"]
PusheClient.shared.addTags(with: tags)
```

</TabItem>

<TabItem value="objc">

```objc
// MARK: TODO
```

</TabItem>

</Tabs>

<br />


> **هر کاربر می‌تواند تا ۱۰ تگ داشته باشد**

## حذف تگ از لیست تگ‌ها

<div dir='ltr'>

#### `func removeTags(with keys: [String])`

</div>

برای حذف می‌توانید لیست کلید‌هایی که می‌خواهید از جیسون تگ حذف کنید را به ورودی تابع بدهید.

|پارامتر ورودی|استفاده|
|:--:|--|
|keys|آرایه‌ای از کلید‌هایی که می‌خواهید از جیسون تگ حذف کنید|


<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]}>

<TabItem value="swift">

```swift
let tags: [String] = ["name", "age" , "birthday"]
PusheClient.shared.removeTags(with: tags)
```

</TabItem>

<TabItem value="objc">

```objc
// MARK: TODO
```

</TabItem>

</Tabs>

## گرفتن لیست تگ‌ها

<div dir='ltr'>

#### `func getSubscribedTags() -> [String: String]`

</div>

خروجی این تابع یک دیکشنری به فرم `[String: String]` متشکل از تمام tagهایی است که برای کاربر ثبت شده‌اند. 

<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]}>

<TabItem value="swift">

```swift
let tags: [String: String] = ["name": "Ali"]
PusheClient.shared.addTags(with: tags);
let subscribedtags = PusheClient.shared.getSubscribedTags()    // subscribedtags: ["name": "Ali"]
```

</TabItem>

<TabItem value="objc">

```objc
// MARK: TODO
```

</TabItem>

</Tabs>
