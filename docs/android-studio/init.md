---
id: studio-init
title: بررسی initialization
sidebar_label: بررسی initialization
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

شروع به کار پوشه در برنامه در دو مرحله‌ی اصلی انجام می‌شود. **Initialization** و **Registration**.

<blockquote>

**تفاوت Registration و Initialization**:

هنگامی که ماژول‌های مختلف (نوتیفیکیشن، آنالیتیکس و ...) به طور کامل برای استفاده آماده شوند `Initialization` انجام‌شده است.

در صورتی که نصب این دستگاه در سرورهای پوشه ثبت شود و امکان ارسال اعلان ممکن شود، `Registration` انجام‌شده است

لذا عملیات `Registration` نیاز به اینترنت دستگاه‌ دارد.

</blockquote>
می‌توانید از اتمام initialization پوشه در برنامه خود با خبر شوید. به این ترتیب می‌توانید پس از initialize شدن ماژول‌های پوشه عملیات دلخواه خود را انجام دهید.

به این منظور از دستور زیر استفاده نمایید:

```java
Pushe.setInitializationCompleteListener(new Pushe.Callback() {
    @Override
    public void onComplete() {
        Log.i("Pushe", "Pushe initialization completed successfully.");
        // your logic
    }
});
```

**نکته**: انجام‌شدن Initialization به معنی ثبت‌شدن دستگاه نیست و مربوط به ماژول‌های لایبرری‌ست.

همچنین برای چک کردن initialization پوشه می‌توانید از متد زیر استفاده کنید:

```java
Pushe.isInitialized();
```

### بررسی رجیستر شدن

برای اینکه بررسی کنید عملیات رجیسترکردن دستگاه در پوشه انجام شده‌است، می‌توانید از دو روش استفاده کنید:

* تابع `isRegistered`
* ست‌کردن Listener

<div dir='ltr'>

#### `isRegistered(): Boolean`

</div>

در صورتی که دستگاه از Firebase cloud توکن‌گرفته باشد و نصب دستگاه در سرور‌های پوشه ثبت‌شده باشد مقدار خروجی صحیح خواهد بود.

<Tabs
  defaultValue="kt"
  values={[
    { label: 'Java', value: 'java', },
    { label: 'Kotlin', value: 'kt', },
  ]}>

<TabItem value="kt">

```java
val isPusheRegistered = Pushe.isRegistered()
```

</TabItem>

<TabItem value="java">

```java
boolean isPusheRegistered = Pushe.isRegistered();
```

</TabItem>

</Tabs>

<br />

<div dir='ltr'>

#### `setRegistrationCompleteListener(Callback registerCallback)`

</div>

در صورتی که دستگاه از Firebase cloud توکن‌گرفته باشد و نصب دستگاه در سرور‌های پوشه ثبت‌شده باشد تابع callback اجرا خواهد شد خواهد بود.

<Tabs
  defaultValue="kt"
  values={[
    { label: 'Java', value: 'java', },
    { label: 'Kotlin', value: 'kt', },
  ]
}>

<TabItem value="kt">

```java
Pushe.setRegistrationCompleteListener {
    // Registration is completed, do whatever you want.
}
```

</TabItem>

<TabItem value="java">

```java
Pushe.setRegistrationCompleteListener(new Pushe.Callback() {
    @Override
    public void onComplete() {
        // Registration is completed, do whatever you want.
    }
});
```

</TabItem>

</Tabs>

> بهتر است برای استفاده از امکانات پوشه از این تابع استفاده کنید تا مطمئن شوید تا رجیستر انجام نشده‌است،‌ امکانات فراخوانی نشوند.

