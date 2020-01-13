---
id: capabilities
title: پوشه | راهنما آی‌اواس | نحوه فعال کردن قابلیت‌های موردنیاز برای دریافت Push Notification
sidebar_label: نحوه فعال کردن قابلیت‌های موردنیاز برای دریافت Push Notification
hide_title: true
description: راهنمای آی‌اواس - نحوه فعال کردن قابلیت‌های موردنیاز برای دریافت Push Notification
---

# نحوه فعال کردن قابلیت‌های موردنیاز برای دریافت Push Notification

* فایل پروژه را انتخاب کنید. از لیست Targetها، Target اصلی برنامه و از لیست عنوان‌ها، عنوان Capabilitites (در Xcode ورژن ۱۱ این عنوان به Signing & Capabilities تغییر یافته است) را انتخاب کنید. از بین گزینه‌های موجود، Background Modes را فعال کنید و ‌Background fetch و Remote notifications را تیک بزنید.

 ![IOS IMAGE](/img/ios/04.enableCapabilities.png)

* گزینه Push Notifications را نیز فعال کنید.

 ![IOS IMAGE](/img/ios/05.enableCapabilities.png)

همان‌طور که اشاره شد، در Xcode ورژن ۱۱، UI مربوط به این قسمت اندکی عوض شده است. برای افزودن قابلیت‌های اشاره شده در Xcode ورژن ۱۱ باید به این صورت عمل کنید:

 ![IOS IMAGE](/img/ios/30.Xcode11.png)
!br

 ![IOS IMAGE](/img/ios/31.Xcode11.png)

!br

 ![IOS IMAGE](/img/ios/32.Xcode11.png)

!br

 ![IOS IMAGE](/img/ios/33.Xcode11.png)

* از لیست عنوان‌ها، عنوان General را انتخاب کنید و مقدار فیلد Deployment Target را به نسخه ۱۰ یا نسخه‌های بعد از ۱۰ سیستم‌عامل iOS تغییر دهید. (لازم به ذکر است که پوشه از نسخه ۸ سیستم‌عامل iOS پشتیبانی می‌کند، ولی قابلیت نمایش مدیا در push notification از نسخه ۱۰ به سیستم‌عامل iOS اضافه شده است.)

 ![IOS IMAGE](/img/ios/06.settingDeploymentTarget.png)