---
id: notification-actions
title: اکشن‌های اعلان
sidebar_label: اکشن‌های اعلان
hide_title: true
description: راهنمای وب‌سرویس پوشه - اکشن‌های اعلان
---

# اکشن‌های اعلان


### **باز کردن لینک در مرورگر**   
**نوع عملکرد (action_type):** ‍`U`    
**مقدار عملکرد (url):** آدرس لینک

```json
{
"data": { 
  "action": {
    "action_type": "U",
    "url": "https://some url to link"         
    }  
  }
}
```

### **بستن اعلان**   
**نوع عملکرد (action_type):** ‍`D`    
**مقدار عملکرد (url):** ندارد

```json
{
"data": { 
  "action": {
    "action_type": "D"
    }  
  }
}
```