---
id: studio-tag
title: برچسب (Tag)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

شما می‌توانید کاربرانتان را برچسب گذاری کنید. هر تگ یا برچسب نمایانگر ویژگی‌های مختلف مختص آن کاربر است.
برای ارسال اعلان می‌توان از این تگ‌ها استفاده کرد و دسته‌ی خاصی از کاربران را مشخص کرد.

مثال:
- کاربرانی که در تاریخ خاصی متولد شده‌اند برای ارسال اعلان تبریک تولد.
- کاربرانی که نام آنها محمد است و ۲۵ سال دارند.
- و ...

## اضافه‌کردن تگ

<div dir='ltr'>

#### `static void addTags(Map<String, String> tags)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|tags|یک شئ از Map که کلید و مقدار آن string است. کلیدها عنوان تگ و مقدار هر کلید هم مقدار تگ را مشخص می‌کند|

در مثال زیر تگ‌های نام، سن و تاریخ تولد در نظر گرفته شده‌اند. 

<Tabs
  defaultValue="kt"
  values={[
    { label: 'Java', value: 'java', },
    { label: 'Kotlin', value: 'kt', },
  ]}>

<TabItem value="kt">

```java
val tags = mapOf("name" to "Mohammad","age" to "25","birthday" to "1435187386")
Pushe.addTags(tags);
```

</TabItem>

<TabItem value="java">

```java
Map<Strring,String> tags = new HashMap<String, String>();
tags.put("name","Mohammad");
tags.put("age","25");
tags.put("birthday","1435187386");
Pushe.addTags(tags);
```

</TabItem>

</Tabs>

<br />


> **هر کاربر می‌تواند تا ۱۰ تگ داشته باشد**

## حذف تگ از لیست تگ‌ها

<div dir='ltr'>

#### `static void removeTags(List<String> tags)`

</div>

می‌توانید لیست کلید‌هایی که می‌خواهید حذف کنید را به ورودی تابع بدهید.

|پارامتر ورودی|استفاده|
|:--:|--|
|tags|لیست کلید‌هایی که می‌خواهید از تگ‌ها حذف کنید|


<Tabs
  defaultValue="kt"
  values={[
    { label: 'Java', value: 'java', },
    { label: 'Kotlin', value: 'kt', },
  ]}>

<TabItem value="kt">

```java
val tags = listOf("name","age" ,"birthday")
Pushe.removeTags(tags);
```

</TabItem>

<TabItem value="java">

```java
List<Strring> tags = new ArrayList<String>();
tags.add("name");
tags.add("age");
tags.add("birthday");
Pushe.removeTags(tags);
```

</TabItem>

</Tabs>

> **هم برای اضافه کردن تگ و هم برای حذف کردن تگ می‌توانید callback ست کنید تا وقتی عملیات موفق بود از آن مطلع بشوید. توابع اضافه کردن و حذف کردن تگ یک نسخه دومی هم دارند که علاوه بر تگ‌ها callback هم به عنوان ورودی می‌گیرند. به اضافه کردن تگ در مثال زیر توجه کنید.
**

<Tabs
  defaultValue="kt"
  values={[
    { label: 'Java', value: 'java', },
    { label: 'Kotlin', value: 'kt', },
  ]}>

<TabItem value="kt">

```java
val tags = mapOf("name" to "Mohammad","age" to "25","birthday" to "1435187386")
Pushe.addTags(tags,object : Pushe.Callback{
            override fun onComplete() {
                // وقتی عملیات اضافه کردن تگ‌ها با موفقیت انجام شود کدهای نوشته شده در اینجا اجرا خواهند شد
            }
        });
```

</TabItem>

<TabItem value="java">

```java
Map<Strring,String> tags = new HashMap<String, String>();
tags.put("name","Mohammad");
tags.put("age","25");
tags.put("birthday","1435187386");
Pushe.addTags(tags,new Pushe.Callback() {
            @Override
            public void onComplete() {
                 // وقتی عملیات اضافه کردن تگ‌ها با موفقیت انجام شود کدهای نوشته شده در اینجا اجرا خواهند شد
            }
        });
```

</TabItem>

</Tabs>

## گرفتن لیست تگ‌ها

<div dir='ltr'>

#### `static Map<String,String> getSubscribedTags()`

</div>

خروجی این تابع یک Map که تمام تگ‌های کاربر در آن وجود دارد خواهد بود.


<Tabs
  defaultValue="kt"
  values={[
    { label: 'Java', value: 'java', },
    { label: 'Kotlin', value: 'kt', },
  ]}>

<TabItem value="kt">

```java
val tags = mapOf("name" to "Ali")
Pushe.addTags(tags);
val subscribedtags = Pushe.getSubscribedTags(); // tags: {"name":"Ali"}

```

</TabItem>

<TabItem value="java">

```java
Map<Strring,String> tags = new HashMap<String, String>();
tags.put("name","Ali");
Pushe.addTags(tags);
Map<String,String> subscribedtags = Pushe.getSubscribedTags(); // tags: {"name":"Ali"}

```

</TabItem>

</Tabs>
