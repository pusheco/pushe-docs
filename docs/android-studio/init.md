---
id: studio-init
title: رجیستر‌کردن
---

**!نکته**: عملیات رجیستر دستگاه فقط یکبار انجام می‌شود و وضعیت بعد از اتمام آن ذخیره می‌شود (در صورتی نصب دوباره و یا پاک‌کردن دیتا این عملیات ریست می‌شود.)

## تابع Initialize

از: `co.ronash.pushe.Pushe`

<div dir='ltr'>

`static void initialize(Context, boolean showGooglePlayDialog)`

</div>


|پارامتر ورودی|استفاده|
|:--:|--|
|showGooglePlayDialog| در صورتی که مقدار صحیح‌داده شود و دستگاه گوگل‌پلی‌سرویس نداشته‌باشد، دیالوگی مبنی بر نصب آن نمایش‌داده می‌شود.|

شروع عملیات رجیسترکردن دیوایس در پوشه. تمام عملیات‌ها و قابلیت‌های پوشه (بجز گرفتن شناسه‌ی پوشه‌آی‌دی) نیازمند رجیستر موفق هستند. 


```java
Pushe.initialize(this, true);
```
## بررسی رجیستر‌شدن

از: `co.ronash.pushe.Pushe`

<div dir='ltr'>

`static boolean isPusheInitialized(Context)`

</div>

در صورتی که دستگاه از Firebase cloud توکن‌گرفته باشد و نصب دستگاه در سرور‌های پوشه ثبت‌شده باشد مقدار خروجی صحیح خواهد بود.

```java
boolean isPusheInitialized = Pushe.isPusheInitialized(this);
if (isPusheInitialized) {
    // Do something when pushe is registered.
}
```

> با توجه به اینکه عملیات رجیستر نیاز به اینترنت دارد ممکن است این پروسه مقداری زمان بگیرد برای همین فراخوانی این کرد مستقیما بعد از `initialize` مقدار غلط خواهد داشت و باید بعد از مدت کوتاهی این کد را استفاده کنید.