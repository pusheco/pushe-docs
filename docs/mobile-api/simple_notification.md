---
id: application_installations
title: وب‌سرویس موبایل (اندروید و آی‌او‌اس) پوشه | pushe.co Android, iOS API
hide_title: true
sidebar_label: ارسال اعلان 
---

# ارسال اعلان با وب‌سرویس پوشه

## ارسال اعلان ساده به همه کاربران


برای ارسال یک پوش ساده به همه کاربرانتان میتوانبد از آدرس 
`https://api.pushe.co/v2/messaging/notifications/`
بصورت زیر استفاده کنید:


```
curl -X POST https://api.pushe.co/v2/messaging/notifications/ -H 'authorization: Token YOUR_Session_TOKEN' -H 'content-type: application/json' -d '{"app_ids":["com.exmaple.app"], "data" : {"title":"عنوان اعلان", "content":"محتوای اعلان"}}
```


 فرمت داده‌های ارسالی بدین صورت می‌باشد:

```json
{
  "app_ids": ["com.example.app"],
  "data": {
    "title": "عنوان پیام",
    "content": "محتوای پیام"
  }
}
```


|        کلید|     فرمت کلید|               توضیحات|
| ---------- |:------------:|---------------------:|
|`app_ids`(‌اجباری) | لیست(List) |   لیستی از `app_id`هایی که قصد ارسال اعلان به آنها را دارید.   |
|`title`(‌اجباری) | رشته(String) |    عنوان اعلانی که قصد ارسال آن را دارید.                      |
|`content`(‌اجباری) | رشته(String) |   محتوای اعلانی که قصد ارسال آن را دارید.                    |


پاسخ دریافتی برای تمامی درخواست‌های ساخت اعلان به صورت زیر خواهد بود:

```json
{
    "wrapper_id": "UNIQUE IDENTIFIER",
    "hashed_id": "SHARE_URL",
    "app_ids": [
        "com.example.app"
    ],
    "data": {
        "title": "عنوان اعلان",
        "content": "محتوای اعلان"
    },
    "data_type": 1,
    "custom_content": {},
    "abt_ids": null,
    "topics": null,
    "filters": null,
    "rate_limit": null,
    "max_recipients": null,
    "unique": false,
    "statistics": {
        "recipient_count": 0,
        "delivered": 0,
        "clicked": 0,
        "dismissed": 0,
        "nacked": 0,
        "acked": 0
    },
    "type": 2,
    "platform": 1,
    "content_type": 1,
    "priority": null,
    "created_at": "DateTime",
    "dispatch_started_at": null,
    "dispatch_ended_at": null,
    "updated_at": null,
    "time_to_live": 604800,
    "collapse_key": null,
    "eta": null,
    "update_av_code": null,
    "status": 1
}
```

 |         کلید           |    توضیح      |
 | ---------------------- |--------------:|
 | `wrapper_id`           |              شناسه اعلان   |
 | `hashed_id`            | کلید یکتایی که در لینک اشتراک گذاری مورد استفاده قرار می‌گیرد..   |
 | `app_ids`              | لیستی از شناسه‌های اپلیکیشن‌هایی که قرار است به آنها اعلان ارسال شود.   |
 | `data_type`            | مشخص کتتده توع اعلان می‌باشد.   |
 | `custom_content`       | مشخص کننده `json`های ارسالی .   |
 | `abt_ids`(بزودی)       | شناسه‌ای که برای A/B test مورد استفاده قرار می‌گیرد.   |
 | `topics`               | فیلد `json`ای که مشخص کننده تاپیک‌هایی است که اعلان برای آنها ارسال شده است.   |
 | `filters`              | فیلد `json`ای که مشخص کننده فیلترهایی است که برای اعلان اعمال شده است.   |
 | `rate_limit` (بزودی)   | زمانی که مشخص می‌کند در طول چه بازه‌ای اعلان‌ها ارسال شود.    |
 | `max_recipients`       | مشخص کننده بیشترین تعداد کاربرانی که اعلان را باید دریافت کنند.   |
 | `unique`               | در صورتی که بیش از ۱ اپلیکیشن شما بر روی دستگاهی نصب باشد، در صورتی که این کلید را برابر `true` قرار دهید یک اعلان دریافت می‌کند.   |
 | `statistics`           | فیلد `json`ای که مشخص کننده آمار اعلان ارسالی می‌باشد.   |
 | `type`                 |  شناسه نوع اعلان ارسالی می‌باشد.   |
 | `platform`             |شناسه پلتفرمی که اعلان برای آن ارسال شده است.   |
 | `content_type`         | اعلان ارسالی با استفاده از `sdk` پوشه اجرا شود.   |
 | `priority`             |شخص کنند اولویت ارسال است.   |
 | `created_at`           |زمان ساخت اعلان    |
 | `dispatch_started_at`  |زمان شروع ارسال    |
 | `dispatch_ended_at`    |زمان پایان ارسال    |
 | `updated_at`           |زمانی که اعلان آپدیت شده است.   |
 | `time_to_live`         |مدت زمان زنده ماندن ارسال به ثانیه    |
 | `collapse_key`         |کلید جابه‌جایی    |
 | `eta`                  |تعیین زمان ارسال    |
 | `update_av_code`       |  نسخه اپلیکیشن    |
 | `status`               |وضعیت اعلان    |


