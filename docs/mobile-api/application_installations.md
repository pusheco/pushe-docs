---
id: application_installations
title: وب‌سرویس موبایل (اندروید و آی‌او‌اس) پوشه | pushe.co Android, iOS API
hide_title: true
sidebar_label: تاریخچه نصب‌های یک اپلیکیشن
---

# دریافت تاریخچه نصب‌های یک اپلیکیشن با وب‌سرویس پوشه


برای دریافت تاریخچه نصب‌های یک اپلیکیشن می‌توانید از آدرس
`https://api.pushe.co/v2/applications/{platform}/YOUR_APPLICATION_ID/export/`
بصورت زیر استفاده کنید:

```
curl -X POST https://api.pushe.co/v2/applications/{platform}/YOUR_APPLICATION_ID/export/ -H 'authorization: Token YOUR_TOKEN' -H 'content-type: application/json' 
```

مقادیر مجاز برای `platform` می‌تواند `android` و `ios` باشد.

|        کلید|     فرمت کلید|               توضیحات|
| ---------- |:------------:|---------------------:|
|`YOUR_APPLICATION_ID`(‌اجباری) | رشته(String) |   کلید `YOUR_APPLICATION_ID` در `url` اجباری می‌باشد.  |

فرمت پاسخ دریافتی بدین صورت خواهد بود:


```json
{
   "result": true
}
```
