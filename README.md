# vue-navigation-sample
App Routing Sample using Vue.js and Onsenui on Monaca
OnsenUIのnavigator機能を使ったVueアプリのルーティング応用

### 目的
- UI検証
社内で作っているアプリのルーティング基盤をどうするのか検討中  
Navigatorを軸にして、どんな感じで応用できるのかを検証しました
- NavigationいいUIある？
右下のnaviを勝手にフラワーメニューと命名しました。
かなり気に入っています。

### ESlint
Airbnb

### Info
I built a UI for mobile.
So When viewing in the browser please look in the responsive design mode(developer mode)

### Building
```
npm install

/* Browser */
npm run dev

/* Building */
npm run build

/* cordova build */
cordova platform add ios
npm run build
cordova prepare

/* using monaca */
npm instal -g monaca
monaca init
monaca upload // upload to Monaca IDE
monaca debug  // using Monaca Debugger
monaca remote build // building for mobile
```
