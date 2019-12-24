---
id: unique-device-id
title: دریافت شناسه یکتا وب‌پوش پوشه | pushe.co
hide_title: true
sidebar_label: دریافت شناسه یکتا‌
---

# دریافت شناسه یکتا کاربر در وب‌پوش

## توضیح شناسه یکتا

توسط کتابخانه وب‌پوش پوشه می توانید شناسه یکتایی که ما آنرا **deviceId** می نامیم را دریافت کرده و می توانید توسط **API** وب‌ پوشه به کاربر و یا کاربران خاصی که تمایل دارید اعلان ارسال کنید.

## دریافت شناسه (deviceId)

> در این متد از **Promise** استفاده شده و در صورتی که با **Promise** آشنایی ندارید توصیه می کنیم که از [این لینک](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) درباره آن مطالعه کنید

برای دریافت کردن **deviceId** می توانید از متد ‍‍‍```getDeviceId``` مطابق زیر استفاده کنید:

```javascript
Pushe.getDeviceId()
    .then(function(deviceId) {
        console.log(`Users's unique deviceId is: ${deviceId}`);
    });
```

متد ``getDeviceId`` که در بالا استفاده شده یک [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) برمیگرداند که با [chain کردن متد then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) بر روی آن می توانیم مقدار **deviceId** را پس از resolve شدن دریافت کنیم.
