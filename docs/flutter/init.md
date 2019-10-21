---
id: flutter-init
title: رجیسترکردن
---

**!نکته**: عملیات رجیستر دستگاه فقط یکبار انجام می‌شود و وضعیت بعد از اتمام آن ذخیره می‌شود (در صورتی نصب دوباره و یا پاک‌کردن دیتا این عملیات ریست می‌شود.)

## تابع Initialize

<div dir='ltr'>

#### `static void initialize({bool showDialog: true})`

</div>


|پارامتر ورودی|استفاده|
|:--:|--|
|showDialog| در صورتی که مقدار صحیح‌داده شود و دستگاه گوگل‌پلی‌سرویس نداشته‌باشد، دیالوگی مبنی بر نصب آن نمایش‌داده می‌شود. مقدار پیش‌فرض **صحیح** است.|

شروع عملیات رجیسترکردن دیوایس در پوشه. تمام عملیات‌ها و قابلیت‌های پوشه (بجز گرفتن شناسه‌ی پوشه‌آی‌دی) نیازمند رجیستر موفق هستند. 


```js
Pushe.initialize();


// Is identical to:
Pushe.initialize(showDialog: true);
```
## بررسی رجیستر‌شدن


<div dir='ltr'>

#### `static Future<bool> isPusheInitialized()`

</div>

در صورتی که دستگاه از Firebase cloud توکن‌گرفته باشد و نصب دستگاه در سرور‌های پوشه ثبت‌شده باشد مقدار خروجی صحیح خواهد بود.

```js
bool isPusheInitialized = await Pushe.isPusheInitialized();
if (isPusheInitialized) {
    // Do something when pushe is registered.
}



// Or the non-async way

Pushe.isPusheInitialized().then((pusheInitialized) {
    if (pusheInitialized) {
        // Do something when pushe is registered.
    }
});
```

> با توجه به اینکه عملیات رجیستر نیاز به اینترنت دارد ممکن است این پروسه مقداری زمان بگیرد برای همین فراخوانی این کرد مستقیما بعد از `initialize` مقدار غلط خواهد داشت و باید بعد از مدت کوتاهی این کد را استفاده کنید.