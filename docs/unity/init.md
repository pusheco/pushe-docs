---
id: reg
title: رجیسترکردن
---

**!نکته**: عملیات رجیستر دستگاه فقط یکبار انجام می‌شود و وضعیت بعد از اتمام آن ذخیره می‌شود (در صورتی نصب دوباره و یا پاک‌کردن دیتا این عملیات ریست می‌شود.)


<blockquote>

**تفاوت Registration و Initialization**:

هنگامی که ماژول‌های مختلف پلاس (نوتیفیکیشن، آنالیتیکس و ...) به طور کامل برای استفاده آماده شوند `Initialization` انجام‌شده است.

در صورتی که نصب این دستگاه در سرورهای پوشه ثبت شود و امکان ارسال اعلان ممکن شود، `Registration` انجام‌شده است

لذا عملیات `Registration` نیاز به اینترنت دستگاه‌دارد.

</blockquote>

## Registration
> نسخه‌ی 0.4.3 به بعد

اجرای پروسه‌ی رجیستر به طور خودکار انجام می‌شود. اما برای استفاده از امکانات اضافی باید اسکریپتی بسازید و آن‌را در `Hierarchy` قرار دهید.

## بررسی رجیسترشدن

<div dir='ltr'>

#### `static bool IsRegistered()`

</div>

در صورتی که دستگاه از Firebase cloud توکن‌گرفته باشد و نصب دستگاه در سرور‌های پوشه ثبت‌شده باشد مقدار خروجی صحیح خواهد بود.

```js
var isPusheRegistered = Pushe.IsRegistered();

```

## گرفتن callback هنگام رجیسترشدن
> نسخه‌ی 0.4.3 به بعد


<div dir='ltr'>

#### `static void OnPusheRegistered(RegisterDelegate registerCallback)`

</div>

در صورتی که دستگاه از Firebase cloud توکن‌گرفته باشد و نصب دستگاه در سرور‌های پوشه ثبت‌شده باشد تابع delegate اجرا خواهد شد خواهد بود.

```js

void Start()
{
    Pushe.OnPusheRegistered(OnPusheRegisteredSuccessfully);
}

private void OnPusheRegisteredSuccessfully()
{
    // Registration is done.
    Debug.Log("Pushe is registered!");
}
```
> بهتر است برای استفاده از امکانات پوشه از این تابع استفاده کنید تا مطمئن شوید تا رجیستر انجام نشده‌است،‌ امکانات فراخوانی نشوند.

`RegisterDelegate` یک تابع بدون ورودی و خروجی‌است:

```js
public delegate void RegisterDelegate();
```