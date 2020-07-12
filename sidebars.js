/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  studio: {
    "اندروید استودیو": ["android-studio/intro","android-studio/advanced-setup", "android-studio/multidex"],
    "قابلیت‌ها و امکانات": [
      "android-studio/initialzation",
      "android-studio/unification",
      {
        type: 'category',
        label: 'گروه بندی کاربران',
        items: ['android-studio/topic', 'android-studio/notification-channel','android-studio/tag'],
      },
      "android-studio/d2d-notification",
      "android-studio/notification-listener",
      "android-studio/disable-notification",
      {
        type: 'category',
        label: 'آنالیتیکس',
        items: ['android-studio/events']
      }
,
      "android-studio/multiple-fcm"
    ],
    "سوالات و مشکلات": ["android-studio/troubleshoot", "android-studio/faq"],
    "تاریخچه نسخه های کتابخانه":["android-studio/releasenote"]
  },

  iOS: {
    "نصب و راه‌اندازی پوشه در Xcode": [
      "ios/intro"
    ],
    "قابلیت‌ها و امکانات": [
      "ios/configuration",
      // "ios/features",
      "ios/identifiers",
      {
        type: 'category',
        label: 'گروه بندی کاربران',
        items: ['ios/features/topic', 'ios/features/tag'],
      },
      {
        type: 'category',
        label: 'آنالیتیکس',
        items: ['ios/features/event']
      },
      //"ios/features/callbacks"
    ],
    "API reference": [
      "ios/reference/pushe-protocol",
      "ios/reference/pushe-client",
      // "ios/reference/pushe-delegate",
      {
        type: 'category',
        label: 'مدل‌ها',
        items: ["ios/reference/notification-data", "ios/reference/event"]
      }
    ],
    "سوالات و مشکلات": ["ios/errors", "ios/faq"]
  },

  flutter: {
    "Flutter": ["flutter/intro", "flutter/multidex"],
    "قابلیت‌ها و امکانات": [
      "flutter/registration",
      "flutter/unification",
      {
        type: 'category',
        label: 'گروه بندی کاربران',
        items: ["flutter/topic", "flutter/channel", "flutter/tag"],
      },
      {
        type: 'category',
        label: 'ارسال اعلان',
        items: [ 
          "flutter/d2d",
          "flutter/listener",
          "flutter/disable-notification",
        ]
      },
      "flutter/fcm"
    ],
    "سوالات و مشکلات": ["flutter/troubleshoot", "flutter/faq"]
  },

  reactnative: {
    "ری‌اکت نیتیو": ["react-native/intro", "react-native/multidex"],
    "قابلیت‌ها و امکانات": [
      "react-native/check-library-status",
      "react-native/user-unique-ids",
      {
        type: 'category',
        label: 'گروه بندی کاربران',
        items: [ 'react-native/topic', 'react-native/notification-channels','react-native/tag'],
      },
     
      "react-native/d2d-notifications",
      "react-native/notification-events",
      "react-native/disable-notification",
      "react-native/analytics-events",
      "react-native/multiple-services-conflict"
    ],
    "سوالات و مشکلات": ["react-native/errors", "react-native/faq"]
  },

  unity: {
    "Unity" : ["unity/intro",],
    "قابلیت‌ها و امکانات": [
      "unity/registration",
      "unity/unification",
      {
        type: 'category',
        label: 'گروه بندی کاربران',
        items: ['unity/topic', 'unity/channel','unity/tag'],
      },
      {
        type: "category",
        label: "ارسال اعلان",
        items: [
          "unity/d2d",
          "unity/listener",
          "unity/disable", 
          "unity/sound",
        ]
      },
      {
        type: "category",
        label: "آنالیتیکس",
        items: [
          "unity/events",
        ]
      },
    ],
    "سوالات و مشکلات": ["unity/troubleshoot", "unity/faq"],
    "تاریخچه نسخه های پلاگین":["unity/releasenote"]
  },

  webpush: {
    "وب‌پوش" : [
      "webpush/intro",
    ],
    "قابلیت‌ها": [
      "webpush/subscribe-prompt",
      "webpush/unique-device-id",
      "webpush/unsubscribe",
      "webpush/pwa",
    ],
    "سوالات و مشکلات": [
      "webpush/errors",
      "webpush/faq",
    ]
  },

  'mobile-api': {
    "وب‌سرویس موبایل": [
      "mobile-api/intro",
      "mobile-api/authentication",
      "mobile-api/get-app-id",
      "mobile-api/customized-notification",
      "mobile-api/simple-notification",
      "mobile-api/filtered-notification",
      "mobile-api/transactional-notification",
      "mobile-api/custom-content-notification",
      "mobile-api/notification-keys",
      "mobile-api/notification-actions",
      "mobile-api/notification-icons-table",
      "mobile-api/notification-frameworks-table",
      "mobile-api/notification-led-table",
    ]
  },

  'web-api': {
    "وب‌سرویس وب": [
      "web-api/intro",
      "web-api/authentication",
      "web-api/get-app-id",
      "web-api/simple-notification",
      "web-api/filtered-notification",
      "web-api/notification-keys",
      "web-api/notification-actions",
    ],
  },

  wordpress: {
    "راه اندازی": [
      "wordpress/intro",
    ],
    "تنظیمات پلاگین": [
      "wordpress/subscription_prompt",
      "wordpress/settings"
    ],
  }
};
