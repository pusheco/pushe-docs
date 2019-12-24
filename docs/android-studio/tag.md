---
id: studio-tag
title: برچسب (Tag)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

هر کاربری که در لیست نصب‌های برنامه قرار گیرد می‌تواند یک جیسون به همراه خود داشته باشد که نمایانگر ویژگی‌های مختلف مختص آن کاربر باشد.
برای ارسال اعلان و ... می‌توان از این تگ‌ها استفاده کرد و دسته‌ی خاصی از کاربران را مشخص کرد.

مثال:
- کاربرانی که در تاریخ خاصی متولد شده‌اند برای ارسال اعلان تبریک تولد.
- کاربرانی که نام آنها محمد است و ۲۵ سال دارند.
- و ...

## اضافه‌کردن تگ
> تمام نسخه‌ها

<div dir='ltr'>

#### `static void addTags(Map<String, String> tags)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|tags|یک شئ از Map که کلید و مقدار آن string است|

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
> تمام نسخه‌ها

<div dir='ltr'>

#### `static void removeTags(List<String> tags)`

</div>

برای حذف می‌توانید لیست کلید‌هایی که می‌خواهید از جیسون تگ حذف کنید را به ورودی تابع بدهید.

|پارامتر ورودی|استفاده|
|:--:|--|
|tags|لیست کلید‌هایی که می‌خواهید از جیسون تگ حذف کنید|


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

## گرفتن لیست تگ‌ها
> از نسخه‌ی 0.4.4

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
