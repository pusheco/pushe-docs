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
    "سوالات و مشکلات": ["android-studio/troubleshoot", "android-studio/faq"]
  },

  iOS: {
    "نصب و راه‌اندازی پوشه در Xcode": [
      "ios/intro"
    ],
    "قابلیت‌ها": [
      "ios/features",
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
      "ios/features/callbacks"
    ],
    "API reference": [
      "ios/reference/pushe-protocol",
      "ios/reference/pushe-client",
      "ios/reference/pushe-delegate",
      {
        type: 'category',
        label: 'مدل‌ها',
        items: ["ios/reference/notification-data", "ios/reference/event"]
      }
    ],
    "سوالات و مشکلات": ["ios/errors", "ios/faq"]
  },

  flutter: {
    "Flutter": ["flutter/flutter-intro"],
    "قابلیت‌ها و امکانات": [
      "flutter/flutter-init",
      {
        type: 'category',
        label: 'گروه بندی کاربران',
        items: ["flutter/flutter-topic"/*, "flutter/flutter-channel",*/],
      },
      "flutter/flutter-pusheid",
      "flutter/flutter-d2d",
      "flutter/flutter-listener",
      "flutter/flutter-disable",
      
      "flutter/flutter-fcm"
    ],
    "سوالات و مشکلات": ["flutter/flutter-errors", "flutter/flutter-faq"]
  },

  b4a: {
    "بیسیک‌فوراندروید": ["b4a/b4a-intro"],
    "قابلیت‌ها و امکانات": [
      "b4a/b4a-advanced", 
      "b4a/b4a-pusheid",
      "b4a/b4a-topic",
      "b4a/b4a-d2d",
      "b4a/b4a-listener",
      "b4a/b4a-disable",
      "b4a/b4a-channel",
      "b4a/b4a-fcm",
    ],
    "سوالات و مشکلات": ["b4a/b4a-errors", "b4a/b4a-faq"],
    "مستندات قدیمی": [
      {
        type:"link",
        label: "مستندات پوشه",
        href:"https://pushe.co/docs/b4a"
      }
    ],
  },

  reactnative: {
    "ری‌اکت نیتیو": ["react-native/intro"],
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

  cordova: {
    "Cordova": ["cordova/cordova-intro",],
    "قابلیت‌ها": [
      "cordova/cordova-advanced",
      "cordova/cordova-pusheid",
      "cordova/cordova-d2d",
      "cordova/cordova-topic",
      "cordova/cordova-channel",
      "cordova/cordova-disable"
    ],
    "سوالات و مشکلات": ["cordova/cordova-errors", "cordova/cordova-faq"]
  },

  unity: {
    "Unity" : ["unity/intro",],
    "قابلیت‌ها": [
      "unity/features",
      "unity/reg",
      {
        type:"category",
        label:"شناسایی و گروهبندی کاربر",
        items: [
          "unity/id", 
          "unity/topic",
          "unity/tag",
          "unity/channel"
        ]
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
      {
        type: "category",
        label: "سوالات و مشکلات",
        items: [
          "unity/errors",
          "unity/faq",
        ]
      },
    ]
  },

  webpush: {
    "وب‌پوش" : [
      "webpush/intro",
    ],
    "قابلیت‌ها": [
      "webpush/subscribe-prompt",
      "webpush/unique-device-id",
      "webpush/unsubscribe",
    ],
    "سوالات و مشکلات": [
      "webpush/errors",
      "webpush/faq",
    ]
  },

  'mobile-api': {
    "وب‌سرویس موبایل (اندروید و آی‌او‌اس)": [
      "mobile-api/authentication",
      "mobile-api/create_application",
      "mobile-api/get_applications_list",
      "mobile-api/rename_application",
      "mobile-api/remove_application",
      "mobile-api/application_installations",
      "mobile-api/table_notification_keys",
      "mobile-api/table_icons",
      "mobile-api/table_notification_actions",
      "mobile-api/table_notification_led_colors",
      "mobile-api/table_frameworks",
    ],
  },

  'web-api': {
    "وب‌سرویس وب‌پوش": [
      "web-api/authentication",
      "web-api/create_website",
      "web-api/get_website_list",
      "web-api/rename_website",
      "web-api/remove_website",
      "web-api/send_notification",
      "web-api/table_notification_keys",
      "web-api/table_actions",
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
