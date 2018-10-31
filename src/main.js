import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

import 'onsenui';
import 'jquery';

import App from './App.vue';
// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

Vue.use(VueOnsen);

const app = new Vue({
  el: '#app',
  components: { App },
  template: '<app></app>',
});

app.$mount();
