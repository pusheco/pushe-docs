---
id: tag
title: برچسب (Tag)
---

هر کاربری که در لیست نصب‌های برنامه قرار گیرد می‌تواند یک جیسون به همراه خود داشته باشد که نمایانگر ویژگی‌های مختلف مختص آن کاربر باشد.
برای ارسال اعلان و ... می‌توان از این تگ‌ها استفاده کرد و دسته‌ی خاصی از کاربران را مشخص کرد.

مثال:
- کاربرانی که در تاریخ خاصی متولد شده‌اند برای ارسال اعلان تبریک تولد.
- کاربرانی که نام آنها محمد است و ۲۵ سال دارند.
- و ...

## اضافه‌کردن تگ
> تمام نسخه‌ها

<div dir='ltr'>

#### `static void AddTags(Dictionary<string, string> tags)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|tags|یک شئ از Dictionary که کلید و مقدار آن string است|

```java
var tags = new Dictionary<string, string> {
    {"name","Mohammad"},
    {"age", "25"},
    {"birthday","1435187386"}
};
Pushe.AddTags(tags);
```

> **هر کاربر می‌تواند تا ۱۰ تگ داشته باشد**

## حذف تگ از لیست تگ‌ها
> تمام نسخه‌ها

<div dir='ltr'>

#### `static void RemoveTag(params string[] tags)`

</div>

برای حذف می‌توانید لیست کلید‌هایی که می‌خواهید از چیسون تگ حذف کنید را به ورودی تابع بدهید.

|پارامتر ورودی|استفاده|
|:--:|--|
|tags|یک شئ از Dictionary که کلید و مقدار آن string است|

```java
// Remove the keys 'name', 'age' and 'birthday' from tags
Pushe.RemoveTag("name", "age", "birthday");
```

## گرفتن لیست تگ‌ها
> از نسخه‌ی 0.4.4

<div dir='ltr'>

#### `static string GetSubscribedTags()`

</div>

خروجی این تابع یک Json string که تمام تگ‌های کاربر در آن وجود دارد خواهد بود.

```java
Pushe.AddTags(new Dictionary<string, string> {{"name","Ali"}})

string tags = Pushe.GetSubscribedTags(); // tags: {"name":"Ali"}
```