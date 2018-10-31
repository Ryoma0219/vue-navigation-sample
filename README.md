# vue-navigation-sample
App Routing Sample using Vue.js and Onsenui on Monaca

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
