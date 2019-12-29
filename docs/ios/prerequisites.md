---
id: prerequisites
title: پیش‌نیازها
sidebar_label: پیش‌نیازها
---

- برای داشتن امکان دریافت Push notification در برنامه خود، باید Apple Develeper Account داشته باشید.
- با استفاده از Apple Developer Account خود، یک کلید APNs ایجاد کنید. 
    - [نحوه ایجاد کلید APNs](/docs/ios/extra/apns-key)
- در کنسول فایربیس، یک برنامه متناظر با برنامه خود ایجاد کنید و ‍‍‍`Server key` و ‍‍‍`Sender ID` دریافت کنید. 
    - [نحوه دریافت Sender ID وServer key از فایربیس](/docs/ios/extra/firebase)
- اپلیکشین خود را در ** کنسول پوشه ** ثبت کنید و appId متناظر با برنامه خود را دریافت کنید.
- دستگاه تست باید یک دستگاه فیزیکی باشد. (در حال حاضر simulatorهای Xcode از Push Notification پشتیبانی نمی‌کنند.)
- قابلیت‌های موردنیاز را در Xcode به برنامه خود اضافه کنید.
    - [نحوه فعال کردن قابلیت‌های موردنیاز برای دریافت Push Notification](/docs/ios/extra/capabilities)
- برای دریافت عکس، فیلم و ... در Pushe Notification، یک Notification Service Extension به برنامه خود اضافه کنید.
    - [نحوه اضافه کردن Notification Service Extension](/docs/ios/extra/notification-service-extension)