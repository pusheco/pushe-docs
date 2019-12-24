---
id: create_website
title: وب‌سرویس وب‌پوش پوشه | pushe.co webpush notification api
hide_title: true
sidebar_label: ایجاد سایت
---

# ایجاد سایت با وب‌سرویس پوشه

برای ایجاد اپلیکیشن می‌توانید از آدرس `
https://api.pushe.co/v2/applications/web/`
بصورت زیر استفاده کنید:


## دامنه با پروتکل https


در صورتی که سایت شما `https` است، نیازی به ساخت زیردامنه در پوشه ندارید:
```
curl -X POST https://api.pushe.co/v2/applications/web/ -H 'authorization: Token YOUR_TOKEN' -H 'content-type:application/json' -d '{"domain": "YOUR_DOMAIN (fg. www.pushe.co)", "name": "YOUR_SITE_NAME", "is_https": true}'
```

|        کلید|     فرمت کلید|               توضیحات|
| ---------- |:------------:|---------------------:|
|`name`(اجباری)             | رشته(String) |   نام سایت شما |
|`domain`(اجباری)           | رشته(String) |  دامنه سایت شما  |
|`is_https`(اجباری)         | بولین(boolean) |   اگر دامنه سایت شما `https` است این مقدار را باید true قرار دهید در غیر اینصورت مقدار false را قرار دهید.‍‍  |


## دامنه با پروتکل http



در صورتی که سایت شما `http` است، برای نمایش اعلان بر روی سایت خود باید یک زیر دامنه در پوشه ایجاد کنید:

```
curl -X POST https://api.pushe.co/v2/applications/web/ -H 'authorization: Token YOUR_TOKEN' -H 'content-type:application/json' -d '{"domain": "YOUR_DOMAIN (fg. www.pushe.co)", "name": "YOUR_SITE_NAME", "is_https": false, 
"pushe_subdomain":"YOUR_SUBDOMAIN_NAME"}'
```

|        کلید|     فرمت کلید|               توضیحات|
| ---------- |:------------:|---------------------:|
|`name`(اجباری)             | رشته(String) |   نام سایت شما |
|`domain`(اجباری)           | رشته(String) |  دامنه سایت شما  |
|`is_https`(اجباری)         | بولین(boolean) |   اگر دامنه سایت شما `https` است این مقدار را برابر true قرار دهید در غیر اینصورت مقدار false را قرار دهید.‍‍  |
|`pushe_subdomain`(اجباری)  | رشته(boolean) |  نام زیردامنه‌ای که قصد دارید از طریق آن اعلان‌های خود را دریافت کنید، بطور مثال `my_subdomain` در زیردامنه `my_subdomain.webpush.pushe.co`‍‍  |


## پاسخ دریافتی از وب‌سرویس ساخت وب‌سایت

پاسخ دریافتی برای درخواست‌‌ ایجاد سایت بدین فرمت خواهد بود:


```json
{
    "name": "SITE_NAME",
    "pushe_subdomain": "PUSHE_SUBDOMAIN",
    "domain": "YOUR_SITE_DOMAIN",
    "app_id": "UNIQUE_IDENTIFIER_GENERATED_BY_PUSHE",
    "created_at": "UTC TIMEZONE",
    "is_https": "A BOOLEAN REPRESENT YOUR SITE IS HTTPS OR NOT",
    "icon_url": "YOUR_SITE_FAV_ICON",
    "active_users": "NUMBER OF ACTIVE USERS"
}
```

|               کلید      |    توضیح      |
| ----------------------- |--------------:|
| `name`                  |               نام سایت شما.   |
| `app_id`                |              شناسه سایت شما در پوشه.   |
| `pushe_subdomain`       | نام زیردامنه‌ شما در پوشه، درصورتی که سایت شما `https` باشد این مقدار برای شما null قرار می‌گیرد.   |
| `domain`                | دامنه سایت شما.   |
| `created_at`            | زمانی که اپلیکیشن شما ساخته شده است.   |
| `is_https`              |  اگر سایت شما https باشد این مقدار برابر true خواهد، در غیر اینصورت مقدار false را خواهد داشت.   |
| `icon_url`              | آدرس fav آیکون سایت شما.   |
| `active_users`          | تعداد کاربران فعالی که سایت شما دارد.   |

در قرار دادن کلید Authorization به فاصله بین `Token` و `YOUR_TOKEN` توجه کنید.
