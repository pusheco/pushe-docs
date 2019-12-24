---
id: create_application
title: وب‌سرویس موبایل (اندروید و آی‌او‌اس) پوشه | pushe.co Android, iOS API
hide_title: true
sidebar_label: ساخت اپلیکیشن
---

# ساخت اپلیکیشن با وب‌سرویس پوشه

برای ایجاد اپلیکیشن می‌توانید از آدرس `
https://api.pushe.co/v2/applications/{platform}/`
بصورت زیر استفاده کنید:

```
curl -X POST https://api.pushe.co/v2/applications/{platform}/ -H 'authorization: Token YOUR_TOKEN' -H 'content-type:application/json' -d '{"package_name": "com.example.app", "name": "example", "framework": 2}'
```

مقادیر مجاز برای `platform` می‌تواند `android` و `ios` باشد.


|        کلید|     فرمت کلید|               توضیحات|
| :----------: |:------------:|---------------------:|
|`name`(اختیاری)            | string |   نام اپلیکیشن شما |
|`package_name`(اجباری)     | string |  اسم پکیج اپلیکیشن شما  |
|`framework`(اجباری)        | int |   چارچوبی که با آن اپلیکیشن خود را ایجاد کرده‌اید. برای مشاهده لیست چارچوب‌ها به [جدول شماره ۵](/docs/mobile-api/table_frameworks) مراجعه نمایید.  |
|`client_key`(اختیاری)      | int |  کلید سمت کاربر که از FCM دریافت میکنید. |
|`server_key`(اختیاری)      | string |   کلید سمت سرور که از FCM دریافت میکنید.  |



پاسخ دریافتی برای درخواست‌‌ ایجاد اپلیکیشن(اندروید و ios) بدین فرمت خواهد بود:
‍‍‍
```json
{
    "name": "APP_NAME",
    "package_name": "PACKAGE_NAME",
    "app_id": "UNIQUE_IDENTIFIER_GENERATED_BY_PUSHE",
    "created_at": "UTC TIMEZONE",
    "framework": "SMALL INTEGER NUMBER",
    "aggregator": "USER INSTANCE",
    "has_one_signal_user": "BOOLEAN FIELD",
    "type": "SMALL INTEGER NUMBER",
    "provider": "PROVIDER INTANCE",
    "credential": {
        "server_key": "SERVER_KEY",
        "client_key": "CLIENT_KEY"
    },
    "active_users": "NUMBER OF ACTIVE USERS"
}
```
|               کلید      |    توضیح      |
| ----------------------- |--------------:|
| `name`                  |              نام اپلیکیشنی که انتخاب کردید، در صورتی که نامی برای اپلیکیشن خود انتخاب نکرده باشید، `app_id` به عنوان `name` قرار خواهد گرفت.   |
| `app_id`                |              شناسه اپلیکیشن شما در پوشه.   |
| `package_name`          | اسم پکیج اپلیکیشن شما.   |
| `create_at`             | زمانی که اپلیکیشن شما ساخته شده است.   |
| `framework`             | مشخص کننده چارچوبی است که با آن اپلیکیشن خود را ایجاد کرده‌اید.   |
| `aggregator`            | در صورتی که اپلیکیشن شما در اجاره پوشه باشد این فیلد برای شما ‌‌True خواهد بود.   |
| `has_one_signal_user`   | درصورتی که اپلیکیشن شما از onesingal وارد شده باشد این فیلد برای شما ‌true خواهد بود.   |
| `type`                  | مشخص کننده توع اپلیکیشن شما می‌باشد. برای مشاهده تمام تایپ‌ها میتوانید به [جدول ۲](https://pushe.co/docs/api#api_icon_notificaiton_table2) مراجعه کنید.   |
| `provider`              | در صورتی که از اپلیکیشن ساز استفاده کرده باشید، این فیلد برای شما به نمایش در خواهد آمد.   |
| `credential`            | در صورتی که `client_key` و  `server_key` را وارد نکرده باشید، فقط `client_key` را دریافت خواهید کرد.   |
| `active_users`          | تعداد کاربران فعالی که اپلیکیشن شما دارد.   |


 > چرا در صورتی که از `client_key` و `server_key` خود استفاده نکنید، فقط `client_key` را دریافت می‌کنیم؟  
چون پوشه از `client_key` و `server_key` خود برای ارسال اعلان‌‌ها استفاده می‌کند، لذا فقط `client_key` به شما نمایش داده می‌شود.

در صورتی که از `client_key` و `server_key`  خود برای ارسال اعلان استفاده کنید، می‌توانید با سرور اختصاصی خود نیز برای کاربرانتان اعلان ارسال کنید.

در قرار دادن کلید Authorization به فاصله بین `Token` و `YOUR_TOKEN` توجه کنید.