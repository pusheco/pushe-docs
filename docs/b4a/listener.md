---
id: b4a-listener
title: رویدادهای نوتیفیکیشن
---


شما میتوانید از طریق پنل برای اپلیکیشن خود اطلاعات دلخواه در قالب جیسون (JSON) ارسال کنید. برای اینکه بتوانید از این اطلاعات در اپلیکیشن خود استفاده کنید مراحل زیر را انجام دهید.

- در منوی نرم‌افزار 
**B4A**
گزینه‌ی 
`Project -> Add New Module -> Service Module`
را انتخاب کنید و یک سرویس جدید بسازید. از شما خواسته خواهد شد که نام سرویس را وارد کنید، ما فرض می‌کنیم که نام سرویس 
`MyJsonReceiver`
هست ولی شما می‌توانید نام دلخواه خود را انتخاب کنید.

- فایل جدیدی با نام سرویسی که ساختید ایجاد خواهد شد. محتویات فایل را با متن زیر جایگزین کنید.
هر بار که اعلان جدیدی حاوی اطلاعات جیسون دریافت شود، تابع
`MessageReceived`
صدا زده خواهد شود. شما می‌توانید در این تابع عملیات مورد نظر خود را برای آن پیغام انجام دهید.


```js

Sub Process_Globals
	Dim PusheUtil As PusheB4AUtil
End Sub

Sub Service_Start (pIntent As Intent)
	If pIntent.Action == "co.ronash.pushe.RECEIVE" Then
		Dim JsonMsg As String
		JsonMsg = PusheUtil.getPusheJsonMsg(pIntent)
		If JsonMsg <> "" Then
			MessageReceived(JsonMsg)
		End If
	End If
	Service.StopAutomaticForeground
End Sub

Sub MessageReceived (JsonMsg As String)
	Log("Received Json Message")
	Log(JsonMsg)

    ' Process json message here ...
End Sub
```

- از طریق منوی 
`Project -> Manifest Editor`
تنظیمات منیفست پروژه را باز کنید و متن زیر را به آن اضافه کنید. توجه داشته باشید که عبارت 
`MyJsonReceiver`
را با نام سرویس خود جایگزین کنید.

```xml
AddServiceText(MyJsonReceiver,
<intent-filter>
    <action android:name="co.ronash.pushe.RECEIVE"/>
</intent-filter>
)
```


ورودی که به تابع 
`MessageReceived`
داده می‌شود به صورت یک
`String`
حاوی اطلاعات جیسون شماست. برای استفاده از ان احتمالا بخواهید ابتدا آن را به یک 
`Map`
تبدیل کنید. نحوه‌ی انجام این کار را با یک مثال توضیح می‌دهیم.


فرض کنید جیسونی به صورت مقابل فرستاده‌اید:

```json
{
    "titr": "تیتر",
    "matn": "متن"
}
```

می‌خواهیم با دریافت این پیغام، یک 
Toast
حاوی تیتر و متن داده شده به کاربر نشان دهیم. برای این کار ابتدا لازم است که کتابخانه‌ی 
`JSON`
را در پنجره‌ی 
`Libraries Manager`
فعال کنید. سپس تابع 
`MessageReceived` 
را به صورت زیر پیاده‌سازی می‌کنیم.

```js

Sub MessageReceived (jsonStr As String)
    Dim jsonParser As JSONParser
    Dim jsonObject As Map
    Dim title as String
    Dim content as String

  	Try
        jsonParser.Initialize(jsonStr)
	  	jsonObject = jsonParser.NextObject
		title = jsonObject.Get("titr")
		content = jsonObject.Get("matn")
		ToastMessageShow(title & ":" & content , True)
    Catch
        Log(LastException)
    End Try
End Sub
```