---
id: rename_website
title: وب‌سرویس وب‌پوش پوشه | pushe.co webpush notification api
hide_title: true
sidebar_label: تغییر نام وب‌سایت
---

# تغییر نام وب‌سایت با وب‌سرویس پوشه


 در پوشه بصورت کلی برای تغیر نام اپلیکیشن خود می‌توانید از آدرس
`https://api.pushe.co/v2/applications/web/YOUR_APPLICATION_ID/`
بصورت زیر استفاده نمایید:

```
curl -X PATCH https://api.pushe.co/v2/applications/web/YOUR_APPLICATION_ID/ -H 'authorization: Token YOUR_TOKEN' -H 'content-type: application/json' -d '{"name": "YOUR_APPLICATION_NAME"}'
```

|        کلید|     فرمت کلید|               توضیحات|
| ---------- |:------------:|---------------------:|
|`YOUR_APPLICATION_ID`(‌اجباری) | رشته(String) |   کلید `YOUR_APPLICATION_ID` در `url` اجباری می‌باشد. دقت کنید که بجای این کلید شما باید `app_id` سایت خود را قرار دهید.  |
|`name`(اجباری)                 | رشته(String) |  اسم جدید پکیج اپلیکیشن شما  |


فرمت پاسخ دریافتی بدین صورت خواهد بود:
 
 ```json
 {
         "name": "NEW SITE NAME",
         "pushe_subdomain": "PUSHE_SUBDOMAIN",
         "domain" : "YOUR_SITE_DOMAIN",
         "app_id": "UNIQUE_IDENTIFIER_GENERATED_BY_PUSHE",
         "created_at": "UTC TIMEZONE",
         "is_https": "A BOOLEAN REPRESENT YOUR SITE IS HTTPS OR NOT",
         "icon_url": "YOUR_SITE_FAV_ICON",
         "type": "SMALL INTEGER NUMBER",
         "active_users": "NUMBER OF ACTIVE USERS"
     }
 ```