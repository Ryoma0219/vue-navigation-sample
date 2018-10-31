<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-toolbar-button @click="goMenu()">
          <v-ons-icon icon="ion-navicon, material:md-menu" />
        </v-ons-toolbar-button>
      </div>
      <div class="center">page2</div>
      <div class="right" />
    </v-ons-toolbar>
    <v-ons-button
      modifier="outline"
      style="text-align:center;margin:20px 0 0 20px"
      @click="goDirect()"
    >
      PUSH
    </v-ons-button>
  </v-ons-page>
</template>
<script>
import Menu from './TheMenu.vue';
import Page22 from './Page22.vue';

export default {
  props: {
    pageStack: {
      type: Array,
      default() { return []; },
    },
  },
  data() {
    return {};
  },
  methods: {
    // 個人メッセージへの遷移
    goDirect() {
      this.$emit('push-page', {
        extends: Page22,
        onsNavigatorOptions: {},
      });
    },
    goMenu() {
      this.$emit('push-page', {
        extends: Menu,
        onsNavigatorOptions: {
          animation: 'lift',
          animationOptions: { duration: 0.5 },
        },
      });
    },
  },
  key: 'Page2',
};
</script>
