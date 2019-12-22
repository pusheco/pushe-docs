/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  studio: {
    "اندروید استودیو": ["android-studio/studio-intro",],
    "قابلیت‌ها": [
      "android-studio/studio-advanced",
      "android-studio/studio-init",
      {
        type: 'category',
        label: 'گروهبندی کاربران',
        items: ['android-studio/studio-topic', 'android-studio/studio-channel'],
      },
      "android-studio/studio-pusheid",
      "android-studio/studio-d2d",
      "android-studio/studio-listener",
      "android-studio/studio-disable",
      "android-studio/studio-fcm"
    ],
    "سوالات و مشکلات": ["android-studio/studio-errors", "android-studio/studio-faq"],
    "مستندات قدیمی": [
      {
        type:"link",
        label: "مستندات پوشه",
        href:"https://pushe.co/docs/android-studio"
      }
    ]
  },

  flutter: {
    "Flutter": ["flutter/flutter-intro"],
    "قابلیت‌ها و امکانات": [
      "flutter/flutter-advanced",
      "flutter/flutter-init",
      {
        type: 'category',
        label: 'گروهبندی کاربران',
        items: ["flutter/flutter-topic", "flutter/flutter-channel",],
      },
      "flutter/flutter-pusheid",
      "flutter/flutter-d2d",
      "flutter/flutter-listener",
      "flutter/flutter-disable",
      
      "flutter/flutter-fcm"
    ],
    "سوالات و مشکلات": ["flutter/flutter-errors", "flutter/flutter-faq"],
    "مستندات قدیمی": [
      {
        type:"link",
        label: "مستندات پوشه",
        href:"https://pushe.co/docs/flutter"
      }
    ]
  },

  unity: {
    "Unity": ["unity/unity-intro"],
    "قابلیت‌ها و امکانات": [
      "unity/unity-advanced",
      "unity/unity-init",
      "unity/unity-pusheid",
      "unity/unity-topic",
      "unity/unity-d2d",
      "unity/unity-disable",
      "unity/unity-channel",
    ],
    "سوالات و مشکلات": ["unity/unity-errors", "unity/unity-faq"],
    "مستندات قدیمی": [
      {
        type:"link",
        label: "مستندات پوشه",
        href:"https://pushe.co/docs/unity"
      }
    ]
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
    "React Native": ["react-native/rn-intro"],
    "قابلیت‌ها و امکانات": [
      "react-native/rn-advanced",
      "react-native/rn-init",
      "react-native/rn-pusheid",
      "react-native/rn-topic",
      "react-native/rn-d2d",
      "react-native/rn-listener",
      "react-native/rn-disable",
      "react-native/rn-channel",
      "react-native/rn-fcm"
    ],
    "سوالات و مشکلات": ["react-native/rn-errors", "react-native/rn-faq"],
    "مستندات قدیمی": [
      {
        type:"link",
        label: "مستندات پوشه",
        href:"https://pushe.co/docs/react-native"
      }
    ]
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
    ]
  },



  plusNative: {
    "Android Native" : ["plus/native/pnative-intro", "plus/native/pnative-adsetup"],
    "قابلیت‌ها": [
      "plus/native/pnative-features",
      "plus/native/pnative-reg",
      "plus/native/pnative-fcm",
    ],
    "سوالات و مشکلات": [
      "plus/native/pnative-errors",
      "plus/native/pnative-faq",
    ]
  },

  plusUnity: {
    "Unity" : ["plus/unity/punity-intro",],
    "قابلیت‌ها": [
      "plus/unity/punity-features",
      "plus/unity/punity-reg",
      {
        type:"category",
        label:"شناسایی و گروهبندی کاربر",
        items: [
          "plus/unity/punity-id", 
          "plus/unity/punity-topic",
          "plus/unity/punity-tag",
          "plus/unity/punity-channel"
        ]
      },
      {
        type: "category",
        label: "ارسال اعلان",
        items: [
          "plus/unity/punity-d2d",
          "plus/unity/punity-listener",
          "plus/unity/punity-disable", 
          "plus/unity/punity-sound",
        ]
      },
      {
        type: "category",
        label: "آنالیتیکس",
        items: [
          "plus/unity/punity-events",
        ]
      },
      {
        type: "category",
        label: "سوالات و مشکلات",
        items: [
          "plus/unity/punity-errors",
          "plus/unity/punity-faq",
        ]
      },
    ]
  }
};
