---
id: check-library-status
title: پوشه | راهنما ری‌اکت‌نیتیو | بررسی رجیستر دستگاه
sidebar_label: بررسی آماده به کار شدن کتابخانه 
hide_title: true
description: راهنمای ری‌اکت‌نیتیو - بررسی آماده به کار شدن کتابخانه
---

# بررسی آماده به کار شدن کتابخانه 

import Platforms from "@site/src/components/Platforms.jsx";

## تعریف ```registration``` و ```initialization```

> تعریف ‍‍‍```initialization```     
هنگامی که ماژول‌های مختلف (نوتیفیکیشن، آنالیتیکس و ...) به طور کامل آماده استفاده شوند

> تعریف ```registration```    
به عملیات ثبت شدن نصب در سرور‌های پوشه رجیستر گفته می‌شود. که بعد از این رجیستر شدن امکان ارسال اعلان میسر می‌شود.


نکته: عملیات رجیستر دستگاه فقط یکبار انجام می‌شود و وضعیت بعد از اتمام آن ذخیره می‌شود (در صورت نصب دوباره و یا پاک‌کردن دیتا این عملیات ریست می‌شود.)

با توجه به اینکه عملیات رجیستر نیاز به اینترنت دارد ممکن است این پروسه مقداری زمان بگیرد

## متد ```Pushe.isInitialized``` 

<Platforms android/>

از این متد می توانید وضعیت ```initializiation``` را بررسی کنید.
این متد یک Promise بر‌می‌گرداند که مقدار true یا false را در حالت resolve شدن به ما می‌دهد.
دقت کنید که این متد برای چک کردن رجیستر شدن دستگاه در سرورهای پوشه نیست و برای چک کردن رجیستر شدن دستگاه باید از تابع isRegistered که در پایین توضیح داده شده است استفاده کنید.

```
Pushe.isInitialized()
    .then((initialized) => {
        if (initialized) {
            console.log(`Pushe is initialized`);
        } else {
            console.log(`Pushe is not initialized`);
        }
    });
```

## متد ```Pushe.isRegistered```

<Platforms android ios/>

از این متد می توانید وضعیت ```registration``` را بررسی کنید.
این متد یک Promise بر‌می‌گرداند که مقدار true یا false را در حالت resolve شدن به ما می‌دهد.

```
Pushe.isRegistered()
    .then((registered) => {
        if (registered) {
            console.log(`Pushe is registered`);
        } else {
            console.log(`Pushe is not registered`);
        }
    });
```
