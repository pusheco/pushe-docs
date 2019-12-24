---
id: pnative-reg
title: رجیسترکردن
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



> **!نکته**: عملیات رجیستر دستگاه فقط یکبار انجام می‌شود و وضعیت بعد از اتمام آن ذخیره می‌شود (در صورتی نصب دوباره و یا پاک‌کردن دیتا این عملیات ریست می‌شود.)

---

شروع به کار پوشه در برنامه در دو مرحله‌ی اصلی انجام می‌شود. **Initialization** و **Registration**.

<blockquote>

**تفاوت Registration و Initialization**:

هنگامی که ماژول‌های مختلف پلاس (نوتیفیکیشن، آنالیتیکس و ...) به طور کامل برای استفاده آماده شوند `Initialization` انجام‌شده است.

در صورتی که نصب این دستگاه در سرورهای پوشه ثبت شود و امکان ارسال اعلان ممکن شود، `Registration` انجام‌شده است

لذا عملیات `Registration` نیاز به اینترنت دستگاه‌دارد.

</blockquote>


## Registration

اجرای پروسه‌ی رجیستر به طور خودکار انجام می‌شود. اما برای استفاده از امکانات اضافی باید اسکریپتی بسازید و آن‌را در `Hierarchy` قرار دهید.

## بررسی رجیسترشدن

برای اینکه بررسی کنید عملیات رجیسترکردن دستگاه در پوشه انجام شده‌است، می‌توانید از دو روش استفاده کنید:

* تابع `isRegistered`
* ست‌کردن Listener

<div dir='ltr'>

#### `IsRegistered(): Boolean`

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
