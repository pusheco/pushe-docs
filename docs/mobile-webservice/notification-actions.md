---
id: notification-actions
title: وب‌سرویس موبایل پوشه
sidebar_label: اکشن‌های اعلان
hide_title: true
description: راهنمای وب‌سرویس پوشه - اکشن‌های اعلان
---

import Platforms from "@site/src/components/Platforms.jsx";


# اکشن‌های اعلان


### **بازکردن اپلیکیشن**   

<Platforms android ios/>

**نوع عملکرد (action_type):** ‍`A`    
**مقدار عملکرد (url):** ندارد

```json
{
"data": { 
  "actions": {
    "action_type": "A"
    }  
  }
}
```

### **بستن اعلان**   

<Platforms android web/>

**نوع عملکرد (action_type):** ‍`D`    
**مقدار عملکرد (url):** ندارد

```json
{
"data": { 
  "actions": {
    "action_type": "D"
    }  
  }
}
```


### **باز کردن دیالوگ**   

<Platforms android />

**نوع عملکرد (action_type):** ‍`G`    
**مقدار عملکرد (url):** - 

```json
{
"data": { 
  "actions": {
    "action_type": "G"
    }  
  }
}
```


### **باز کردن اکتیویتی**   

<Platforms android />

**نوع عملکرد (action_type)**:  `T`   
****مقدار عملکرد (url)**: -     
**داده عملکرد (action_data)**: نام اکتیویتی

```json
{
"data": { 
  "actions": {
    "action_type": "T",
    "action_data": "نام اکتیویتی",
    "url": ""
    }  
  }
}
```

### **باز کردن وب ویو**   

<Platforms android />

**نوع عملکرد (action_type):** ‍`W`    
**مقدار عملکرد (url):** آدرس لینکی که قرار است نمایش داده شود

```json
{
"data": { 
  "actions": {
    "action_type": "W",
    "url": "https://pushe.co"
    }  
  }
}
```


### **باز کردن لینک در مرورگر**   

<Platforms android web/>

**نوع عملکرد (action_type):** ‍`U`    
**مقدار عملکرد (url):** آدرس لینکی که قرار است باز شود

```json
{
"data": { 
  "actions": {
    "action_type": "U",
    "url": "https://some url to link"         
    }  
  }
}
```

### **دعوت به کانال**   

<Platforms android />

**نوع عملکرد (action_type):** ‍`U`    
**مقدار عملکرد (url):** `tg://resolve?domain=نام کانال`

```json
{
"data": { 
  "actions": {
    "action_type": "U",
    "url": "tg://resolve?domain=نام کانال"
    }  
  }
}
```


### **باز کردن صفحه اپ در مایکت**   

<Platforms android />

**نوع عملکرد (action_type):** ‍`U`    
**مقدار عملکرد (url):**
`myket://application/#Intent;scheme=myket;package=شناسه اپلیکیشن;refId=[pushe];end`



```json
{
"data": { 
  "actions": {
    "action_type": "U",
    "url": "myket://application/#Intent;scheme=myket;package=شناسه اپلیکیشن"
    }  
  }
}
```
     

### **باز کردن صفحه اپ در بازار**   

<Platforms android />

**نوع عملکرد (action_type):** ‍`U`    
**مقدار عملکرد (url):** `bazaar://details?id=شناسه اپلیکیشن`

```json
{
"data": { 
  "actions": {
    "action_type": "U",
    "url": "bazaar://details?id=شناسه اپلیکیشن"
    }  
  }
}
```


### **باز کردن صفحه اپ در ایران اپس**   

<Platforms android />

**نوع عملکرد (action_type):** ‍`َU`    
**مقدار عملکرد (url):** `iranapps://app/شناسه اپلیکیشن`

```json
{
"data": { 
  "actions": {
    "action_type": "U",
    "url": "iranapps://app/شناسه اپلیکیشن"
    }  
  }
}
```


### **باز کردن صفحه اپ در گوگل پلی**   

<Platforms android />

**نوع عملکرد (action_type):** ‍`U`    
**مقدار عملکرد (url):** `market://dev?id=شناسه اپلیکیشن`

```json
{
"data": { 
  "actions": {
    "action_type": "U",
    "url": "market://details?id=شناسه اپلیکیشن"
    }  
  }
}
```


### **باز کردن صفحه توسعه دهنده در بازار**   

<Platforms android />

**نوع عملکرد (action_type):** ‍`U`    
**مقدار عملکرد (url):** `bazaar://collection?slug=by_author&aid=شناسه اپلیکیشن`

```json
{
"data": { 
  "actions": {
    "action_type": "U",
    "url": "bazaar://collection?slug=by_author&aid=شناسه اپلیکیشن"
    }  
  }
}
```


### **باز کردن شماره گیر**   

<Platforms android />

**نوع عملکرد (action_type):** ‍`U`    
**مقدار عملکرد (url):** `tel:شماره تلفن`

```json
{
"data": { 
  "actions": {
    "action_type": "U",
    "url": "tel:شماره تلفن"
    }  
  }
}
```


### **باز کردن صفحه پیامک**   

<Platforms android />

**نوع عملکرد (action_type):** ‍`U`    
**مقدار عملکرد (url):** `sms:شماره پیامک?body=متن پیام`

```json
{
"data": { 
  "actions": {
    "action_type": "U",
    "url": "sms:شماره پیامک?body=متن پیام"
    }  
  }
}
```


### **باز کردن نرم افزار ایمیل و پر کردن مقادیر**   

<Platforms android />

**نوع عملکرد (action_type):** ‍`U`    
**مقدار عملکرد (url):** `mailto:آدرس ایمیل?subject=عنوان ایمیل&body=متن ایمیل`

```json
{
"data": { 
  "actions": {
    "action_type": "U",
    "url": "mailto:آدرس ایمیل?subject=عنوان ایمیل&body=متن ایمیل"
    }  
  }
}
```


### **سایر اینتنت ها**   

<Platforms android />

**نوع عملکرد (action_type):** ‍`U`    
**مقدار عملکرد (url):** اینتنت مورد نظر

```json
{
"data": { 
  "actions": {
    "action_type": "U",
    "url": "اینتنت مورد نظر"
    }  
  }
}
```