## ارسال تک پیام به کاربران خاص


شما می توانید با استفاده از آدرس
`https://api.pushe.co/v2/messaging/notifications/`
علاوه بر ارسال اعلان به همه‌ی کاربران، اعلان را به یک یا تعدادی کاربر خاص نیز ارسال کنید. برای این کار لازم است از کاربرانی که می‌خواهید به آن‌ها اعلان ارسال شود شناسه داشته باشید. شناسه‌های زیر را می‌توان برای ارسال اعلان استفاده کرد


 |         شناسه          |    نام فیلد      | توضیحات|
 | ---------------------- |--------------|-------|
 |   Pushe Id | `pushe_id`   |  شناسه‌ای که توسط پوشه به کاربران اختصاص داده می‌شود. این شناسه را می‌توانید از طریق صفحه‌ی نصب‌ها در کنسول یا با استفاده از تابع `Pushe.getPusheId()` در کد بدست آورید. |
 | Android Id | `android_id`  | شناسه‌ی [Android Id](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID) توسط اندروید به نصب‌های شما اختصاص داده می‌شود |
 | Google Advertising Id | `gaid`   |شناسه‌ی [Google Advertising Id](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) توسط Google Play Services به کابربران شما اختصاص داده می‌شود |

برای ارسال اعلان به کاربران خاص موقع ارسال اعلان در فیلد 
`filters`
نام نوع شناسه‌ای که می‌خواهید از آن استفاده کنید را بگذارید و جلوی آن لیستی از شناسه‌های کاربرانی که می‌خواهید به آن‌ها اعلان ارسال شود را قرار دهید.
برای مثال ارسال اعلان به دو کاربر بر اساس Pushe Id آن‌ها به صورت زیر خواهد بود:

```
curl -X POST https://api.pushe.co/v2/messaging/notifications/ -H 'authorization: Token YOUR_Session_TOKEN' -H 'content-type: application/json' -d '{"app_ids": ["com.package_name_34"], "filters": {"pushe_id": ["pid_20aa-ba40-a0","pid_39ca-ee30-d9"]}, "data": {"title": "عنوان پیام", "content": "محتوای پیام"}}'
```


 فرمت داده‌های ارسالی بدین صورت می‌باشد:

```json
{
  "app_ids": ["com.example.app"],
  "filters": {
    "pushe_id": ["pid_20aa-ba40-a0","pid_39ca-ee30-d9"]
  },
  "data": {
    "title": "عنوان پیام",
    "content": "محتوای پیام"
  }
}
```

