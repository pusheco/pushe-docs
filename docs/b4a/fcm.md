---
id: b4a-fcm
title: استفاده‌ی همزمان با FCM
---


اگر در پروژه خود دارید به همراه پوشه از فایربیس نیز به صورت مستقیم استفاده می‌کنید، هنگام دریافت مانیفست در پنل پوشه گزینه‌ی مربوطه را مانند شکل زیر انتخاب کنید و سپس مراحل توضیح داده شده را دنبال کنید. توجه داشته باشید که در این صورت در لیست کتابخانه‌های فعال شده در 
 **B4A**
 در قسمت 
`Libraries Manager`
باید 
`FirebaseNotifications`
نیز انتخاب شده باشد.

<img src="/img/b4a/firebase_compat.png" />

مانیفست باید شکل زیر را داشته‌باشد:

```js
CreateResourceFromFile(Macro, FirebaseAnalytics.GooglePlayBase)
CreateResourceFromFile(Macro, FirebaseAnalytics.Firebase)
CreateResourceFromFile(Macro, Pushe.FirebaseCompatible)
AddApplicationText(<meta-data android:name="co.ronash.pushe.token" android:value="PUSHE_TOKEN"/>)
AddPermission(android.permission.ACCESS_COARSE_LOCATION)
```



همچنین توجه داشته باشید که عبارت‌های زیر که ممکن است برای راه‌اندازی فایربیس به منیفست پروژه‌ی شما اضافه شده باشند و باید 
**حذف شوند**.

```js
CreateResourceFromFile(Macro, FirebaseNotifications.FirebaseNotifications)
```

```xml
<service android:name="anywheresoftware.b4a.objects.FirebaseNotificationsService">
   <intent-filter>
      <action android:name="com.google.firebase.MESSAGING_EVENT"/>
   </intent-filter>
</service>
```