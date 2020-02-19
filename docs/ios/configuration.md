---
id: configuration
title: پوشه | راهنما آی‌اواس | بررسی آماده‌ به‌کار شدن کتابخانه 
sidebar_label: بررسی آماده‌ به‌کار شدن کتابخانه
hide_title: true
description: راهنمای آی‌اواس - بررسی آماده‌ به‌کار شدن کتابخانه 
---

# بررسی آماده‌ به‌کار شدن کتابخانه

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## بررسی رجیستر شدن

برای اینکه بررسی کنید عملیات رجیسترکردن دستگاه در پوشه انجام شده‌ است، می‌توانید از دو روش استفاده کنید:

* تابع `isRegistered`

<div dir='ltr'>

#### `@objc(isRegistered) func isRegistered() -> Bool`

</div>

در صورتی که دستگاه از Firebase cloud توکن‌ گرفته باشد و نصب دستگاه در سرور‌های پوشه ثبت‌ شده باشد مقدار خروجی صحیح خواهد بود.

<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]}>

<TabItem value="swift">

```swift
let isPusheRegistered = PusheClient.shared.isRegistered()
```

</TabItem>

<TabItem value="objc">

```objc
BOOL isPusheRegistered = [PusheClient.shared isRegistered];
```

</TabItem>

</Tabs>

<br />

* پیاده‌سازی و ست کردن تابع `registerationCompletionHandler`

<div dir='ltr'>

#### `@objc var registerationCompletionHandler: (() -> ())? { get set }`

</div>

در صورتی که دستگاه از Firebase cloud توکن‌ گرفته باشد و نصب دستگاه در سرور‌های پوشه ثبت‌ شده باشد تابع `registerationCompletionHandler` اجرا خواهد شد.

<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]
}>

<TabItem value="swift">

```swift
PusheClient.shared.registerationCompletionHandler = {
  // your callback's code goes here
}
```

</TabItem>

<TabItem value="objc">

```objc
PusheClient.shared.registerationCompletionHandler = ^{
  // your callback's code goes here
};
```

</TabItem>

</Tabs>

> بهتر است برای استفاده از امکانات پوشه از این تابع استفاده کنید تا مطمئن شوید تا رجیستر  انجام نشده‌ است،‌ امکانات فراخوانی نشوند. برای مثال وقتی می‌خواهید کاربری را عضو تاپیکی کنید بهتر است ابتدا بررسی کنید که عملیات رجیستر پوشه انجام شده باشد. 

