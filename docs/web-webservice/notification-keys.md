---
id: notification-keys
title: وب‌سرویس وب پوشه
sidebar_label: همه کلید‌های اعلان
hide_title: true
hide_table_of_contents: true
description: راهنمای وب‌سرویس پوشه - همه کلید‌های اعلان
---


# کلید‌های اعلان

در این صفحه لیست تمامی کلید‌های اعلان به همراه توضیح آن‌ها قابل مشاهده می‌باشد.
قالب کلی اعلان یک دیکشنری است که کلید های زیر را درون خود نگه می‌دارد.

### **app_id**

`app_id`

**استفاده**: اجباری در همه نوع اعلان    
**کلید پدر**: -     
**نوع مقدار**: رشته string  
**توضیحات**:
این کلید بیانگر [شناسه اپلیکیشن](/docs/web-webservice/get-app-id) می‌باشد که برای همه انواع اعلان اجباری می‌باشد

### **data**

`data`

**استفاده**: اجباری   
**کلید پدر**: -     
**نوع مقدار**: دیکشنری    
**توضیحات**:
این کلید که از نوع دیکشنری می‌باشد برای نگه داری مقادیر محتوایی که قرار است در اعلان نمایش داده شوند نظیر عنوان، متن، آیکن و ... به کار می‌رود.
در صورت استفاده از این کلید ، حتما باید مقدار داشته باشد.

### **title**

`data.title`

**استفاده**:  (در صورت استفاده از کلید **data**) اجباری     
**کلید پدر**: [کلید data](/docs/web-webservice/notification-keys#data)   
**نوع مقدار**: رشته string    
**توضیحات**:
عنوان اعلانی که در دستگاه نمایش داده می‌شود

### **content**

`data.content`

**استفاده**:  (در صورت استفاده از کلید **data**) اجباری     
**کلید پدر**: [کلید data](/docs/web-webservice/notification-keys#data)   
**نوع مقدار**: رشته string    
**توضیحات**:
متن اعلانی که در دستگاه نمایش داده می‌شود

### **icon**

`data.icon`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/web-webservice/notification-keys#data)   
**نوع مقدار**: رشته string    
**توضیحات**:
آیکن اعلانی که در دستگاه نمایش داده می‌شود   
توصیه می‌شود که حتما از https برای آدرس آیکن استفاده شود

### **image**

`data.image`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/web-webservice/notification-keys#data)   
**نوع مقدار**: رشته string    
**توضیحات**:
عکس اعلانی که در دستگاه نمایش داده می‌شود.   
توصیه می‌شود که حتما از https برای آدرس عکس استفاده شود

### **action**

`data.action`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/web-webservice/notification-keys#data)   
**نوع مقدار**:  دیکشنری      
**توضیحات**:
این کلید یک دیکشنری می‌باشد که مقادیر مربوط به اکشن اعلان نظیر باز کردن وب‌سایت و یا باز کردن یه آدرس و ... را نگه می‌دارد



### **action_type**

`data.action.action_type`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید action](/docs/web-webservice/notification-keys#action)   
**نوع مقدار**:         
**توضیحات**: نوع عملکرد اعلان   
[مشاهده لیست تمامی عملکرد‌های اعلان](/docs/web-webservice/notification-actions)

### **url**

`data.action.url`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید action](/docs/web-webservice/notification-keys#action)   
**نوع مقدار**:         
**توضیحات**: مقدار یا عملکردی است که اکشن اعلان انجام می‌دهد   
[مشاهده لیست تمامی عملکرد‌های اعلان و url های مرتبط](/docs/web-webservice/notification-actions)



### **buttons**

`data.buttons`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید data](/docs/web-webservice/notification-keys#data)   
**نوع مقدار**: لیست     
**توضیحات**: لیستی از button ها می باشد     
هر button یک دیکشنری می‌باشد که کلید‌هایی نظیر `btn_action`, `btn_order` , ... را در برمیگیرد

### [button]

`data.buttons`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید buttons](/docs/web-webservice/notification-keys#buttons)   
**نوع مقدار**: دیکشنری     
**توضیحات**:    
**(این کلید وجود ندارد)** ، صرفا بیانگر این است که button یک دیکشنری درون کلید **buttons** می باشد که کلیدهایی  که در ادامه توضیح داده می‌شود را نگه می‌دارد.

### **btn_order**

`data.buttons.button.btn_order`

**استفاده**:  در صورت استفاده از button(s) این کلید اجباری می‌باشد   
**کلید پدر**: [کلید button](/docs/web-webservice/notification-keys#button)   
**نوع مقدار**: نوع عددی integer     
**توضیحات**:
ترتیب قرار گیری buttons در اعلان

### **btn_content**

`data.buttons.button.btn_content`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید button](/docs/web-webservice/notification-keys#button)   
**نوع مقدار**: رشته string     
**توضیحات**:
متن button

### **btn_icon**

`data.buttons.button.btn_icon`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید button](/docs/web-webservice/notification-keys#button)   
**نوع مقدار**: رشته string     
**توضیحات**:
آیکن button     
[مشاهده لیست آیکن‌های اعلان](/docs/web-webservice/notification-icons)

### **btn_action**

`data.buttons.button.btn_action`

**استفاده**:  اختیاری   
**کلید پدر**: [کلید button](/docs/web-webservice/notification-keys#button)   
**نوع مقدار**: دیکشنری     
**توضیحات**:
همانند کلید [action](/docs/web-webservice/notification-keys#action) می‌باشد و دو کلید `action_type` , `url` قبول می‌کند که مقادیر آنها را می توانید
در قسمت [اکشن‌های اعلان](/docs/web-webservice/notification-actions) مشاهده کنید.

### **close_on_click**

`close_on_click`

**استفاده**:  اختیاری   
**کلید پدر**: -     
**نوع مقدار**: بولین (true یا false)    
**توضیحات**:
باقی ماندن پیام تا کلیک کاربر	

