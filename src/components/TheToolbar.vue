<template id="toolbar">
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="openMenu()">
        <v-ons-icon icon="ion-navicon, material:md-menu" />
      </v-ons-toolbar-button>
    </div>
    <div class="center">{{ title }}</div>
    <div class="right" />
  </v-ons-toolbar>
</template>

<script>

export default {
  name: 'TheToolbar',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    openMenu() {
      this.$emit('open-menu', 'Menu');
    },
  },
};
</script>
<style scoped>
.toolbar {
  padding-top: 0px !important;
}
.toolbar__title {
  text-align: center !important;
}
.toolbar__center {
  text-align: center;
  font-size: 20px !important;
  width: 92%;

}
.toolbar__left {
  max-width: 8% !important;

}

.toolbar__right {
  width: 8% !important;
}
.toolbar__right:empty {
  width: 8% !important;
}
</style>
