---
id: table_notification_keys
title: وب‌سرویس وب‌پوش پوشه | pushe.co webpush notification api
hide_title: true
hide_table_of_contents: true
sidebar_label: جدول ۱ - کلید‌های اعلان پیشرفته
---

# جدول ۱ - کلید‌های اعلان پیشرفته

بعضی از کلید ها مقدارهای مختلف می گیرند که در
  [جدول ۲](/docs/web-api/table_actions)
  توضیح داده شده است.


|  #   |نام|کاربرد| مقادیر ممکن  |
|:---- |:-------------:|:-------------:| -----:|
|  1   |app_ids            |لیستی از `app_id`هایی که به آن‌‌ها می‌خواهیم اعلان ارسال کنیم.               |   لیستی از `app_id`    |
|  2   |title              |تیتر اعلان کوچک          	                 |   کاراکتر    |
|  3   |Content            |متن اعلان کوچک       	                     |   کاراکتر    |
|  4   |image              |عکس بنر                                      |   URL عکس    |
|  5   |icon               |انتخاب آیکون داخلی پوش                       |    URL آیکون   |
|  6   |action_type        |تعیین نوع عملکرد                             |   مقادیر [جدول ۲](/docs/web-api/table_actions)    |
|  7   |url                |تعیین هدف عملکرد                             |   مقادیر [جدول ۲](/docs/web-api/table_actions)    |
|  8   |close_on_click     |باقی ماندن پیام تا کلیک کاربر                |   بولین (true یا false)    |
|  9   |btn_order          |ترتیب دکمه                                   |   یکی از اعداد 1، 2 یا 3    |
|  10  |btn_content        |متن دکمه                                     |    کاراکتر   |
|  11  |btn_action         |عملکرد دکمه                                  |   مقادیر [جدول ۲](/docs/web-api/table_actions)    |
|  13  |platform           |       پلتفرمی که اعلان برای آن ساخته شده است. |    یکی از اعداد: ۱ برای اندروید - ۲ برای وب - ۳ برای آی او اس  |

