---
id: pnative-adsetup
title: راه اندازی پیشرفته
sidebar_label: راه‌اندازی پیشرفته
---

## ماژول‌ها

ماژول **Base** متشکل از سه ماژول اصلی است:

### Core

مدیریت پیام‌های ارسالی و دریافتی به عهده‌ی این ماژول است.

```js
co.pushe.plus:core:${plus_version}
```

### Notification

این ماژول ساخت و مدیریت نوتیفیکیشن‌های جهت نمایش به کاربر را مدیریت می‌کند و تمام موارد مربوط به ساخت نوتیفیکیشن در این ماژول اجرا می‌شود.

```js
co.pushe.plus:notification:${plus_version}
```

### Analytics

موارد track کردن رفتار کاربر در برنامه‌ی شما همچون تعداد بازکردن برنامه، ارسال و دریافت Event و Ecommerce data و ... در این ماژول به انجام می‌رسد.

```js
co.pushe.plus:analytics:${plus_version}
```

### اضافه‌کردن ماژول‌های دلخواه

ممکن است شما بخواهید بر حسب نیاز از همه‌ی امکانات استفاده نکنید. در این صورت می‌توانید ماژول‌های لازم را اضافه‌کنید.

```java

// Must be added
implementation 'co.pushe.plus:core:${plus_version}'

// Use Notification
implementation 'co.pushe.plus:notification:${plus_version}'

// Use Analytics
implementation 'co.pushe.plus:analytics:${plus_version}'
```

در غیر اینصورت تمام آن‌ها را اضافه‌کنید:

```java
// Base module including all features of Plus
implementation 'co.pushe.plus:base:${plus_version}'
```