|        کلید|     فرمت کلید|               توضیحات|
| ---------- |:------------:|---------------------:|
|`app_ids`(‌اجباری) | لیست(List) |   لیستی از `app_id`هایی که قصد ارسال اعلان به آنها را دارید.   |
|`pushe_id`(‌اجباری) | لیست(List) |   لیستی از `pushe_id`هایی که قصد ارسال اعلان به آنها را دارید.   |
|`title`(‌اجباری) | رشته(String) |    عنوان اعلانی که قصد ارسال آن را دارید.                      |
|`content`(‌اجباری) | رشته(String) |   محتوای اعلانی که قصد ارسال آن را دارید.                    |


## ارسال یک JSON بدون نمایش اعلان


ممکن است شما بخواهید تنها اطلاعاتی را به اپ منتقل کنید ولی چیزی به کاربر نمایش داده نشود. برای این کار شما باید در اپ خود یک کلاس برای دریافت `json` اضافه کنید. نحوه انجام این کار در آموزش های ابتدای این صفحه توضیح داده شده است. کلید `"Show_app"` در data قرار دارد.کاربرد این کلید زمانی است که می خواهید داده ای را به اپلیکیشن منتقل کنید اما به کاربر پوش نمایش داده نشود. اگر مقدار این کلید true (پیش فرض) باشد پوش به کاربر نمایش داده می شود و اگر `false` باشد فقط داده منتقل می شود و به کاربر پوش نمایش داده نمی شود. برای استفاده از این قابلیت می توانید از آدرس 
`https://api.pushe.co/v2/messaging/notifications/`
بصورت زیر برای ارسال داده استفاده کنید:


```
curl -X POST https://api.pushe.co/v2/messaging/notifications/ -H 'authorization: Token YOUR_Session_TOKEN' -H 'content-type: application/json' -d '{"app_ids": ["com.package_name"], "data": {"show_app": false}, "custom_content": {"key_1": "Value_1","Key_2": "Value_2"}}'
```


 فرمت داده‌های ارسالی بدین صورت می‌باشد:

```
{
  "app_ids": ["com.example.app"],
  "data": {
    "show_app": false
  },
  "custom_content": {
    "key_1": "Value_1",
    "Key_2": "Value_2", 
    .......
  },
  "priority":2
  
}
```

## ارسال اعلان تراکنشی (API چابک)


 در صورتی که نیازی به ثبت اعلان در پنل و مشاهده‌ی آمار آن ندارید و نیازمندی شما ارسال اعلان به صورت حجیم و سریع است، می‌توانید از روش ارسال اعلان چابک (Rapid APIs) پوشه استفاده کنید.
برای استفاده از این ویژگی بایستی درخواست‌های خود را با استفاده از متود POST به درگاه‌های ارسال چابک پوشه در آدرس
`https://api.pushe.co/v2/messaging/rapid`
ارسال کنید. فرمت داده‌ی ارسالی شما بایستی از قالب زیر پیروی کنند.

- در هر درخواست بایستی تنها یک اپلیکیشن آی‌دی مشخص شود.
- گیرندگان اعلان در هر درخواست توسط یکی از سه روش شناسه‌ی تبلیغاتی گوگل (Google Advertisement ID)، شناسه‌ی پوشه (Pushe ID) و یا شناسه‌ی اندروید (Android ID) مشخص می‌شوند. دقت کنید که در هر درخواست تنها از یکی از این سه روش برای شناسایی گیرندگان اعلان استفاده می‌شود.
- حداکثر دریافت‌کنندگان یک اعلان در هر درخواست (اندازه‌ی لیست گیرندگان، aids، pids یا gaids) برابر با ۵۰ نصب است.
- در کلید data، مقادیری که توسط کتابخانه‌ی پوشه پذیرفته می‌شوند را قرار دهید. در واقع این کلید رزرو شده برای زمانی است که می‌خواهید اعلانی را با استفاده از امکانات کتابخانه به کاربرانتان نمایش دهید.
- در کلید custom_content می‌توانید هر محتوایی را قرار دهید که به شکل json به دریافت‌کنندای که در برنامه‌ی خود نوشته‌اید تحویل داده می‌شود.

به طور کلی قالب نهایی ارسال این نوع اعلان را در زیر مشاهده می‌کنید.

```
curl -X POST "https://api.pushe.co/v2/messaging/rapid/"  -i -H "Authorization: Token 7fb1………………………………29b464c "  -H "Content-Type: application/json" -H "Accept: application/json" --data 'Payload'
```

