---
id: b4a-errors
title: خطاهای ممکن
---

در این بخش خطاهایی که ممکن‌است در مراحل مختلف راه‌اندازی پوشه در **B4A** با آن‌ها مواجه شوید به همراه راه‌حل ذکر شده‌اند.

> در صورتی که مورد شما خطا (Error) نیست، ممکن است در بخش [سوالات](/docs/b4a/b4a-faq) ذکر شده باشد.

---

> **خطای مورد نظر شما در لیست نیست؟** در [گیت‌هاب](https://github.com/pusheco/b4a-sample/issues?utf8=%E2%9C%93&q=is%3Aissue) به دنبال آن بروید و در صورت نیافتن در آنجا مورد جدیدی مطرح کنید.

---

> برای درک بهتر مشکل بهتر است که از [لاگ‌کت اندروید](https://developer.android.com/studio/command-line/logcat) استفاده کنید. [مقاله‌ای در این مورد](https://pub.pushe.co/%D8%A2%D9%BE%D9%84%D9%88%D8%AF-%DA%A9%D8%B1%D8%AF%D9%86-%D9%84%D8%A7%DB%8C%D8%A8%D8%B1%D8%B1%DB%8C-%D8%A7%D9%86%D8%AF%D8%B1%D9%88%DB%8C%D8%AF-%D8%AF%D8%B1-bintray-%D8%A8%D8%A7-%DA%AF%D8%B1%DB%8C%D8%AF%D9%84-gz7aiold2agq)

---

## خطاهای حین نصب‌ و راه‌اندازی

### خطا‌‌های مربوط به Maven Artifact not found ...
کتابخانه‌های لازم برای پوشه از 
**Maven**
 دانلود می‌شوند.
در صورتی که یکی از این کتابخانه‌ها دانلود نشده باشد با این خطا مواجه خواهید شد. 
برای حل مشکل بایستی کتابخانه نام برده شده در خطا را دانلود نمایید.

 از طریق ابزار 
SDK Manager
در نرم‌افزار بیسیک۴‌اندروید شما می‌توانید این کتابخانه‌ها را دانلود کنید. ولی به دلیل تحریم بودن نیاز است که از یک تحریم‌شکن یا وی‌پی‌ان برای این کار استفاده کنید. در صورتی که این کار برای شما امکان پذیر نیست، راه دیگر این است که کتابخانه‌های لازم را مستقیم از لینکی که در ادامه می‌گذاریم دانلود کرده و به 
Android SDK 
خود اضافه کنید. نحوه‌ی انجام این دو روش را در ادامه توضیح می‌دهیم.


**۱. نصب کتابخانه‌ها از طریق SDK Manager**


از منوی
Tools،‌
 گزینه‌ی 
 SDK manager
 را انتخاب کنید. کتابخانه‌های موجود و قابل نصب در این پنجره لیست می‌شوند، شما می‌توانید کتابخانه‌ی مورد نظر را انتخاب کرده و دکمه 
 `Install Selected`
 را انتخاب کنید تا نصب شوند.
 توصیه می‌کنیم همه‌ی کتابخانه‌های پیشنهاد شده در این پنجره را انتخاب و نصب کنید ولی اگر مایل به این کار نیستید می‌توانید فقط کتابخانه‌ی نام برده شده در خطا را انتخاب کنید. بعد از اتمام عملیات نصب، دوباره اقدام به بیلد برنامه بکنید و اگر کتابخانه‌ها درست نصب شده باشند با خطای قبلی مواجه نخواهید شد.


**۲. نصب کتابخانه‌ها به صورت دستی**

توصیه می‌کنیم از روش اول استفاده کنید ولی اگر این کار برای شما امکان پذیر نیست، شما می‌توانید کتابخانه‌ها را به صورت دستی نیز نصب کنید. برای این کار ابتدا با توجه به نسخه‌ی پلتفورم اندروید خود یکی از فایل‌های زیر را دانلود کنید. 
(در صورتی که نمی‌دانید از چه نسخه‌ای استفاده می‌کنید، از طریق منو نرم‌افزار پنجره‌ی 
`Tools -> Configure Paths`
را باز کرده و عبارت جلوی 
`android.jar`
را نگاه کنید)

- آگر نسخه‌ی پلتفورم اندروید **۲۸** استفاده می‌کنید، [این فایل](https://static.pushe.co/d/b4a/b4a_remote-28.zip) را دانلود کنید
- آگر نسخه‌ی پلتفورم اندروید **۲۷** استفاده می‌کنید، [این فایل](https://static.pushe.co/d/b4a/b4a_remote-27.zip) را دانلود کنید
- آگر نسخه‌ی پلتفورم اندروید **۲۶** استفاده می‌کنید، [این فایل](https://static.pushe.co/d/b4a/b4a_remote-26.zip) را دانلود کنید

 بعد از اتمام دانلود فایل زیپ را باز کرده و داخل آن فولدری به نام 
 `b4a_remote` 
 پیدا خواهید کرد. این فولدر را در مسیر 
 `<Android SDK>\extras` 
 کپی کنید. توجه داشته باشید که در این مسیر عبارت 
 `<Android SDK>`
 را با محل نصب 
 SDK
 اندروید بر روی سیستم خود جایگزین کنید. برای مثال اگر 
 SDK 
 اندروید شما در 
 `C:\Android SDK`
 نصب شده باشد، بعد از کپی کردن، فولدر 
 `C:\Android SDK\extras\b4a_remote`
 باید وجود داشته باشد.

---

### Resource entry provider_paths is already defined.

این مشکل به این دلیل رخ‌ می‌دهد که پوشه یک `File Provider` با ریسورس `provider_path` ساخته و با اضافه‌کردن خط 

`CreateResource(xml, provider_paths,  <external-files-path name="name" path="shared" />)`

این خطا رخ خواهد داد.

برای حل این مشکل در صورتی‌که قصد ساخت ریسورس دارید نام دیگری برای آن انتخاب کنید، مثلا `provider_path2` و آن را در `provider` نیز اعمال کنید.


```cs
AddApplicationText(
  <provider
  android:name="android.support.v4.content.FileProvider"
  android:authorities="$PACKAGE$.provider"
  android:exported="false"
  android:grantUriPermissions="true">
  <meta-data
  android:name="android.support.FILE_PROVIDER_PATHS"
  android:resource="@xml/provider_paths2"/>
  </provider>
)
CreateResource(xml, provider_paths2,  <external-files-path name="name" path="shared" />)
```

---

### Maven artifact not found: com.google.auto.value/auto-value-annotations

این لایبرری در SDK manager بیسیک۴اندروید وجود ندارد و مطابق
 [این پست](https://www.b4x.com/android/forum/threads/maven-artifact-not-found-com-google-auto-value-auto-value-annotations.103181/) 
 بایستی [این فایل](https://www.b4x.com/android/forum/attachments/m2repository-zip.77807/) را در آدرس زیر در AndroidSDK خود اکسترکت کنید.

`<Android SDK>\extras\google`

---

### Uncaught translation error: java.lang.IllegalArgumentException: already added: ...
این خطا به دلیل conflict دو یا بیشتر از لایبرری‌های اضافه‌شده به پروژه رخ می‌دهد.

با توجه به اینکه پوشه لایبرری‌ها را با استفاده از Maven اضافه می‌کند، به احتمال زیاد لایبرری‌های دیگر از Maven استفاده نکرده‌اند. بایستی فایل xml لایبرری‌هایی که اضافه کرده‌اید را باز کنید و لایبرری‌ها را در صورت امکان به Maven تبدیل کنید. 


```cs
Uncaught translation error: java.lang.IllegalArgumentException: already added: Landroid/support/annotation/AnimRes;
Uncaught translation error: java.lang.IllegalArgumentException: already added: Landroid/support/annotation/AnimatorRes;
Uncaught translation error: java.lang.IllegalArgumentException: already added: Landroid/support/annotation/AnyRes;
Uncaught translation error: java.lang.IllegalArgumentException: already added: Landroid/support/annotation/AnyThread;
Uncaught translation error: java.lang.IllegalArgumentException: already added: Landroid/support/annotation/ArrayRes;
Uncaught translation error: java.lang.IllegalArgumentException: already added: Landroid/support/annotation/AttrRes;
Uncaught translation error: java.lang.IllegalArgumentException: already added: Landroid/support/annotation/BinderThread;
Uncaught translation error: java.lang.IllegalArgumentException: already added: Landroid/support/annotation/BoolRes;
Uncaught translation error: java.lang.IllegalArgumentException: already added: Landroid/support/annotation/CallSuper;
UNEXPECTED TOP-LEVEL EXCEPTION:
java.lang.RuntimeException: Translation has been interrupted
at com.android.dx.command.dexer.Main.processAllFiles(Main.java:689)
at com.android.dx.command.dexer.Main.runMonoDex(Main.java:313)
at com.android.dx.command.dexer.Main.run(Main.java:279)
at com.android.dx.command.dexer.Main.main(Main.java:247)
at com.android.dx.command.Main.main(Main.java:106)
Caused by: java.lang.InterruptedException: Too many errors
at com.android.dx.command.dexer.Main.processAllFiles(Main.java:681)
... 4 more
```
در این خطا می‌توانیم ببینیم که لایبرری `support-annotation` دو بار به پروژه اضافه‌شده است.
در فایل xml پوشه:

`<dependsOn>com.android.support:support-annotations</dependsOn>`

مشاهده می‌شود. در صورتی که لایبرری‌های دیگر که از این لایبرری استفاده می‌کنند، به نحوی دیگر مثلا:

`<dependsOn>support-annotations.jar</dependsOn>`

این لایبرری را اضافه کرده‌اند، این مورد ایجاد تکرار می‌کند و دلیل مشکل است. بایستی این خط را با خط پوشه جایگزین کرده و دخیره نمایید.


در صورت موفق نشدن در این امر مشکل را با ذکر خطا به پشتیبانی پوشه اطلاع دهید.

---


### Generate R . Error

این خطا دلایل مختلفی دارد که معمولا در پایین آن درج شده است. در صورتی که هیچ خطایی بعد از آن نیست معمولا ناسازگاری `android.jar` و یا نسخه ی استفاده شده در `B4A` است.

---

### Install parse failed manifest malformed

این مشکل به دلیل این است که شما در Package Name اپلیکیشن خود از حروف بزرگ انگلیسی استفاده کرده اید. و اگر در منیفست شما از پکیج نیم استفاده شده باشد، بیسیک 4 اندروید نمی تواند کامپایل کند. برای آشنایی بیشتر می توانید به [این سایت](https://www.b4x.com/android/forum/threads/failure-install_parse_.27075/) مراجعه کنید.

همچنین بررسی کنید که فایل مانیفست ایراد نگارشی نداشته باشد.

---

### java.lang.OutOfMemoryError: GC overhead limit exceeded

اگر کامپایل پروژه خیلی طولانی شده است و یا نهایتا با این خطا رو‌به‌رو می‌شوید احتمالا به‌خاطر کم بودن رم اختصاص داده شده به نرم‌افزار بیسیک‌فور‌اندروید برای بیلد پروژه است.

 برای رفع این مشکل به ادرس زیر بروید:

```
C:\Users\<Your user name>\AppData\Roaming\Anywhere Software\Basic4android
```

فایلی با پسوند `.ini` در آن پیدا می‌کنید، این فایل را باز کنید. خطی بیابید که با عبارت `MaxRamForDex` شروع شود و مقدار جلوی آن را افزایش دهید. اگر مقدار فعلی آن `1024` است آن را به `2048` افزایش دهید و اگر مقدار `2048` هست به `4096` افزایش دهید. این فایل را ذخیره کنید و نرم‌افزار بیسیک‌فور‌اندروید را باز و بسته کنید و دوباره برنامه را کامپایل کنید.
