<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-toolbar-button @click="goMenu()">
          <v-ons-icon icon="ion-navicon, material:md-menu" />
        </v-ons-toolbar-button>
      </div>
      <div class="center">カルーセル</div>
      <div class="right" />
    </v-ons-toolbar>
    <div class="top_body">
      <div class="transparent">
        <ul class="icon-area">
          <li
            v-for="(item, dotIndex) in items"
            :key="dotIndex"
            :style="{ color: (carouselIndex === dotIndex) ? '#00a' : '' }"
            @click="carouselIndex = dotIndex"
          >
            <v-ons-icon
              :icon="item.icon"
              class="menu-icon"
            />
          </li>
        </ul>
      </div>
    </div>
    <nav-menu
      :page-stack="pageStack"
      @go="go($event)"
    />
    <v-ons-carousel
      fullscreen
      swipeable
      auto-scroll
      overscrollable
      :index.sync="carouselIndex"
    >
      <v-ons-carousel-item
        v-for="(item, key) in items"
        :key="key"
      >
        <schedule v-if="key === 0" />
        <profile v-if="key === 1" />
        <twitter v-if="key === 2" />
        <my-photo v-if="key === 3" />
      </v-ons-carousel-item>
    </v-ons-carousel>
  </v-ons-page>
</template>
<script>
import MyPhoto from '../components/mypage-partials/MyPhoto.vue';
import Profile from '../components/mypage-partials/Profile.vue';
import Schedule from '../components/mypage-partials/Schedule.vue';
import Twitter from '../components/mypage-partials/Twitter.vue';
import Menu from './TheMenu.vue';
import NavMenu from '../components/NavMenu.vue';
import Page12 from './Page12.vue';
import Page1 from './Page1.vue';
import Page2 from './Page2.vue';


const page = {
  Page12,
  Page1,
  Page2,
  Menu,
};
export default {
  components: {
    MyPhoto, Profile, Twitter, Schedule, NavMenu,
  },
  props: {
    pageStack: {
      type: Array,
      default() { return []; },
    },
  },
  data() {
    return {
      carouselIndex: 0,
      items: [
        {
          icon: 'fa-calendar',
        },
        {
          icon: 'fa-user-circle',
        },
        {
          icon: 'fa-twitter',
        },
        {
          icon: 'fa-camera',
        },
      ],
      dots: {
        textAlign: 'center',
        fontSize: '30px',
        color: '#fff',
        position: 'absolute',
        bottom: '40px',
        left: 0,
        right: 0,
      },
    };
  },
  methods: {
    go(pageName) {
      this.$emit('push-page', {
        extends: page[pageName],
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
    navOpen() {
      return !this.navIsOpen;
    },
  },
  key: 'Carousel',
};
</script>
<style scoped>

.top_body{
  position: sticky;
  height: 32%;
  background-color: rgb(220, 30, 130);
}
.transparent{
  display: flex;
  position: relative;
  background-color:rgba(255,255,255,0.8);
  z-index:19;
  width: 100%;
  height: 30%;
  bottom: 0px;
  position: absolute;
  line-height: 1%;
  font-size: 60%;
  z-index:5;
  width: 100%;
}
.icon-area {
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  color: #ffffff;
  height: auto;
  /* top: 10px; */
  list-style: none;
  font-size: 4em;
}

.menu-icon {
  background-position: center;
  transition: background 0.8s;
  box-shadow:
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px,
    rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
  opacity: 1;
}
.menu-icon:hover {
  transition: all 0.25s linear 0s;
  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
}
.menu-icon:active {
  background-color: #6eb9f7;
  background-size: 100%;
  transition: background 0s;
}
</style>