```json
{
    "app_id": "com.test.pushe",

    // One of the following identifiers, use either only G_AID, PusheID, or AndroidID

    "gaids": [
        "Google Advertisement ID 1",
        "Google Advertisement ID 2",
        "Google Advertisement ID 3",
        "Google Advertisement ID 4"
    ],
    "pids": [
        "Pushe ID 1",
        "Pushe ID 2"
    ],
    "aids": [
        "Android ID 1",
        "Android ID 2"
    ],
    // One of the following, use either data (to use Pushe's SDK features) or custom_content to provide your own JSON

    "data": {
        "title": "Title",
        "content": "Content"
    },
    "custom_content": {
        "1": "2"
    },

    "ttl": 3600 // [int: seconds] Optional, span of time the notification stays alive before being delivered to the user
}

```


## ارسال اعلان پیشرفته


همه ی امکاناتی که در اعلان پیشرفته از طریق پنل قابل انتخاب است را می توانید از طریق `API` هم استفاده کنید. فرمت یک اعلان پیشرفته که حاوی همه ی امکانات پنل باشد به صورت زیر است:

```json
{
  "app_ids": [
    "com.example.app"
  ],
  "data": {
    "title": "عنوان",
    "content": "تیتر",
    "big_title": "تیتر کامل",
    "big_content": "متن بزرگ",
    "summary": "چکیده ",
    "image": "http://url/name.png",
    "icon": "http://url/name.png",
    "ticker": "متن نوار اعلان",
    "notif_icon": "file_download",
    "wake_screen": true,
    "sound_url": "http://static.pushe.co/mp3/2.mp3",
    "visibility": true,
    "led_color": "-8206336",
    "show_app": true,
    "led_on": 300,
    "led_off": 500,
    "delay_until": true,
    "action": {
      "url": "tg://join?invite=sdfdsfdsfds",
      "action_type": "U"
    },
    "buttons": [
      {
        "btn_icon": "fileـdownload",
        "btn_order": 1,
        "btn_content": "متن دکمه",
        "btn_action": {
          "url": "tg://join?invite=fdsfdsfds",
          "action_type": "U"
        }
      },
      {
        "btn_icon": "local_cafe",
        "btn_order": 2,
        "btn_content": "متن دکمه",
        "btn_action": {
          "url": "http://fgfdgfdg.com",
          "action_type": "U"
        }
      },
      {
        "btn_icon": "phoneـandroid",
        "btn_order": 3,
        "btn_content": "متن دکمه",
        "btn_action": {
          "url": "call:dddd",
          "action_type": "U"
        }
      }
    ]
  },
  "filters": {
    "operator": [
      "ir-mci", "irancell", "rightel"
    ],
    "brand": [
      "samsung", "LGE", "asus", "htc", "lenovo", "sony", "huawei"
    ],
    "mobile_net": [
      "lte", "wifi" 
    ],
    "state": [
      "East Azerbaijan", "Azarbayjan-e Gharbi", "Ardabil", "Isfahan", "Alborz", "Ilam", "Bushehr", "Tehran", "Chahar Mahall va Bakhtiari",
       "Khorasan-e Jonubi", "Razavi Khorasan", "Khorasan-e Shomali", "Khuzestan", "Zanjan", "Semnan", "Sistan and Baluchestan", "Fars", 
       "Qazvin", "Qom", "Kordestan", "Kerman", "Kermanshah", "Kohgiluyeh va Buyer Ahmad", "Golestan", "Gilan", "Lorestan", "Mazandaran", 
       "Markazi", "Hormozgan", "Hamadan", "Yazd"
    ],
    "app_version":[
      "1.0", "2.0"
    ]
  },
  "collapse_key": "key1",
  "time_to_live": 172800,
  "topics":["topic_name1", ...],
  "unique": true,
  "eta":"2016-10-18T13:28:00+03:30",
  "rate_limit": "بزودی",
  "platform": 1,
  "priority": 1,
  "abt_ids": ["notification_wrapper_id", ...] 
}
```

