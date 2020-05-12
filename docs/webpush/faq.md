---
id: faq
title: سوالات متداول وب‌پوش پوشه | pushe.co
hide_title: true
sidebar_label: سوالات متداول
---

# سوالات متداول

۱. چگونه می‌توان در کنار سرویس ورکر پوشه سرویس ورکر دیگری هم در روت سایت داشت؟

> برای استفاده از دو یا چند سرویس ورکر در روت پروژه می‌توانید آدرس سرویس ورکرهای دیگر را در داخل فایل سرویس ورکر پوشه
که `pushe-sw.js` می‌باشد به شکل زیر قرار دهید:    
`importScripts("sw.js");`    
بدین صورت در نهایت تمامی سرویس ورکرها مرج شده و تبدیل به یک سرویس ورکر می‌شوند.


 در صورتی که مشکل یا خطایی در راه اندازی وب پوش خورده اید می توانید در [گیت‌هاب پوشه](https://github.com/pusheco/webpush-samples/issues) و در قسمت **issues** آن را گزارش کنید

[https://github.com/pusheco/webpush-samples](https://github.com/pusheco/webpush-samples/issues)