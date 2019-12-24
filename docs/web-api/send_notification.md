---
id: send_notification
title: وب‌سرویس وب‌پوش پوشه | pushe.co webpush notification api
hide_title: true
sidebar_label: ارسال اعلان
---

# ارسال اعلان با وب‌سرویس پوشه

## ارسال اعلان ساده به همه کاربران


برای ارسال یک پوش ساده به همه کاربرانتان میتوانبد از آدرس 
`https://api.pushe.co/v2/messaging/notifications/`
بصورت زیر استفاده کنید:


```
curl -X POST https://api.pushe.co/v2/messaging/notifications/ -H 'authorization: Token YOUR_TOKEN' -H 'content-type: application/json' -d '{"app_ids":["com.exmaple.app"], "data" : {"title":"عنوان اعلان", "content":"محتوای اعلان"}}
```


 فرمت داده‌های ارسالی بدین صورت می‌باشد:

```json
{
  "app_ids": ["8ep6mpmwwor0964d"],
  "platform": 2,
  "data": {
    "title": "عنوان پیام",
    "content": "محتوای پیام"
  }
}
```


|        کلید|     فرمت کلید|               توضیحات|
| ---------- |:------------:|---------------------:|
|`app_ids`(‌اجباری) | لیست(List) |   لیستی از `app_id`هایی که قصد ارسال اعلان به آنها را دارید.   |
|`title`(‌اجباری)   | رشته(String) |    عنوان اعلانی که قصد ارسال آن را دارید.                      |
|`content`(‌اجباری) | رشته(String) |   محتوای اعلانی که قصد ارسال آن را دارید.                    |
|`platform`(‌اجباری)| عدد(int) |  شماره پلتفرم‌ای که می‌خواهید به آن اعلان را ارسال کنید. برای وب این مقدار برابر ۲ می‌باشد.   |


پاسخ دریافتی برای تمامی درخواست‌های ساخت اعلان به صورت زیر خواهد بود:

```json
{
    "wrapper_id": "UNIQUE IDENTIFIER",
    "hashed_id": "SHARE_URL",
    "app_ids": ["8ep6mpmwwor0964d"],
    "data": {
        "title": "عنوان اعلان",
        "content": "محتوای اعلان"
    },
    "statistics": {
        "recipient_count": 0,
        "delivered": 0,
        "clicked": 0,
        "dismissed": 0,
        "nacked": 0,
        "acked": 0
    },
    "platform": 2 ,
    "created_at": "DateTime",
    "dispatch_started_at": null,
    "dispatch_ended_at": null,
    "updated_at": null,
}
```

 |         کلید           |    توضیح      |
 | ---------------------- |--------------:|
 | `wrapper_id`           |              شناسه اعلان   |
 | `hashed_id`            | کلید یکتایی که در لینک اشتراک گذاری مورد استفاده قرار می‌گیرد..   |
 | `app_ids`              | لیستی از شناسه‌های سایت‌هایی که قرار است به آنها اعلان ارسال شود.   |
 | `statistics`           | فیلد `json`ای که مشخص کننده آمار اعلان ارسالی می‌باشد.   |
 | `platform`             |شناسه پلتفرمی که اعلان برای آن ارسال شده است.   |
 | `created_at`           |زمان ساخت اعلان    |
 | `dispatch_started_at`  |زمان شروع ارسال    |
 | `dispatch_ended_at`    |زمان پایان ارسال    |
 | `updated_at`           |زمانی که اعلان آپدیت شده است.   |


## ارسال تک اعلان برای یک کاربر بر اساس deviceId


شما می توانید با استفاده از آدرس
`https://api.pushe.co/v2/messaging/notifications/`
به روش زیر به کاربران خود براساس `device_id` پیام ارسال کنید. 
 برای دریافت `device_id` کاربران ‌می‌توانید از تابع `Pushe.getDeviceId` استفاده کنید و `device_id` کاربران را در پایگاه‌داده خود ذخیره کنید.
