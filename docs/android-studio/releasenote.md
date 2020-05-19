---
id: releasenote
title: تغییرات نسخه ها
sidebar_label: تغییرات نسخه ها
---


### نسخه ۲.۱.۱

- اضافه‌شدن سازگاری با `GDPR compliance`. ([?What is GDPR](https://gdpr.eu/what-is-gdpr/))

 - منسوخ شدن `getAndroidId`. از این به بعد می‌توانید در عوض از `getDeviceId` استفاده کنید.

 - حذف تابع `getPusheId`. برای تمایز کاربران بایستی از شناسه‌های دیگر استفاده کنید.
  ([تمایز کاربران با شناسه‌ها](https://docs.pushe.co/docs/android-studio/unification/))

### نسخه ۲.۱.۰

- مهاجرت به **AndroidX**. در صورتی که تمایل داشته باشید این نسخه‌ و نسخه‌های بالاتر را استفاده کنید بایستی پروژه‌ی شما نیز از AndroidX استفاده کند. ([?What is AndroidX](https://developer.android.com/jetpack/androidx))

- رفع مشکل عدم سازگاری کتابخانه با **Firebase cloud messaging** و **Firebase instance ID** نسخه 20.1.1 و بالاتر
، در صورتی که پروژه شما از `firebase-messaging` و `firebase-iid` نسخه `20.1.1` و بالاتر استفاده میکند باید حتما از این نسخه کتابخانه پوشه و یا نسخه های بالاتر استفاده کنید.
([Firebase release-note](https://firebase.google.com/support/release-notes/android))
- رفع خطای `FIS_AUTH_ERROR` و `Please Enter your project ID` از سمت فایربیس ([Github issue](https://github.com/pusheco/pushe-android-studio-sample/issues/29))

- سازگاری قابلیت **Notification badge** برای اندروید‌های **4.4 (API 19) و بالاتر** ([?What is NotificationBadge](https://developer.android.com/training/notify-user/badges))

### نسخه ۲.۰.۵

- اضافه‌شدن امکان انصراف از نوتیفیکیشن برنامه‌ریزی شده. در صورتی که یک نوتیفیکیشن برای ارسال به کاربر برنامه‌ریزی شده باشد امکان کنسل‌کردن آن وجود دارد.

- رفع باگ‌

### نسخه ۲.۰.۴

- اضافه شدن کالبک به افزودن تگ. شما میتوانید با استفاده از این کالبک مطلع شوید که کار اضافه شدن تگ به درستی انجام شده است یا نه.


### نسخه ۲.۰.۱

- تغییر نوع تگ هایی که به کاربران میتوان اختصاص داد. به جای لیستی از رشته ها اکنون میتوانید تگ ها را به صورت کلید و مقدار به کاربرانتان اختصاص دهید.

- تعییر ساختار توکن اپلیکیشن

- اضافه شدن `getSubscribedTags` برای گرفتن لیست تگ های اختصاص داده شده به کاربر