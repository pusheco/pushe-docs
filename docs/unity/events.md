---
id: events
title: Event
---


در صورتی که ایونت خاصی در برنامه اتفاق افتاد می‌توانید آن‌را با استفاده از Pushe ثبت کنید.

> **منظور از Event چیست؟**
> برای مثال کاربری خریدی انجام داده است، یا مدت زمان استفاده‌ی کاربر از 

## ارسال Event
> تمام نسخه‌ها

> **منظور از Event چیست؟**<br /><br />
> برای مثال در صورتی که کاربر پلن خود را در برنامه از رایگان به پولی تغییر داد می‌توان از این امکان برای ارسال و ثبت این رویداد استفاده نمود.

<div dir='ltr'>

#### `static void SendEvent(string)`

</div>

```java
string eventName = "permium_activated";
PusheAnalytics.SendEvent(eventName);
```

## ارسال Ecommerce data
> تمام نسخه‌ها

> **در چه حالاتی می‌توان از این امکان استفاده کرد؟**<br /><br />
> برای مواردی همچون فروش یک نوع کالایی که بصورت آنلاین مبادله می‌شود می‌توان از این امکان پوشه استفاده کرد و آن‌را برای این کاربر ثبت کرد.

<div dir='ltr'>

#### `static void SendEcommerceData(name, price, category, quantity)`

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
PusheAnalytics.SendEcommerceData(name, price, category, quantity);
```