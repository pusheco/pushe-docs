---
id: firebase
title: نحوه دریافت Sender ID وServer key از فایربیس
sidebar_label: نحوه دریافت Sender ID وServer key از فایربیس
---

* به صفحه [کنسول فایربیس](https://console.firebase.google.com) بروید. اگر تاکنون پروژه‌ای را که میخواهید برنامه‌تان را به آن اضافه کنید، نساخته‌اید، یک پروژه جدید بسازید:

<img src="/static/img/iOS/14. firebase.png" />

* برنامه iOS جدیدی را به پروژه خود اضافه کنید:
<img src="/static/img/iOS/15. firebase.png" />

* Bundle Identifier متناظر با Target اصلی برنامه خود در Xcode را وارد کنید:

<img src="/static/img/iOS/16. firebase.png" />

* فایل GoogleService-Info.plist را دانلود کنید.

<img src="/static/img/iOS/17. firebase.png" />

* فایل دانلود شده در قسمت قبل را در فولدر مربوط به پروژه اصلی خود در Xcode بیندازید(drag&drop):

<img src="/static/img/iOS/18. firebase.png" />

* فایل موردنظر به فایل‌های پروژه شما اضافه خواهد شد:

<img src="/static/img/iOS/19. firebase.png" />

* در این مرحله فقط کافیست next را بزنید:

<img src="/static/img/iOS/20. firebase.png" />

* در این مرحله نیز فقط next را بزنید:

<img src="/static/img/iOS/21. firebase.png" />

* برروی Skip this step کلیک کنید:

<img src="/static/img/iOS/22. firebase.png" />

* در قسمت تنظیمات برای برنامه‌ای که ایجاد کرده‌اید، عنوان Cloud Messaging را انتخاب کنید. Server key و Sender ID را در کنسول پوشه برای ساخت برنامه جدید باید وارد کنید.

<img src="/static/img/iOS/23. firebase.png" />

* در این قسمت باید APNs Authentication Key خود را آپلود کنید.
<img src="/static/img/iOS/24. firebase.png" />