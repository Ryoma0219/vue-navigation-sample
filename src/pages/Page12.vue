<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button modifier="material" />
      </div>
      <div class="center">{{ placeInfo.name }}</div>
      <div class="right" />
    </v-ons-toolbar>
    <div style="text-align:center">前の画面から値を受け取る</div>
  </v-ons-page>
</template>
<script>

export default {
  props: {
    pageStack: {
      type: Array,
      default() { return []; },
    },
    placeInfo: {
      type: Object,
      default() { return {}; },
    },
  },
  data() {
    return {
    };
  },
  key: 'Page12',
};
</script>
