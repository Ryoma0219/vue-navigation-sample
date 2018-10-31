<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-toolbar-button @click="goMenu()">
          <v-ons-icon icon="ion-navicon, material:md-menu" />
        </v-ons-toolbar-button>
      </div>
      <div class="center">page1</div>
      <div class="right" />
    </v-ons-toolbar>
    <v-ons-list>
      <v-ons-list-item
        v-for="(item,index) in List"
        :key="index"
        tappable
        modifier="longdivider chevron"
        :style="{backgroundColor: item.color}"
        class="office-item"
        @click="goPage12(item)"
      >
        {{ item.name }}
      </v-ons-list-item>
    </v-ons-list>
    <nav-menu
      :page-stack="pageStack"
      @go="go($event)"
    />
  </v-ons-page>
</template>
<script>
import Menu from './TheMenu.vue';
import NavMenu from '../components/NavMenu.vue';
import Page12 from './Page12.vue';
import Page2 from './Page2.vue';
import Carousel from './Carousel.vue';

const page = {
  Page12,
  Carousel,
  Page2,
  Menu,
};

export default {
  components: { NavMenu },
  props: {
    pageStack: {
      type: Array,
      default() { return []; },
    },
  },
  data() {
    return {
      List: [
        {
          name: '1',
          color: '#00d88f',
        },
        {
          name: '2',
          color: '#0054ff',
        },
        {
          name: '3',
          color: '#ffaa00',
        },
        {
          name: '4',
          color: '#ff0055',
        },
      ],
    };
  },
  methods: {
    go(pageName) {
      this.$emit('push-page', {
        extends: page[pageName],
        onsNavigatorOptions: {},
      });
    },
    goPage12(item) {
      this.$emit('push-Page12', {
        item,
        extends: Page12,
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
  key: 'Page1',
};
</script>
<style scoped>
ons-list-item {
  color: #fff;
  height: 13vh;
  font-size: 18px;
  font-family: monospace;
}
.list-item--longdivider {
  background-image: -webkit-gradient(linear,left bottom,left top,from(#f0f0f0),to(#f0f0f0));
}
.list-item--chevron:before, .list-item__expand-chevron {
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  height: 10px;
  width: 10px;
}
</style>
