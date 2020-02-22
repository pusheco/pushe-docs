---
id: registration
title: بررسی آماده‌ به‌کار شدن کتابخانه
sidebar_label: بررسی آماده‌ به‌کار شدن کتابخانه
---

import Platforms from '@site/src/components/Platforms.jsx'

شروع به کار پوشه در برنامه در دو مرحله‌ی اصلی انجام می‌شود. **Initialization** و **Registration**.

> **تفاوت Registration و Initialization در اندروید**:    
> هنگامی که ماژول‌های مختلف (نوتیفیکیشن، آنالیتیکس و ...) به طور کامل برای استفاده آماده شوند `Initialization` انجام‌شده است.
> در صورتی که نصب این دستگاه در سرورهای پوشه ثبت شود و امکان ارسال اعلان ممکن شود، `Registration` انجام‌ شده است
> لذا عملیات `Registration` نیاز به اینترنت دستگاه‌ دارد.

## بررسی initialize شدن
<Platforms android />

 برای چک کردن initialization پوشه می‌توانید از متد زیر استفاده کنید:


```js
Pushe.setInitializationCompleteListener(() {
  // Modules are ready to use
  // Again, this does not mean device is registered to server
});
```

و برای بررسی بدون استفاده از رویداد:

```js
bool modulesReady = await Pushe.isInitialized()
```

## بررسی رجیستر‌شدن
<Platforms android />

می‌توانید از کالبک زیر برای دریافت رویداد رجیسترشدن دستگاه استفاده کنید:

```js
Pushe.setRegistrationCompleteListener(() {
  // Registration completed. You may now use functionalities of Pushe
});
```

در صورتی که دستگاه از Firebase cloud توکن‌گرفته باشد و نصب دستگاه در سرور‌های پوشه ثبت‌شده باشد مقدار خروجی صحیح خواهد بود.

```js
bool isRegisteredToServer = await Pushe.isRegistered();

```