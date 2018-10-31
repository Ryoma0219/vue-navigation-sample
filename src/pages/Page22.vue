<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button modifier="material" />
      </div>
      <div class="center">ここは戻る</div>
    </v-ons-toolbar>
  </v-ons-page>
</template>

<script>

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
  created() {
    this.$ons.notification.alert('ようこそ');
  },
  key: 'Page22',
};
</script>
<style scoped>

</style>
