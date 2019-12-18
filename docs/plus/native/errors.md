---
id: pnative-errors
title: خطاهای احتمالی
---

## خطای Firebase version

پوشه از سرویس Firebase messaging برای پیام‌ها استفاده می‌کند و و نسخه‌ی استفاده‌شده **17.6.0** است.
ممکن است لایبرری‌های فایربیس دیگری که در برنامه اضافه می‌کنید با این نسخه‌ ناسازگار باشد. برای حل این مشکل می‌توانید لایبرری‌های فایربیس را که پوشه اضافه کرده خودتان اضافه کنید و نسخه‌ را مطابق نیاز خود تغییر دهید.

برای مثال:

```java
implementation 'com.google.firebase:firebase-messaging:+' // Any version you need, like the latest
implementation 'com.google.firebase:firebase-core:+' // Any version you need, like the latest
```