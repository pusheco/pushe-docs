---
id: firebase
title: پوشه | راهنما آی‌اواس | نحوه دریافت Sender ID وServer key از فایربیس
sidebar_label: نحوه دریافت Sender ID وServer key از فایربیس
hide_title: true
description: راهنمای آی‌اواس - نحوه دریافت Sender ID وServer key از فایربیس
---

# نحوه دریافت Sender ID وServer key از فایربیس

* به صفحه [کنسول فایربیس](https://console.firebase.google.com) بروید. اگر تاکنون پروژه‌ای را که میخواهید برنامه‌تان را به آن اضافه کنید، نساخته‌اید، یک پروژه جدید بسازید:

 ![IOS IMAGE](/img/ios/14.firebase.png)

* برنامه iOS جدیدی را به پروژه خود اضافه کنید:

 ![IOS IMAGE](/img/ios/15.firebase.png)

* Bundle Identifier متناظر با Target اصلی برنامه خود در Xcode را وارد کنید:

 ![IOS IMAGE](/img/ios/16.firebase.png)

* فایل GoogleService-Info.plist را دانلود کنید.

 ![IOS IMAGE](/img/ios/17.firebase.png)

* فایل دانلود شده در قسمت قبل را در فولدر مربوط به پروژه اصلی خود در Xcode بیندازید(drag&drop):

 ![IOS IMAGE](/img/ios/18.firebase.png)

* فایل موردنظر به فایل‌های پروژه شما اضافه خواهد شد:

 ![IOS IMAGE](/img/ios/19.firebase.png)

* در این مرحله فقط کافیست next را بزنید:

 ![IOS IMAGE](/img/ios/20.firebase.png)

* در این مرحله نیز فقط next را بزنید:

 ![IOS IMAGE](/img/ios/21.firebase.png)

* برروی Skip this step کلیک کنید:

 ![IOS IMAGE](/img/ios/22.firebase.png)

* در قسمت تنظیمات برای برنامه‌ای که ایجاد کرده‌اید، عنوان Cloud Messaging را انتخاب کنید. Server key و Sender ID را در کنسول پوشه برای ساخت برنامه جدید باید وارد کنید.

 ![IOS IMAGE](/img/ios/23.firebase.png)

* در این قسمت باید APNs Authentication Key خود را آپلود کنید.

 ![IOS IMAGE](/img/ios/24.firebase.png)