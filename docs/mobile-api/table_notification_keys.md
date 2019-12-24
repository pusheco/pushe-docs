---
id: table_notification_keys
title: وب‌سرویس موبایل (اندروید و آی‌او‌اس) پوشه | pushe.co Android, iOS API
hide_title: true
hide_table_of_contents: true
sidebar_label: جدول ۱ - کلیدهای اعلان پیشرفته 
---

# جدول ۱ - کلیدهای اعلان پیشرفته


بعضی از کلید ها مقدارهای مختلف می گیرند که در
 [جدول ۲](/docs/mobile-api/table_icons) 
 و 
  [جدول ۳](/docs/mobile-api/table_notification_actions)
  توضیح داده شده است.


| # | نام | کابرد | مقادیر ممکن |
|:---- |:-------------:|:-------------:| -----:|
|  1   |app_ids            |لیستی از `app_id`هایی که به آن‌‌ها می‌خواهیم اعلان ارسال کنیم.               |   لیستی از `app_id`    |
|  2   |title              |تیتر اعلان کوچک          	                 |   کاراکتر    |
|  3   |Content            |متن اعلان کوچک       	                     |   کاراکتر    |
|  4   |Big_title          |تیتر اعلان بزرگ(غیر فشرده)                    |  کاراکتر     |
|  5   |Big_content        |متن اعلان بزرگ (غیر فشرده)                    |  کاراکتر     |
|  6   |summary            |            متن خلاصه اعلان                    |  کاراکتر     |
|  7   |image              |عکس بنر                                      |   URL عکس    |
|  8   |icon               |انتخاب آیکون داخلی پوش                       |    URL آیکون   |
|  9   |ticker             |متن نوار اعلان                                |   کاراکتر    |
|  10  |notif_icon         |آیکون جایگزین آیکون اپ                       |   یکی از مقادیر [جدول ۲](/docs/mobile-api/table_icons)    |
|  11  |wake_screen        |روشن شدن صفحه نمایش به هنگام دریافت پیام     |   بولین True/False    |
|  12  |sound_url          |تغییر صدای هشدار به هنگام دریافت اعلان        |  url صدا     |
|  13  |notif_channel_id   |ارسال به کاربران کانال خاص                   |  رشته‌ای که حاوی شناسه کانال می‌باشد     |
|  14  |visibility         |اعلان نمایش داده شود یا خیر                   |    بولین True/False   |
|  15  |led_color          |led تعیین رنگ                                |    عدد صحیح متناظر با رنگ با استفاده این ابزار   |
|  16  |led_on             |led زمان روشن ماندن                          |   زمان به میلی ثانیه    |
|  17  |led_off            |led زمان خاموش ماندن                         |   زمان به میلی ثانیه    |
|  18  |action_type        |تعیین نوع عملکرد                             |   مقادیر [جدول ۳](/docs/mobile-api/table_notification_actions)    |
|  19  |url                |تعیین هدف عملکرد                             |   مقادیر [جدول ۳](/docs/mobile-api/table_notification_actions)    |
|  20  |btn_order          |ترتیب دکمه                                   |   یکی از اعداد 1، 2 یا 3    |
|  21  |btn_content        |متن دکمه                                     |    کاراکتر   |
|  22  |btn_icon           |آیکون دکمه                                   |    یکی از مقادیر [جدول ۲](/docs/mobile-api/table_icons)   |
|  23  |btn_action         |عملکرد دکمه                                  |   مقادیر [جدول ۳](/docs/mobile-api/table_notification_actions)    |
|  24  |delay_until        |عدم نمایش تا زمانی که گوشی غیرفعال است       |   بولین True/False    |
|  25  |collapse_key       |کلید جابجایی                                 |  کاراکتر     |
|  26  |time_to_live       |زمان ماندگاری                                |  زمان به ثانیه     |
|  27  |operator           |نام اپراتور موبایل                           |  "ir-mci", "irancell", "rightel"     |
|  28  |brand              |نام برند دستگاه                              |  "samsung", "LGE", "asus", "htc", "lenovo", "sony", "huawei"     |
|  29  |mobile_net         |نوع اینترنت                                  |  "lte", "wifi"     |
|  30  |state              |استان                                        |  "East Azerbaijan", "Azarbayjan-e Gharbi", "Ardabil", "Isfahan", "Alborz", "Ilam", "Bushehr", "Tehran", "Chahar Mahall va Bakhtiari", "Khorasan-e Jonubi", "Razavi Khorasan", "Khorasan-e Shomali", "Khuzestan", "Zanjan", "Semnan", "Sistan and Baluchestan", "Fars", "Qazvin", "Qom", "Kordestan", "Kerman", "Kermanshah", "Kohgiluyeh va Buyer Ahmad", "Golestan", "Gilan", "Lorestan", "Mazandaran", "Markazi", "Hormozgan", "Hamadan", "Yazd"    |
|  31  |app_version        |تعیین ورژن‌هایی که پیام ارسال شود            |   لیستی از ورژن‌‌های اپلیکیشن    |
|  32  |topics             |تعیین تاپیک‌ها که پیام ارسال شود            |   لیستی‌ای از نام تاپیک‌هاکه با کاما جدا شوند    |
|  33  |unique             | به کاربران مشترک اپها یک پیام ارسال شود                    |    بولین True/False   |
|  34  |eta                |       تعیین زمان ارسال                                      |    "2016-10-18T13:28:00+03:30"   |
|  35  |rate_limit (بزودی) |       ارسال در طول بازه زمانی                                      |    زمان به ثانیه   |
|  36  |platform           |       پلتفرمی که اعلان برای آن ساخته شده است. |    یکی از اعداد: ۱ برای اندروید - ۲ برای وب - ۳ برای آی او اس  |
|  37  |priority           |             مشحص کننده اولویت اعلان ساخته است. |     یکی از اعداد : ۱ برای اولویت کم - ۲ برای اولویت متوسط -۳ برای اولویت زیاد |
|  38  |abt_ids(بزودی)     |           فیلتر A/B test  |     لییستی از شناسه اعلان‌هایی که قبلا ارسال شده است. |
