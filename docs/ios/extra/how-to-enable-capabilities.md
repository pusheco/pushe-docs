---
id: iOS-capabilities
title: نحوه فعال کردن قابلیت‌های موردنیاز برای دریافت Push Notification
sidebar_label: نحوه فعال کردن قابلیت‌های موردنیاز برای دریافت Push Notification
---

* فایل پروژه را انتخاب کنید. از لیست Targetها، Target اصلی برنامه و از لیست عنوان‌ها، عنوان Capabilitites (در Xcode ورژن ۱۱ این عنوان به Signing & Capabilities تغییر یافته است) را انتخاب کنید. از بین گزینه‌های موجود، Background Modes را فعال کنید و ‌Background fetch و Remote notifications را تیک بزنید.

<img src="/static/img/iOS/04. enableCapabilities.png" />

* گزینه Push Notifications را نیز فعال کنید.

<img src="/static/img/iOS/05. enableCapabiliteis.png" />

همان‌طور که اشاره شد، در Xcode ورژن ۱۱، UI مربوط به این قسمت اندکی عوض شده است. برای افزودن قابلیت‌های اشاره شده در Xcode ورژن ۱۱ باید به این صورت عمل کنید:

<img src="/static/img/iOS/30. Xcode11.png" />

!br

<img src="/static/img/iOS/31. Xcode11.png" />

!br

<img src="/static/img/iOS/32. Xcode11.png" />

!br

<img src="/static/img/iOS/33. Xcode11.png" />

* از لیست عنوان‌ها، عنوان General را انتخاب کنید و مقدار فیلد Deployment Target را به نسخه ۱۰ یا نسخه‌های بعد از ۱۰ سیستم‌عامل iOS تغییر دهید. (لازم به ذکر است که پوشه از نسخه ۸ سیستم‌عامل iOS پشتیبانی می‌کند، ولی قابلیت نمایش مدیا در push notification از نسخه ۱۰ به سیستم‌عامل iOS اضافه شده است.)

<img src="/static/img/iOS/06. settingDeploymentTarget.png" />