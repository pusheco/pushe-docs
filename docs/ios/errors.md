---
id: errors
title: خطاهای ممکن
---

در این بخش خطاهایی که ممکن‌ است در مراحل مختلف راه‌اندازی پوشه در **Xcode** با آن‌ها مواجه شوید به همراه راه‌ حل ذکر شده‌اند.

این خطاها به دو دسته‌ی زیر تقسیم می‌شوند:

- [خطاهای قبل از اجرای برنامه به هنگام کامپایل](#%D8%AE%D8%B7%D8%A7%D9%87%D8%A7%DB%8C-%D8%AD%DB%8C%D9%86-%D9%86%D8%B5%D8%A8-%D9%88-%D8%B1%D8%A7%D9%87%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C)
- [خطاهای حین اجرای برنامه](#%D8%AE%D8%B7%D8%A7%D9%87%D8%A7%DB%8C-%D9%87%D9%86%DA%AF%D8%A7%D9%85-%D8%A7%D8%AC%D8%B1%D8%A7%DB%8C-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D8%AF%D8%B1-%D9%84%D8%A7%DA%AF-%D9%88-)

> در صورتی که مشکل شما خطا (Error) نیست، ممکن است در بخش [سوالات](/docs/ios/faq) ذکر شده باشد.



> **خطای مورد نظر شما در این صفحه مطرح نشده است؟** در [قسمت Issues گیت‌هاب](https://github.com/pusheco/xcode-sample/issues?utf8=%E2%9C%93&q=is%3Aissue) جستجو کنید و در صورت نیافتن در آنجا [مورد جدیدی](https://github.com/pusheco/xcode-sample/issues/new) مطرح کنید.


## خطاهای حین نصب‌ و راه‌اندازی

### undefined symbol

در صورتی‌که زبان پروژه‌تان ‍‍`Objective-C` باشد، در هنگام Build کردن پروژه با خطاهایی به صورت <br/>
<div dir='ltr'>

`undefined symbol ...`

</div>

مواجه خواهید شد. دلیل این خطاها این است که کتابخانه پوشه به زبان `swift` نوشته شده است. برای رفع این خطاها دو گام زیر را انجام دهید:

 گام اول: اطمینان حاصل کنید که در target اصلی برنامه و `Notification Service Extension`، مقدار فیلد `Always Embed Swift Standard Libraries` در قسمت `Build Settings` برابر با `Yes` باشد.     

 ![IOS IMAGE](/img/ios/34.Objc.png)


 ![IOS image](/img/ios/35.Objc.png)


 گام دوم: بر روی فایل پروژه‌تان راست کلیک کنید و New File بزنید.

![IOS image](/img/ios/36.Bridging-header.png) 

 از بین گزینه‌های موجود، Swift File را انتخاب کنید وNext را بزنید.     

![IOS image](/img/ios/37.Bridging-header.png)  

 اطمینان حاصل کنید که این فایل هم عضو target اصلی و هم عضو Notification Service Extension پروژه باشد و سپس Create را بزنید.    

 ![IOS image](/img/ios/38.Bridging-header.png)    

 در مرحله آخر، گزینه Create bridging header را انتخاب کنید.    

 ![IOS image](/img/ios/39.Bridging-header.png)

<br />

---

## خطاهای هنگام اجرای برنامه که در console میبینید 

### خطای `could not find a valid GoogleService-Info.plist in your project`

این خطا که به صورت 
```
*** Terminating app due to uncaught exception 'com.firebase.core', reason: '`[FIRApp configure];` (`FirebaseApp.configure()` in Swift) could not find a valid GoogleService-Info.plist in your project. Please download one from https://console.firebase.google.com/.'
```
در کنسول ‍‍`Xcode` چاپ می‌شود، به این دلیل اتفاق می‌افتد که فایل `GoogleService-Info.plist` را که باید از فایربیس دریافت کنید، به پروژه‌تان اضافه نکرده‌اید. برای راهنمایی بیشتر در این مورد به لینک مراجعه کنید.