---
id: user-unique-ids
title: پوشه | راهنما ری‌اکت‌نیتیو | شناسه یکتا کاربران
sidebar_label: شناسه‌ی یکتا کاربران
hide_title: true
---

# شناسه‌ی یکتا کاربران

## اختصاص شناسه سفارشی به کاربران

شما می‌توانید به کاربران خود یک شناسه اختصاص دهید و از این شناسه برای ارسال اعلان تکی به کاربران استفاده کنید.

> یکتا نگه داشتن شناسه‌هایی که به کاربران خود اختصاص می‌دهید بر عهده شماست.
در صورتی که شناسه‌ای را به بیشتر از یک کاربر اختصاص دهید، موقع ارسال اعلان به آن شناسه همه کاربرانی که آن شناسه به آن‌ها اختصاص داده شده است اعلان را دریافت خواهند کرد.    
در مواقعی ممکن است این رفتار مطلوب باشد، مثلا در صورتی که یک کاربر در چند دستگاه لاگین کرده باشد ولی در غیر این صورت توجه داشته باشید که یک شناسه را به بیش از یک کاربر اختصاص ندهید.

سه نوع شناسه قابل اختصاص دادن به کاربران وجود دارد که شما برحسب نیاز از یک یا تعدادی از آن‌ها می‌توانید استفاده کنید.


شناسه|توضیحات|نحوه اختصاص دادن
------------|-------------| --------------
**ایمیل**| آدرس ایمیل کاربر |‌`Pushe.setUserEmail`
**شماره تلفن**| شماره تلفن کاربر |‌`Pushe.setUserPhoneNumber`
**شناسه دلخواه**| هر عبارت دلخواهی که می‌خواهید به عنوان شناسه استفاده کنید | ‍`Pushe.setCustomId`

> نکته: هر سه متد بالا یک Promise برمی‌گردانند که مقدار resolved شده true یا false می باشد.


### متد Pushe.setUserEmail

با استفاده از این متد می توانید ایمیل کاربر را به عنوان یک شناسه یکتا برای وی ذخیره کنید و با استفاده از آن اعلان یکتا برای این کاربر ارسال کنید.

> این متد یک Promise برمیگرداند که true یا false مقدار resolve شده آن می باشد. در صورتی که با موفقیت مقدار ذخیره شود true و در غیر این صورت مقدار false برمی گرداند.


```
const userEmail = 'someUserName@email.com';

Pushe.setUserEmail(userEmail)
    .then((res) => {
        if (res) {
            console.log('Successfully set user email');
        } else {
            console.log('Could not set user email');
        }
    });
```

> نکته: برای حذف ایمیل از قبل ذخیره شده کاربر مقدار null را به عنوان پارامتر به این متد بدهید.

### متد Pushe.setUserPhoneNumber

با استفاده از این متد می توانید شماره کاربر را به عنوان شناسه یکتا برای وی‌ دخیره کنید و با استفاده از این شماره به این کاربر اعلان یکتا ارسال کنید.

> این متد یک Promise برمیگرداند که true یا false مقدار resolve شده آن می باشد. در صورتی که با موفقیت مقدار ذخیره شود true و در غیر این صورت مقدار false برمی گرداند.


```
const phoneNumber = '09000000000';

Pushe.setUserPhoneNumber(phoneNumber)
    .then((res) => {
        if (res) {
            console.log('Successfully set user phone number');
        } else {
            console.log('Could not set user email');
        }
    });
```

> نکته: برای حذف شماره از پیش ذخیره شده مقدار null را به عنوان پارامتر به این متد بدهید.


### متد Pushe.setCustomId

با استفاده از این متد می توانید یک شناسه یکتا (می توانید از هر مقداری برای شناسه یکتا استفاده کنید فقط مقدار پارامتر باید از نوع string باشد) به کاربر اختصاص دهید تا با این شناسه به کاربر اعلان یکتا ارسال کنید.

> این متد یک Promise برمیگرداند که true یا false مقدار resolve شده آن می باشد. در صورتی که با موفقیت مقدار ذخیره شود true و در غیر این صورت مقدار false برمی گرداند.

```
// use uuid package to generate custom id
const uuidv4 = require('uuid/v4');

const customId = uuidv4();

Pushe.setCustomId(customId)
    .then((res) => {
        if (res) {
            console.log('Successfully set custom id');
        } else {
            console.log('Could not set custom id');
        }
    });
```

> نکته: برای حذف شناسه از پیش ذخیره شده مقدار null را به عنوان پارامتر به این متد بدهید.


## دریافت شناسه یکتا کاربر

علاوه بر شناسه‌های معرفی شده‌ی بالا، دو شناسه دیگر به صورت خودکار به کاربران شما اختصاص داده می‌شود که با استفاده از آن‌ها نیز می‌توانید به کاربران خود اعلان ارسال کنید.

