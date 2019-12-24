---
id: rename_application
title: وب‌سرویس موبایل (اندروید و آی‌او‌اس) پوشه | pushe.co Android, iOS API
hide_title: true
sidebar_label: تغییر نام اپلیکیشن
---

# تغییر نام اپلیکیشن با وب‌سرویس پوشه


 در پوشه بصورت کلی برای تغیر نام اپلیکیشن خود می‌توانید از آدرس
`https://api.pushe.co/v2/applications/{platform}/YOUR_APPLICATION_ID/`
بصورت زیر استفاده نمایید:

```
curl -X PATCH https://api.pushe.co/v2/applications/{platform}/YOUR_APPLICATION_ID/ -H 'authorization: Token YOUR_TOKEN' -H 'content-type: application/json' -d '{"name": "YOUR_APPLICATION_NAME"}'
```
مقادیر مجاز برای `platform` می‌تواند `android` و `ios` باشد.

|        کلید|     فرمت کلید|               توضیحات|
| ---------- |:------------:|---------------------:|
|`YOUR_APPLICATION_ID`(‌اجباری) | رشته(String) |   کلید `YOUR_APPLICATION_ID` در `url` اجباری می‌باشد.  |
|`name`(اجباری)                 | رشته(String) |  اسم جدید پکیج اپلیکیشن شما  |


فرمت پاسخ دریافتی بدین صورت خواهد بود:
 
 ```json
 {
     "name": "NEW_APP_NAME",
     "package_name": "PACKAGE_NAME",
     "app_id": "UNIQUE IDENTIFIER",
     "created_at": "2018-10-11T13:25:31.050004Z",
     "framework": 4,
     "aggregator": null,
     "has_one_signal_user": false,
     "type": 1,
     "provider": null,
     "credential": {
         "server_key": "server_key",
         "client_key": "client_key"
     },
     "active_users": 0,
     "installation_count": 0,
     "owner": "YOUR_EMAIL_ADDRESS",
     "welcome_template": null,
     "update_template": null,
     "welcome_template_v2": null,
     "update_template_v2": null,
     "welcome_active": false,
     "icon_url": null
 }
 ```
