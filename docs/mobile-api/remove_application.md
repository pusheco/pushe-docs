---
id: remove_application
title: وب‌سرویس موبایل (اندروید و آی‌او‌اس) پوشه | pushe.co Android, iOS API
hide_title: true
sidebar_label: حذف اپلیکیشن
---

# حذف اپلیکیشن با وب‌سرویس پوشه


 در پوشه بصورت کلی برای حذف نام اپلیکیشن خود می‌توانید از آدرس
`https://api.pushe.co/v2/applications/{platform}/YOUR_APPLICATION_ID/`
بصورت زیر استفاده نمایید:

```
curl -X DELETE https://api.pushe.co/v2/applications/{platform}/YOUR_APPLICATION_ID/ -H 'authorization: Token YOUR_TOKEN' -H 'content-type: application/json'
```

مقادیر مجاز برای `platform` می‌تواند `android` و `ios` باشد.

|        کلید|     فرمت کلید|               توضیحات|
| ---------- |:------------:|---------------------:|
|`YOUR_APPLICATION_ID`(‌اجباری) | رشته(String) |   کلید `YOUR_APPLICATION_ID` در `url` اجباری می‌باشد.  |

