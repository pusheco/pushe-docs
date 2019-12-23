---
id: get_applications_list
title: وب‌سرویس موبایل (اندروید و آی‌او‌اس) پوشه | pushe.co Android, iOS API
hide_title: true
sidebar_label: دریافت لیست اپلیکیشن‌ها
---

# دریافت لیست اپلیکیشن‌ها با وب‌سرویس پوشه


برای دریافت لیست اپلیکیشن‌های خود می‌توانید از آدرس 
`https://api.pushe.co/v2/applications/{platform}/`
بصورت زیر استفاده نمایید:

```
curl -X GET https://api.pushe.co/v2/applications/{platform}/ -H 'authorization: Token YOUR_TOKEN' -H 'content-type: application/json'
```

مقادیر مجاز برای `platform` می‌تواند `android` و `ios` باشد.

پاسخ دریافتی برای درخواست‌‌ مشاهده لیست اپلیکیشن‌‌ها(اندروید و ios) بدین فرمت خواهد بود:

```json
[
    {
        "name": "APP_NAME",
        "package_name": "PACKAGE_NAME",
        "app_id": "UNIQUE IDENTIFIER",
        "created_at": "2018-10-13T05:49:28.292622Z",
        "framework": 1,
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
        "icon_url": "ICON_URL"
    }
]

```
 
 |         کلید           |    توضیح      |
 | ---------------------- |--------------:|
 | `name`                 |              نام اپلیکیشنی که انتخاب کردید، در صورتی که نامی برای اپلیکیشن خود انتخاب نکرده باشید، `app_id` به عنوان `name` قرار خواهد گرفت.   |
 | `package_name`         | اسم پکیج اپلیکیشن شما.   |
 | `app_id`               | شناسه‌ای که برای اپلیکیشن خود انتخاب کرده‌اید.   |
 | `create_at`            | زمانی که اپلیکیشن شما ساخته شده است.   |
 | `framework`            | مشخص کننده چارچوبی است که با آن اپلیکیشن خود را ایجاد کرده‌اید.   |
 | `aggregator`           | در صورتی که اپلیکیشن شما در اجاره پوشه باشد این فیلد برای شما ‌‌True خواهد بود.   |
 | `has_one_signal_user`  | درصورتی که اپلیکیشن شما از onesingal وارد شده باشد این فیلد برای شما ‌true ه=خواهد بود.   |
 | `type`                 | مشخص کننده توع پلتفرم اپلیکیشن شما می‌باشد. |
 | `provider`             | در صورتی که از اپلیکیشن ساز استفاده کرده باشید، این فیلد برای شما به نمایش در خواهد آمد.   |
 | `credential`           | در صورتی که `client_key` و  `server_key` را وارد نکرده باشید، فقط `client_key` را دریافت خواهید کرد.   |
 | `active_users`         | تعداد کاربران فعالی که اپلیکیشن شما دارد.   |
 | `installation_count`   | تعداد نصب‌‌های این اپلیکیشن   |
 | `welcome_template`     | شناسه اعلان خوش آمد برای این اپلیکشین در v1   |
 | `update_template`      | شناسه اعلان آپدیت برای این اپلیکیشن در v1   |
 | `welcome_template_v2`  | شناسه اعلان خوش آمد برای این اپلیکشین در v2   |
 | `update_template_v2`   |شناسه اعلان آپدیت برای این اپلیکیشن در v2   |
 | `welcome_active`       | تعداد نصب‌‌های این اپلیکیشن   |
 | `icon_url`             |آدرس url آیکون اپلیکیشن شما   |
 
