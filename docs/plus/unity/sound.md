---
id: punity-sound
title: صدای دلخواه اعلان
---


به طور پیش‌فرض صدای اعلان برای کاربر صدای پیش‌فرض است. اما می‌توان صدای اعلان را برای کاربر تغییر داد.

## غیرفعال‌کردن صدای دلخواه
> تمام نسخه‌ها


<div dir='ltr'>

#### `static void DisableCustomSound()`

</div>

```java
PusheNotification.DisableCustomSound();
```

## فعال‌کردن صدای دلخواه
> تمام نسخه‌ها


<div dir='ltr'>

#### `static void EnableCustomSound()`

</div>

```java
PusheNotification.EnableCustomSound();
```

## بررسی فعال‌بودن صدای دلخواه اعلان
> تمام نسخه‌ها


<div dir='ltr'>

#### `static void IsCustomSoundEnabled()`

</div>

```java
var isCustomSoundEnabled = PusheNotification.IsCustomSoundEnabled();
```