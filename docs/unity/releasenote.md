---
id: releasenote
title: تغییرات نسخه‌ها
sidebar_label: تغییرات نسخه‌ها
---

# تغییرات نسخه‌ها

> [**Pushe unity on GitHub**](https://github.com/pusheco/pushe-unity)

## نسخه‌ی ۰.۴.۷ ([دانلود](https://static.pushe.co/d/unity/pushe-plus-unity-0.4.7.unitypackage))
- مهاجرت لایبرری پوشه به **AndroidX**.
- افزودن سازگاری با حالت `unity as library` در Unity 2017 و بالاتر
- بروزرسانی لایبرری پوشه به آخرین نسخه‌ (۲.۱.۱)
- تابع `GetPusheId` حذف شده. برای تمایزکاربران بایستی از شناسه‌های دیگر استفاده کنید.
- اضافه‌شدن سازگاری با `GDPR compliance`. ([?What is GDPR](https://gdpr.eu/what-is-gdpr/))
- تابع `GetAndroidId` منسوخ‌شده است. زین پس می‌توانید از `GetDeviceId` برای گرفتن شناسه‌ی یکتای دستگاه اندرویدی استفاده کنید.


## نسخه‌ی ۰.۴.۶ ([دانلود](https://static.pushe.co/d/unity/pushe-plus-unity-0.4.6.unitypackage))
- بروزرسانی لایبرری پوشه به آخرین نسخه‌ (۲.۰.۵)
- اضافه‌کردن `com.unity3d` به `multidex-config` برای جلوگیری از خطای شروع برنامه.
- رفع مشکل `ClassNotFoundException` هنگام استفاده از تابع `CreateNotificationChannel()`

## نسخه‌ی ۰.۴.۴ ([دانلود](https://static.pushe.co/d/unity/pushe-plus-unity-0.4.4.unitypackage))
- رفع خطای مربوط به لایبرری **RxJava** هنگام کامپایل بازی
- تغییرات در رویداد نوتیفیکیشن

## نسخه‌ی ۰.۴.۳ ([دانلود](https://github.com/pusheco/pushe-unity-sample/blob/master/pushe-plus-unity-0.4.3.unitypackage))
- اضافه‌کردن متدهای کمک کننده به ارتباط اسکریپت بازی و لایبرری نیتیو
- اضافه‌کردن پشتیبانی از رویداد نوتیفیکیشن
- اضافه‌کردن مالتی‌دکس در پلاگین
- اضافه‌کردن مد دیباگ