برای نحوه استفاده از تابع  `Pushe.getDeviceId` به راهنمای راه‌اندازی وب پوش قسمت 
[ذخیره آی دی یکتای کاربران](/docs/webpush/unique-device-id#%D8%AF%D8%B1%DB%8C%D8%A7%D9%81%D8%AA-%D8%B4%D9%86%D8%A7%D8%B3%D9%87-deviceid) 
مراجعه کنید.

```
curl -X POST https://api.pushe.co/v2/messaging/notifications/ -H 'authorization: Token YOUR_TOKEN' -H 'content-type: application/json' -d '{"app_ids": ["com.package_name_34"], "filters": {"device_id": ["sample_device_id_1","sample_device_id_2"]}, "data": {"title": "عنوان پیام", "content": "محتوای پیام"}}'
```


 فرمت داده‌های ارسالی بدین صورت می‌باشد:

```json
{
  "app_ids": ["com.example.app"],
  "filters": {
  "device_id": ["sample_device_id_1","sample_device_id_2"]
  },
  "platform":2,
  "data": {
    "title": "عنوان پیام",
    "content": "محتوای پیام"
  }
}
```

|        کلید|     فرمت کلید|               توضیحات|
| ---------- |:------------:|---------------------:|
|`app_ids`(‌اجباری) | لیست(List) |   لیستی از `app_id`هایی که قصد ارسال اعلان به آنها را دارید.   |
|`device_id`(‌اجباری) | لیست(List) |   لیستی از `device_id`هایی که قصد ارسال اعلان به آنها را دارید.   |
|`title`(‌اجباری) | رشته(String) |    عنوان اعلانی که قصد ارسال آن را دارید.                      |
|`content`(‌اجباری) | رشته(String) |   محتوای اعلانی که قصد ارسال آن را دارید.                    |
|`platform`(‌اجباری) | عدد(int) |    شماره پلتفرم‌ای که می‌خواهید به آن اعلان را ارسال کنید. برای وب این مقدار برابر ۲                   |


## ارسال اعلان پیشرفته


همه ی امکاناتی که در اعلان پیشرفته از طریق پنل قابل انتخاب است را می توانید از طریق `API` هم استفاده کنید. فرمت یک اعلان پیشرفته که حاوی همه ی امکانات پنل باشد به صورت زیر است:

```json
{
  "app_ids": ["8ep6mpmwwor0964d"],
  "data": {
    "title": "عنوان",
    "content": "تیتر",
    "image": "http://url/name.png",
    "icon": "http://url/name.png",
    "close_on_click": true,
    "action": {
      "url": "tg://join?invite=sdfdsfdsfds",
      "action_type": "U"
    },
    "buttons": [
      {
        "btn_order": 1,
        "btn_content": "متن دکمه",
        "btn_action": {
          "url": "tg://join?invite=fdsfdsfds",
          "action_type": "U"
        }
      },
      {
        "btn_order": 2,
        "btn_content": "متن دکمه",
        "btn_action": {
          "url": "http://fgfdgfdg.com",
          "action_type": "U"
        }
      },
      {
        "btn_order": 3,
        "btn_content": "متن دکمه",
        "btn_action": {
          "url": "call:dddd",
          "action_type": "U"
        }
      }
    ]
  },
  "platform": 2
}
```

|        کلید            |     فرمت کلید              |               توضیحات            |
| ---------------------- |:--------------------------:|---------------------------------:|
|`app_ids`(‌اجباری)       |                 لیست(List) |   لیستی از `app_id`هایی که قصد ارسال اعلان به آنها را دارید .   |
|`title`(‌اجباری)         |               رشته(String) |    عنوان اعلانی که قصد ارسال آن را دارید .   |
|`content`(‌اجباری)       |               رشته(String) |   محتوای اعلانی که قصد ارسال آن را دارید .   |
|`platform`(‌اجباری)      |                   عدد(int) |  شماره پلتفرم‌ای که می‌خواهید به آن اعلان را ارسال کنید. برای وب این مقدار برابر ۲ می‌باشد .   |
|`icon`(اختیاری)         |              رشته (String) |  آدرس آیکون‌ای که برای ارسال اعلان انتخاب کرده‌اید .   |
|`image`(اختیاری)        |              رشته (String) |  آدرس عکس‌ای که برای ارسال اعلان انتخاب کرده‌اید(پشتیبانی در مرورگرهای opera و chrome و edge) .   |
|`close_on_click`(اختیاری)|            بولین(boolean) |  در صورتی که این مقدار برابر `true` قرار گیرد، اعلان منتظر تعامل کاربر می‌ماند و بسته نخواهند شد(پشتیبانی در مرورگرهای chrome و edge) .   |
|`url`(اختیاری)          |              رشته (String) |  در صورتی که کلید `action` در اعلان قرار گیرد، این فیلد اجباری بوده و مشخص کننده آدرسی است که بعد از کلیک بر روی اعلان کاربر به آن آدرس هدایت می‌شود .   |
|`buttons`(اختیاری)      |                لبست (list) |  لیستی از دکمه‌هایی که در اعلان نمایش داده ‌می‌شود. حداکثر تعداد دکمه‌ها در مرورگرهای مختلف متفاوت است(پشتیبانی در مرورگرهای opera و chrome و edge) .   |
|`action_type`(اختیاری)  |              رشته (String) | در صورتی که کلید `action` در اعلان قرار گیرد، این فیلد اجباری بوده و مشخص کننده نحوه برخورد sdk پوشه با `url` انتخابی است .   |
|`btn_order`(اختیاری)    |                  عدد (int) | در صورتی که کلید `buttons` در اعلان قرار گیرد، این فیلد اجباری بوده و مشخص کننده ترتیب دکمه‌‌های انتخاب شده است .   |
|`btn_content`(اختیاری)  |              رشته (String) | در صورتی که کلید `action` در اعلان قرار گیرد، این فیلد اجباری بوده و مشخص کننده اسم دکمه انتخاب شده است .   |
|`btn_action`(اختیاری)   |             دیکشنری (dict) | در صورتی که کلید `action` در اعلان قرار گیرد، این فیلد اجباری بوده و مشخص کننده اکشن‌ آن دکمه می‌باشد .   |


همه ی کلیدهای استفاده شده در اعلان پیشرفته در جدول ۱ توضیح داده شده اند.