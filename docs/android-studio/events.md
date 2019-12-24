---
id: studio-events
title: رویدادها
---


در صورتی که ایونت(رویداد) خاصی در برنامه اتفاق افتاد می‌توانید آن‌ را با استفاده از Pushe ثبت کنید.

## ارسال رویداد
> تمام نسخه‌ها

> **منظور از رویداد یا ایونت چیست؟**<br /><br />
> برای مثال در صورتی که کاربر پلن خود را در برنامه از رایگان به پولی تغییر داد می‌توان از این امکان برای ارسال و ثبت این رویداد استفاده نمود.

<div dir='ltr'>

#### `static void sendEvent(String name)`

</div>

```java
string eventName = "permium_activated";
PusheAnalytics.sendEvent(eventName);
```

## ارسال Ecommerce data
> تمام نسخه‌ها

> **در چه حالاتی می‌توان از این امکان استفاده کرد؟**<br /><br />
> برای مواردی همچون فروش یک نوع کالایی که بصورت آنلاین مبادله می‌شود می‌توان از این امکان پوشه استفاده کرد و آن‌ را برای این کاربر ثبت کرد.

<div dir='ltr'>

#### `static void sendEcommerceData(name, price, category, quantity)`

</div>

|پارامتر ورودی|استفاده|نوع داده|
|:--:|--|--|
|name|نام داده|string|
|price|قیمت|double|
|category|دسته‌بندی|string|
|quantity|تعداد|long|

```java
string name = "کالا-۱۰۲۴";
string category = "لوازم خانگی";
double price = 125000.0;
long quantity = 4;
PusheAnalytics.sendEcommerceData(name, price, category, quantity);
```