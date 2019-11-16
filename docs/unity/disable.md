---
id: unity-disable
title: غیرفعال‌کردن نمایش اعلان
---


به طور پیش‌فرض نمایش اعلان برای کاربر فعال‌است. اما می‌توان نمایش اعلان را برای کاربر با استفاده از کد غیرفعال و یا مجددا فعال نمود.

## غیرفعال‌کردن نمایش اعلان
> تمام نسخه‌ها


<div dir='ltr'>

#### `static void SetNotificationOff()`

</div>

```js
Pushe.SetNotficationOff();
```

## فعال‌کردن نمایش اعلان
> تمام نسخه‌ها


<div dir='ltr'>

#### `static void SetNotificationOn()`

</div>

```js
Pushe.SetNotficationOn();
```

## بررسی فعال‌بودن نمایش اعلان
> نسخه‌ی 1.3 به بعد


<div dir='ltr'>

#### `static void IsNotificationOn()`

</div>

```js
var isNotificationOn = Pushe.IsNotficationOn();
```