---
id: remove_website
title: وب‌سرویس وب‌پوش پوشه | pushe.co webpush notification api
hide_title: true
sidebar_label: حذف وب‌سایت
---

# حذف وب‌سایت با وب‌سرویس پوشه


 در پوشه بصورت کلی برای حذف سایت خود می‌توانید از آدرس
`https://api.pushe.co/v2/applications/web/YOUR_APPLICATION_ID/`
بصورت زیر استفاده نمایید:

```
curl -X DELETE https://api.pushe.co/v2/applications/web/YOUR_APPLICATION_ID/ -H 'authorization: Token YOUR_TOKEN' -H 'content-type: application/json'
```

|        کلید|     فرمت کلید|               توضیحات|
| ---------- |:------------:|---------------------:|
|`YOUR_APPLICATION_ID`(‌اجباری) | رشته(String) |   کلید `YOUR_APPLICATION_ID` در `url` اجباری می‌باشد.  |

