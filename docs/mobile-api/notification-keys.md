---
id: notification-keys
title: همه کلید‌های اعلان
sidebar_label: همه کلید‌های اعلان
hide_title: true
hide_table_of_contents: true
description: راهنمای وب‌سرویس پوشه - همه کلید‌های اعلان
---

import Platforms from "@site/src/components/Platforms.jsx";


# کلید‌های اعلان

در این صفحه لیست تمامی کلید‌های اعلان به همراه توضیح آن‌ها قابل مشاهده می‌باشد.
قالب کلی اعلان یک دیکشنری است که کلید های زیر را درون خود نگه می‌دارد.

### **app_id**

<Platforms android ios />

`app_id`

**استفاده**: اجباری در همه نوع اعلان    
**کلید پدر**: -     
**نوع مقدار**: رشته string  
**توضیحات**:
این کلید بیانگر [شناسه اپلیکیشن](/docs/mobile-api/get-app-id) می‌باشد که برای همه انواع اعلان اجباری می‌باشد


### **custom_content**

<Platforms android ios />

**استفاده**: در صورت عدم استفاده از کلید **data** استفاده از این کلید در همه انواع اعلان اجباری است. در ضمن امکان استفاده همزمان این دو کلید هم وجود دارد.   
**کلید پدر**: -     
**نوع مقدار**: دیکشنری    
**توضیحات**:
این کلید که از نوع دیکشنری می‌باشد وظیفه نگه داری محتوا دلخواه شما را داره و در واقع در داخل این کلید می‌توانید کلید و مقدار های دلخواه‌تان را قرار دهید.

### **data**

<Platforms android ios />

`data`

**استفاده**: در صورت عدم استفاده از کلید **custom_content** استفاده از این کلید در همه انواع اعلان اجباری است. در ضمن امکان استفاده همزمان این دو کلید هم وجود دارد.   
**کلید پدر**: -     
**نوع مقدار**: دیکشنری    
**توضیحات**:
این کلید که از نوع دیکشنری می‌باشد برای نگه داری مقادیر محتوایی که قرار است در اعلان نمایش داده شوند نظیر عنوان، متن، آیکن و ... به کار می‌رود.
در صورت استفاده از این کلید ، حتما باید مقدار داشته باشد.

### **title**

<Platforms android ios />

`data.title`

**استفاده**:  (در صورت استفاده از کلید **data**) اجباری     
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**: رشته string    
**توضیحات**:
عنوان اعلانی که در دستگاه نمایش داده می‌شود

### **content**

<Platforms android ios />

`data.content`

**استفاده**:  (در صورت استفاده از کلید **data**) اجباری     
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**: رشته string    
**توضیحات**:
متن اعلانی که در دستگاه نمایش داده می‌شود

### **icon**

<Platforms android />

`data.icon`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**: رشته string که همان url یا آدرس آیکون می‌باشد (دقت کنید که آدرس حتما با https شروع شود)    
**توضیحات**:
آیکن اعلانی که در دستگاه نمایش داده می‌شود   
توصیه می‌شود که حتما از https برای آدرس آیکن استفاده شود

### **big_title**

<Platforms android />

