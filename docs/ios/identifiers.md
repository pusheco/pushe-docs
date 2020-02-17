---
id: identifiers
title: پوشه | راهنما آی‌اواس | شناسه‌ها 
sidebar_label: شناسه‌ها
hide_title: true
description: راهنمای آی‌اواس - شناسه‌ها 
---

# شناسه‌ها

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## DeviceId

این شناسه متناظر است با:

<div dir='ltr'>

#### `UIDevice.current.identifierForVendor?.uuidString`

</div>

<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]}>

<TabItem value="swift">

```swift
let deviceId = PusheClient.shared.getDeviceId()
```

</TabItem>

<TabItem value="objc">

```objc
NSString * deviceId = [PusheClient.shared getDeviceId];
```

</TabItem>

</Tabs>

## AdvertisingId

این شناسه متناظر است با:

<div dir='ltr'>

#### `ASIdentifierManager.shared().advertisingIdentifier.uuidString`

</div>

<Tabs
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift', },
    { label: 'Objective-C', value: 'objc', },
  ]}>

<TabItem value="swift">

```swift
let advertisingId = PusheClient.shared.getAdvertisingId()
```

</TabItem>

<TabItem value="objc">

```objc
NSString * advertisingId = [PusheClient.shared getAdvertisingId];
```

</TabItem>

</Tabs>