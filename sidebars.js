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
    "Flutter": ["flutter/intro"],
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
      {
        type: "category",
        label: "سوالات و مشکلات",
        items: [
          "unity/troubleshoot",
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
