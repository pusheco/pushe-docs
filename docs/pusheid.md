---
id: common-pusheid
title: Pushe id
---

This is an unique id generated offlinely using device's different ids.

<!--DOCUSAURUS_CODE_TABS-->
<!--Java-->
```java
Pushe.getPusheId(this /* context */);

// Example

String pusheId = Pushe.getPusheId(this);
Pushe.sendSimpleNotifToUser(this, pusheId, "Hello", "This is a notif from my device");
```
<!--Kotlin-->
```kotlin
val pusheId = Pushe.getPusheId(this /* context */);
```
<!--Dart-->
```dart
// using .then
Pushe.getPusheId().then((pusheId) {
    // use pusheId
});
// using async/await
var pusheId = await Pushe.getPusheId();
```
<!--Js-->
```js
Pushe.getPusheId(function(pusheId) {
    // use pusheId
});
```
<!--B4A-->
```vb
' Sub Globals
Dim pushe As Pushe
Dim pusheId As String
' Activity_created
pusheId = pushe.getPusheId
```
<!--Swift-->
```swift
let pusheId = pushe.shared.getPusheId()
```
<!--Objective-C-->
```
GOD it's not supported
```
<!--END_DOCUSAURUS_CODE_TABS-->