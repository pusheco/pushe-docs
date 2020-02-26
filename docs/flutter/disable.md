---
id: disable-notification
title: پوشه | راهنمای فلاتر | غیرفعال‌کردن نمایش اعلان
sidebar_label: غیرفعال‌کردن نمایش اعلان
hide_title: true
description: راهنمای فلاتر - غیرفعال‌کردن نمایش اعلان
---

# غیرفعال‌کردن نمایش اعلان

import Platforms from '@site/src/components/Platforms.jsx'

به طور پیش‌فرض نمایش اعلان برای کاربر فعال‌است. اما می‌توان نمایش اعلان را برای کاربر با استفاده از کد غیرفعال و یا مجددا فعال نمود.


## غیرفعال‌کردن نمایش اعلان
<Platforms android />

> تمام نسخه‌ها


```js
Pushe.setNotficationOff();
```

## فعال‌کردن نمایش اعلان
<Platforms android />

> تمام نسخه‌ها

```js
Pushe.setNotficationOn();
```

## بررسی وضعیت نمایش اعلان
<Platforms android />

> تمام نسخه‌ها


در صورتی که نمایش اعلان برای کاربر فعال‌باشد، این تابع مقدار صحیح برمی‌گرداند.

```js
bool showingNotificationEnabled = await Pushe.isNotificationOn();

if (showingNotificationEnabled) {
    // Notification will be shown
} else {
    // Notification will NOT be shown
}
```