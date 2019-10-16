---
id: pusheid
title: Pushe id
---

A unique id generated using device properties.

> **Pushe id does not relate to the registration process, so if you can get pushe id, it does not mean pushe is registered on the device.**

## Use push id

Using `async/await`:

```dart
var pusheId = await Pushe.getPusheId();
```

And using `.then`:

```dart
Pushe.getPusheId().then((pusheId) {
    // use pusheId
});