توضیحات این شناسه‌ها در جدول زیر آمده است:

    
شناسه|توضیحات|نحوه دریافت
------------|-------------| --------------
**Android ID**| این شناسه توسط اندروید به کاربران اختصاص داده می‌شود. در گوشی‌های با سیستم عامل پایین‌تر از اندروید ۸، شناسه‌ی Android ID کاربر بین تمامی اپلیکیشن‌های نصب شده بر روی گوشی ثابت است و همچنین پس از حذف و نصب مجدد اپلیکیشن نیز ثابت می‌ماند. در نسخه‌ی اندروید ۸ به بالا، شناسه‌ی Android ID یک کاربر تنها برای اپلیکیشن‌هایی که با کلید‌های یکسان امضا شده باشند یکتا است و برای بقیه‌ی اپلیکیشن‌ها متفاوت است. |‌`Pushe.getAndroidId`
**Google Advertising ID**| این شناسه را Google Play Services به کاربران اختصاص می‌دهد. شناسه Advertising ID کاربر بین تمام اپلیکیشن‌های نصب شده بر روی گوشی او ثابت است ولی کاربر قادر است که این شناسه را reset  و یا غیر فعال کند. |‌`Pushe.getGoogleAdvertisingId`


### متد Pushe.getAndroidId

> این متد یک Promise برمی‌گرداند که در صورت resolve مقدار androidId را برمی‌گرداند و در صورت بروز خطا reject می شود.

```
Pushe.getAndroidId()
    .then((androidId) => {
        console.log(`androidId is: ${androidId}`);
    })
    .catch((error) => {
        console.log('Could not get androidId');
    })
```

### متد Pushe.getGoogleAdvertisingId

> این متد یک Promise برمی‌گرداند که در صورت resolve شدن مقدار googleAdvertisingId را به ما می‌دهد و در صورت بروز خطا reject می شود.

```
Pushe.getGoogleAdvertisingId()
    .then((googleAdvertisingId) => {
        console.log(`googleAdvertisingId is ${googleAdvertisingId}`);
    })
    .catch((error) => {
        console.log(`Could not get googleAdvertisingId`);
    });
```

## دریافت مقدار شناسه‌های سفارشی

برای دریافت مقادیر شناسه های سفارشی شده که متدهای آن در بالا توضیح داده شد می توانید از متد‌های زیر استفاده کنید.
توضیحات این شناسه‌ها در جدول زیر آمده است:

    
شناسه|توضیحات|نحوه دریافت
------------|-------------| --------------
شناسه سفارشی **userEmail** | شناسه سفارشی ایمیل که توسط شما از قبل ذخیره شده توسط این متد قابل دریافت می‌باشد. | `Pushe.getUserEmail`
شناسه سفارشی **userPhoneNumber** |  شناسه سفارشی شماره کاربر که از قبل توسط شما ذخیره شده و توسط این متد قابل دریافت می‌باشد. | `Pushe.getUserPhoneNumber`
شناسه سفارشی **customId** | شناسه customId که از قبل توسط شما ذخیره شده و توسط این متد قابل دریافت می‌باشد. | `Pushe.getCustomId`


### متد Pushe.getUserEmail

این متد مقداری که برای email از قبل توسط [Pushe.setUserEmail](#متد-pushesetuseremail) ذخیره شده را برمی‌گرداند.
در صورتی که هیچ مقدار ایمیلی از قبل برای آن ذخیره نشده باشد یک string خالی برمی‌گرداند.

> این متد یک Promise برمی‌گرداند که در صورت resolve شدن مقدار userEmail را به ما می‌دهد و در صورت بروز خطا reject می‌شود.

```
Pushe.getUserEmail()
    .then((userEmail) => {
        console.log(`User email is: ${userEmail}`);
    })
    .catch((error) => {
        console.log(`Error getting user email`);
    });
```

### متد Pushe.getUserPhoneNumber

این متد مقداری که برای phoneNumber از قبل توسط [Pushe.setUserPhoneNumber](#متد-pushesetuserphonenumber) ذخیره شده را برمی‌گرداند.
در صورتی که هیچ مقداری از قبل ذخیره نشده باشد یک string خالی بر‌می‌گرداند.

> این متد یک Promise برمی‌گرداند که در صورت resolve شدن مقدار userEmail را به ما می‌دهد و در صورت بروز خطا reject می‌شود.

```
Pushe.getUserPhoneNumber()
    .then((phoneNumber) => {
        console.log(`userPhoneNumber is: ${phoneNumber}`);
    })
    .catch((error) => {
        console.log(`Error getting user phone number`);
    });
```

### متد Pushe.getCustomId

این متد مقداری که از قبل برای customId توسط [Pushe.setCustomId](#متد-pushesetcustomid) ذخیره شده را بر‌می‌گرداند.
در صورتی که هیچ مقداری از قبل ذخیره نشده باشد یک string خالی برمی‌گرداند.

> این متد یک Promise برمی‌گرداند که در صورت resolve شدن مقدار customId را به ما می‌دهد و در صورت بروز خطا reject می‌شود.

```
Pushe.getCustomId()
    .then((customId) => {
        console.log(`customId is: ${customId}`)
    })
    .catch((error) => {
        console.log(`Error getting customId`);
    });
```