---
id: notification-channels
title: پوشه | راهنما ری‌اکت‌نیتیو | کانال نوتیفیکیشن
sidebar_label: کانال نوتیفیکیشن
hide_title: true
---

# کانال نوتیفیکیشن

## تعریف کانال نوتیفیکیشن

کانال نوتیفیکیشن که در اندروید نسخه ۸ اضافه شده در واقع یک دسته‌بندی برای اعلان‌های ارسالی به کاربران می‌باشد که می‌توان در این دسته بندی رنگ ال‌ای‌دی ، صدای اعلان و ... را مشخص کرد.

استفاده از کانال نوتیفیکیشن در **اندروید ۸ به بالا** اجباری می‌باشد و هنگامی که از کتابخانه پوشه استفاده می‌کنید به صورت پیش‌فرض یک کانال به شما اختصاص داده می‌شود که در صورت تمایل می‌توانید توسط ادامه راهنما کانال سفارشی خودتان را ایجاد کنید.


> نکته: در نظر داشته باشید که در صورت ساخت کانال تنظیمات رنگ LED ، صدای اعلان و ... که در کنسول تنظیم می‌کنید دیگر کار نخواهد کرد و فقط تنظیمات کانال شما برای اعلان ارسالی‌تان اعمال می‌شود.


## اضافه‌کردن کانال نوتیفیکیشن

### متد ```Pushe.createNotificationChannel```

با استفاده از متد ‍‍```Pushe.createNotificationChannel``` می‌توانید یک کانال جدید ایجاد کنید.
پارامتر‌های ورودی در جدول زیر توضیح داده شده اند.


|پارامتر ورودی |استفاده| نوع پارامتر و لزوم استفاده 
|:--:|--:|:--:|
|channelId| شناسه‌ای که بتوان کانال را شناسایی کرد. مثلا `sportChannel`| string (اجباری) |
|channelName|نامی که برای کانال خود انتخاب می‌کنید| string (اجباری) |
|description|توضیحات دلخواه در مورد کانال| string (اختیاری) |
|importance|عددی بین ۰ تا ۵ که ۰ کمترین و ۵ بیشترین میزان اهمیت را برای نمایش اعلان در اندروید دارد ([اطلاعات بیشتر](https://developer.android.com/training/notify-user/channels#importance))| int (اختیاری) |
|enableLight|فعال‌کردن LED| boolean (اختیاری) |
|enableVibration|فعال‌کردن ویبره‌ی نوتیفیکیشن| boolean (اختیاری) |
|showBadge| فعال‌کردن نمایش بج در لانچر دستگاه (شکل دایره‌ای کوچک‌ی که در کنار آیکن اپلیکیشن نمایش داده می‌شود)| boolean (اختیاری) |
|ledColor|رنگ LED ([اطلاعات بیشتر](https://developer.android.com/reference/android/app/NotificationChannel.html#setLightColor(int)))| int (اختیاری) |
|vibrationPattern|پترن ویبره ([اطلاعات بیشتر](https://developer.android.com/reference/android/app/NotificationChannel.html#setVibrationPattern(long[])))| ```number[]``` لیستی از عدد (اختیاری) |

به ترتیب مقدار دهی پارامتر ها دقت کنید ، فقط دو پارامتر اول اجباری می‌باشند و مابقی اختیاری هستند.
```
Pushe.createNotificationChannel(
    channelId, 
    channelName, 
    description, 
    importance, 
    enableLight,
    enableVibration,
    showBadge,
    ledColor,
    vibrationPattern
);
```

> نکته بسیار مهم:    
تنها پارامترهای **channelId** و **channelName** اجباری می‌باشند و مابقی پارامتر‌ها اختیاری هستند.    
 فقط دقت کنید که ترتیب استفاده از پارامتر‌ها بسیار مهم است و در صورتی که مثلا می‌خواهید یک پارامتر اختیاری را مقدار ندهید حتما باید جای آن از **null** استفاده کنید تا بتوانید به پارامترهای بعدی مقدار دهید.    


```js
const channelId = "sportChannel";
const channelName = "My Sport group";
const channelDesc = "This channel holds athletes users";
const importance = 3;
const ledColor = -65536;
const light = true;
const vibration = false;
const badge = true;
const color = 0;
const vibrationPatterns = [100, 200, 300, 400, 500, 400, 300, 200, 400];

Pushe.createNotificationChannel(
    channel, 
    channelName,
    channelDesc,
    importance,
    light, 
    vibration,
    badge, 
    color,
    vibrationPatterns 
);
```
    
>  این متد یک ```Promise``` باز می‌گرداند که در صورت ثبت موفق کانال مقدار آن ```true``` و در صورت عدم ثب کانال خطای مربوطه ```reject``` می‌شود.

## حذف کانال نوتیفیکیشن

برای حذف کانال از پیش ایجاد شده می‌توانید با داشتن **channelId** با استفاده از متد زیر آن را حذف کنید.

### متد ```Pushe.removeNotificationChannel```


|پارامتر ورودی|استفاده|
|:--:|--|
|channelId|شناسه‌ی کانالی که ساخته شده است.|

```js
const channelThatWasCreated = "sportChannel";

Pushe.removeNotificationChannel(channelThatWasCreated);
```

>  این متد یک ```Promise``` باز می‌گرداند که در صورت حذف موفق کانال مقدار آن ```true``` و در صورت عدم حذف کانال خطای مربوطه ```reject``` می‌شود.