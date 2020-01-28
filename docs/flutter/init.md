---
id: flutter-init
title: بررسی آماده‌ به‌کار شدن کتابخانه
sidebar_label: بررسی آماده‌ به‌کار شدن کتابخانه
---

شروع به کار پوشه در برنامه در دو مرحله‌ی اصلی انجام می‌شود. **Initialization** و **Registration**.

**تفاوت Registration و Initialization**:

هنگامی که ماژول‌های مختلف (نوتیفیکیشن، آنالیتیکس و ...) به طور کامل برای استفاده آماده شوند `Initialization` انجام‌شده است.

در صورتی که نصب این دستگاه در سرورهای پوشه ثبت شود و امکان ارسال اعلان ممکن شود، `Registration` انجام‌ شده است

لذا عملیات `Registration` نیاز به اینترنت دستگاه‌ دارد.

## بررسی initialize شدن
 برای چک کردن initialization پوشه می‌توانید از متد زیر استفاده کنید:

<div dir='ltr'>

#### `static Future<bool> isInitialized()`

</div>

## بررسی رجیستر‌شدن

<div dir='ltr'>

#### `static Future<bool> isRegistered()`

</div>

در صورتی که دستگاه از Firebase cloud توکن‌گرفته باشد و نصب دستگاه در سرور‌های پوشه ثبت‌شده باشد مقدار خروجی صحیح خواهد بود.

```js
bool isRegistered = await Pushe.isRegistered();
if (isRegistered) {
    // کاری که میخواهید بعد از ثبت شدن دستگاه در پوشه انجام دهید را اینجا میتوانید بنویسید
}



// Or the non-async way

Pushe.isRegistered().then((pusheRegistered) {
    if (pusheRegistered) {
    // کاری که میخواهید بعد از ثبت شدن دستگاه در پوشه انجام دهید را اینجا میتوانید بنویسید
    }
});
```