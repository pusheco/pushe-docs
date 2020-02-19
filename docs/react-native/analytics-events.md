---
id: analytics-events
title: پوشه | راهنما ری‌اکت‌نیتیو | ثبت رویداد
sidebar_label: ثبت رویداد
hide_title: true
description: راهنمای ری‌اکت‌نیتیو - ثبت رویداد
---

# ثبت رویداد در برنامه

import Platforms from "@site/src/components/Platforms.jsx";

## تعریف رویداد

در صورتی که رویداد یا ایونت خاصی در برنامه رخ دهد می‌توانید آن را از طریق کتابخانه پوشه ثبت کنید.
برای مثال در صورتی که کاربرتان در برنامه پلن خود را از رایگان به پولی تغییر داد می‌توانید یک رویداد از طریق پوشه ثبت کنید.

## ارسال رویداد

با استفاده از این قابلیت می‌توانید یک رویداد ساده که صرفا یک *نام رویداد* می‌باشد را ثبت کنید.

### متد `Pushe.sendEvent`

<Platforms ios android/>

| پارامتر | نوع |
|-- |--|
| `name` | `string` |
| `action` | `EventAction` |
| `data` | `object` |

```
const eventName = 'changePlan';

Pushe.sendEvent(eventName);
```

> `return` یک Promise برمی گرداند که مقدار resolve شده آن true می‌باشد.


## ارسال اطلاعات Ecommerce

این یک نوع از رویداد می‌باشد که مناسب رویداد هایی نظیر فروش کالا می باشد و در آن می‌توانید از فیلد های بیشتری در رویداد استفاده کنید.

### متد `Pushe.sendEcommerceData`

<Platforms android/>

| پارامتر | نوع |
|-- |--|
| `name` | `string` |
| `price` | `number` |


```
const name = "کالا-۱۰۲۴";
const price = 125000.0;

Pushe.sendEcommerceData(name, price);
```

> `return` یک Promise برمی گرداند که مقدار resolve شده آن true می‌باشد.
