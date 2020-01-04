
# Structure:

- docs
    - android-studio
    - ios
    - flutter
    - ...


# Naming files:

1. Do not use the platform name in the file name
2. File name is similiar to the url and use `-` between words
3. All letters are lower case 
4. File name should be expose the content in the first look (try to name carefully)

# Each File Meta tags:

```
id: intro
title: پوشه | راهنما ری‌اکت‌نیتیو | شناسه یکتا کاربران
sidebar_label: شناسه‌ی یکتا کاربران
hide_title: true
```

1. **id** should be the name that is in sidebar.js and as in Naming File section should be similar to the file name (this is the url hence choose it carefully)
2. In order to have a good SEO for **title** use following syntax: ```pushe name | platform title | doc topic ``` like the one above in the example code part. and also try to at most write 60 characters for title
3. **sidebar_label** is the name that appears in the sidebar of each doc, try to name it very carefully
4. use **hide_title** in every doc to prevent **title** to presents in the page and instead you should put **# title** in the beginning of every doc section as the title
5. As explained in previous (4) every page should have # (h1)
6. To have **sub contents** for each page use ## and ### in proper formats

# Some Notes:

1. For installable docs e.g. android-studio , the doc should be started with a qucik setup page and the url should be **intro**
2. For non install docs e.g. web api, the doc should be started with an intro page to describe the doc and the url should be **intro**