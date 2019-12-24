---
id: get_website_list
title: وب‌سرویس وب‌پوش پوشه | pushe.co webpush notification api
hide_title: true
sidebar_label: دریافت لیست وب‌سایت‌ها 
---

# دریافت لیست وب‌سایت‌ها با وب‌سرویس پوشه


برای دریافت لیست سایت‌های خود می‌توانید از آدرس 
`https://api.pushe.co/v2/applications/web/`
بصورت زیر استفاده نمایید:

```
curl -X GET https://api.pushe.co/v2/applications/web/ -H 'authorization: Token YOUR_TOKEN' -H 'content-type: application/json'
```


پاسخ دریافتی برای درخواست‌‌ مشاهده لیست سایت‌ها بدین فرمت خواهد بود:

```json
[
    {
        "name": "SITE_NAME",
        "pushe_subdomain": "PUSHE_SUBDOMAIN",
        "domain" : "YOUR_SITE_DOMAIN",
        "app_id": "UNIQUE_IDENTIFIER_GENERATED_BY_PUSHE",
        "created_at": "UTC TIMEZONE",
        "is_https": "A BOOLEAN REPRESENT YOUR SITE IS HTTPS OR NOT",
        "icon_url": "YOUR_SITE_FAV_ICON",
        "type": "SMALL INTEGER NUMBER",
        "active_users": "NUMBER OF ACTIVE USERS"
    }
]

```
 
|               کلید      |    توضیح      |
| ----------------------- |--------------:|
| `name`                  |              نام سایت‌‌ شما.   |
| `app_id`                |              شناسه اپلیکیشن شما در پوشه.   |
| `pushe_subdomain`       | نام زیردامنه‌ای شما در پوشه، درصورتی که سایت شما `https` باشد این مقدار برای شما null قرار می‌گیرد.   |
| `domain`                | دامنه سایت شما.   |
| `created_at`            | زمانی که اپلیکیشن شما ساخته شده است.   |
| `is_https`              | اگر سایت شما https باشد این مقدار برابر true خواهد، در غیر اینصورت مقدار false را خواهد داشت.   |
| `icon_url`              | آدرس fav آیکون سایت شما.   |
| `type`                  | مشخص کننده توع اپلیکیشن شما می‌باشد. برای پلتفرم وب این مقدار ۲ می‌باشد.   |
| `active_users`          | تعداد کاربران فعالی که سایت شما دارد.   |