`data.big_title`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**: رشته string    
**توضیحات**:
عنوان اعلانی که در دستگاه نمایش داده می‌شود 
[در حالتی که اعلان باز شده می‌باشد](https://developer.android.com/guide/topics/ui/notifiers/notifications#expandable)

### **big_content**

<Platforms android />

`data.big_content`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**: رشته string    
**توضیحات**:
متن اعلانی که در دستگاه نمیاش داده می‌شود
[در حالتی که اعلان باز شده می‌باشد](https://developer.android.com/guide/topics/ui/notifiers/notifications#expandable)

### **summary**

<Platforms android />

`data.summary`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**: رشته string    
**توضیحات**:
خلاصه متنی که در قسمت پایین اعلان نمایش داده می‌شود

### **image**

<Platforms android ios />

`data.image`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**: رشته string    
**توضیحات**:
عکس اعلانی که در دستگاه نمایش داده می‌شود.   
توصیه می‌شود که حتما از https برای آدرس عکس استفاده شود

### **ticker**

<Platforms android />

`data.ticker`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**: رشته string    
**توضیحات**:
متن خلاصه ای که در نوار بالای صفحه نمایش داده میشود.    
این مورد در اندروید ۵ و ماقبل کار میکند.

### **notif_icon**

<Platforms android />

`data.notif_icon`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**: از نوع رشته string و  [یکی از مقادیر جدول آیکن‌های اعلان](/docs/mobile-api/notification-icons-table)    
**توضیحات**:
آیکون جایگزین آیکون اپ

### **wake_screen**

<Platforms android />

`data.wake_screen`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**: بولین true/false    
**توضیحات**:
روشن شدن صفحه نمایش به هنگام دریافت پیام	


### **sound_url**

<Platforms android />

`data.sound_url`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**:  رشته string (آدرس یا همان url صدا که حتما باید با https شروع شود)     
**توضیحات**:
تغییر صدای هشدار به هنگام دریافت اعلان	

### **notif_channel_id**

<Platforms android />

`data.notif_channel_id`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**:  رشته‌ای که حاوی شناسه کانال می‌باشد      
**توضیحات**:
ارسال به کاربران کانال خاص	

### **visibility**

<Platforms android />

`data.visibility`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**:  بولین true/false      
**توضیحات**:
اعلان نمایش داده شود یا خیر	

### **led_color**

<Platforms android />

`data.led_color`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**:  عدد صحیح int [مطالعه بیشتر](https://developer.android.com/reference/android/app/NotificationChannel.html#setLightColor(int))    
**توضیحات**:
led تعیین رنگ	


### **led_on**

<Platforms android />

`data.led_on`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**:  زمان به میلی ثانیه ، از نوع صحیح int وارد شود    
**مقدار دیفالت**: 500      
**توضیحات**:
led زمان روشن ماندن	

### **led_off**

<Platforms android />

`data.led_off`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**:  زمان به میلی ثانیه ، از نوع صحیح int وارد شود    
**مقدار دیفالت**: 500       
**توضیحات**:
led زمان خاموش ماندن

### **action**

<Platform android />

`data.action`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**:  دیکشنری      
**توضیحات**:
این کلید یک دیکشنری می‌باشد که مقادیر مربوط به اکشن اعلان نظیر باز کردن اپلیکیشن و یا باز کردن یه آدرس و ... را نگه می‌دارد


### **action_type**

<Platforms android />

`data.action.action_type`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید action](/docs/mobile-api/notification-keys#action)   
**نوع مقدار**:         
**توضیحات**: نوع عملکرد اعلان   
[مشاهده لیست تمامی عملکرد‌های اعلان](/docs/mobile-api/notification-actions)

### **url**

<Platforms android />

`data.action.url`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید action](/docs/mobile-api/notification-keys#action)   
**نوع مقدار**:         
**توضیحات**: مقدار یا عملکردی است که اکشن اعلان انجام می‌دهد   
[مشاهده لیست تمامی عملکرد‌های اعلان و url های مرتبط](/docs/mobile-api/notification-actions)

### **buttons**

<Platforms android />

`data.buttons`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/mobile-api/notification-keys#data)   
**نوع مقدار**: لیست     
**توضیحات**: لیستی از button ها می باشد     
هر button یک دیکشنری می‌باشد که کلید‌هایی نظیر `btn_action`, `btn_order` , ... را در برمیگیرد

### [button]

<Platforms android />

`data.buttons`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید buttons](/docs/mobile-api/notification-keys#buttons)   
**نوع مقدار**: دیکشنری     
**توضیحات**:    
**(این کلید وجود ندارد)** ، صرفا بیانگر این است که button یک دیکشنری درون کلید **buttons** می باشد که کلیدهایی  که در ادامه توضیح داده می‌شود را نگه می‌دارد.

### **btn_order**

<Platforms android />

`data.buttons.button.btn_order`

**استفاده**:  در صورت استفاده از button(s) این کلید اجباری می‌باشد   
**کلید پدر**: [کلید button](/docs/mobile-api/notification-keys#button)   
**نوع مقدار**: نوع عددی integer     
**توضیحات**:
ترتیب قرار گیری buttons در اعلان

### **btn_content**

<Platforms android />

`data.buttons.button.btn_content`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید button](/docs/mobile-api/notification-keys#button)   
**نوع مقدار**: رشته string     
**توضیحات**:
متن button

### **btn_icon**

<Platforms android />

`data.buttons.button.btn_icon`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید button](/docs/mobile-api/notification-keys#button)   
**نوع مقدار**: رشته string     
**توضیحات**:
آیکن button     
[مشاهده لیست آیکن‌های اعلان](/docs/mobile-api/notification-icons)

### **btn_action**

<Platforms android />

`data.buttons.button.btn_action`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید button](/docs/mobile-api/notification-keys#button)   
**نوع مقدار**: دیکشنری     
**توضیحات**:
همانند کلید [action](/docs/mobile-api/notification-keys#action) می‌باشد و دو کلید `action_type` , `url` قبول می‌کند که مقادیر آنها را می توانید
در قسمت [اکشن‌های اعلان](/docs/mobile-api/notification-actions) مشاهده کنید.

### **collapse_key**

<Platforms android />

`collapse_key`

**استفاده**:  اختیاری   
**کلید پدر**: -        
**نوع مقدار**: یکی از مقادیر زیر:   
key1, key2, key3, key4     
**توضیحات**: 
در صورتی که برای مثال در یک اعلان از مقدار key2 استفاده کنید ، 
در صورتی که کاربر اعلان را dismiss نکند و شما اعلان دیگری با این
مقدار key2 ارسال کنید ، اعلان دوم جایگزین اعلان قبلی با این مقدار میشود.
دقت شود که این کلید محدودیت ۴ اعلان دارد.

### **time_to_live**

<Platforms android />

`time_to_live`

**استفاده**:  اختیاری   
**کلید پدر**: -        
**نوع مقدار**: زمان به ثانیه     
**توضیحات**: زمان ماندگاری	

### **filters**

<Platforms android />

`filters`

**استفاده**:  اختیاری   
**کلید پدر**: -        
**نوع مقدار**: دیکشنری     
**توضیحات**: 
یک دیکشنری است که کلید‌های مربوط به انواع فیلتر و شناسه های یکتا اعلان را نگه می‌دارد.

### **operator**

<Platforms android />

`filters.operator`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید filters](/docs/mobile-api/notification-keys#filters)   
**نوع مقدار**: لیستی از رشته string     
**توضیحات**: فیلتر اعلان برای مشخص کردن نوع اپراتور     
**مقادیر**: `ir-mci` , `irancell` , `rightel`

### **brand**

<Platforms android />

`filters.brand`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید filters](/docs/mobile-api/notification-keys#filters)   
**نوع مقدار**: لیستی از رشته string     
**توضیحات**: فیلتر اعلان برای مشخص کردن نوع برند دستگاه     
**مقادیر**: `samsung` , `LGE` , `asus` , `htc` , `lenovo` , `sony` , `huawei`

### **mobile_net**

<Platforms android />

`filters.mobile_net`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید filters](/docs/mobile-api/notification-keys#filters)   
**نوع مقدار**: لیستی از رشته string     
**توضیحات**: فیلتر اعلان برای مشخص کردن نوع اینترنت  
**مقادیر**: `data` , `wifi‍‍`

### **state**

<Platforms android />

`filters.mobile_net`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید filters](/docs/mobile-api/notification-keys#filters)   
**نوع مقدار**: لیستی از رشته string     
**توضیحات**: فیلتر اعلان برای مشخص کردن استان  
**مقادیر**:
`East Azerbaijan` , `Azarbayjan-e Gharbi` , `Ardabil` , `Isfahan` , `Alborz` , `Ilam` , `Bushehr` , `Tehran` , `Chahar Mahall va Bakhtiari`,
`Khorasan-e Jonubi` , `Razavi Khorasan` , `Khorasan-e Shomali` , `Khuzestan` , `Zanjan` , `Semnan` , `Sistan and Baluchestan` , `Fars`, 
`Qazvin` , `Qom` , `Kordestan` , `Kerman` , `Kermanshah` , `Kohgiluyeh va Buyer Ahmad` , `Golestan` , `Gilan` , `Lorestan` , `Mazandaran`, 
`Markazi` , `Hormozgan` , `Hamadan` , `Yazd`

### **app_version**

<Platforms android />

`filters.app_version`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید filters](/docs/mobile-api/notification-keys#filters)   
**نوع مقدار**: لیستی از رشته string     
**توضیحات**: فیلتر اعلان برای مشخص کردن ورژن اپلیکیشن

### **topics**

<Platforms android />

`topics`

**استفاده**:  اختیاری   
**کلید پدر**: -     
**نوع مقدار**: لیستی از رشته string     
**توضیحات**: تعیین تاپیک‌ها که پیام ارسال شود	

### **unique**

<Platforms android />

`unique`

**استفاده**:  اختیاری   
**کلید پدر**: -     
**نوع مقدار**: بولین true/false     
**توضیحات**: به کاربران مشترک اپها یک پیام ارسال شود	

### **eta**

<Platforms android />

`eta`

**استفاده**:  اختیاری   
**کلید پدر**: -     
**نوع مقدار**: تاریخ و زمان به صورت iso string      
**توضیحات**: تعیین زمان ارسال برای نمونه به شکل ‍`"2016-10-18T13:28:00+03:30"`

### **priority**

`priority`

**استفاده**:  اختیاری   
**کلید پدر**: -     
**نوع مقدار**: عدد integer      
**توضیحات**:
مشحص کننده اولویت اعلان ساخته است.	    
یکی از اعداد : ۱ برای اولویت کم - ۲ برای اولویت متوسط -۳ برای اولویت زیاد