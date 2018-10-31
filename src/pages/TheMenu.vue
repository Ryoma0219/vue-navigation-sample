<template>
  <v-ons-page>
    <div class="page-wrap">
      <div class="menu-container">
        <div class="menu">
          <v-ons-icon
            class="menu-icon"
            :style="{ backgroundColor: (beforePage === 'Home') ? opendColor : '' }"
            icon="md-home"
            @click="goHome()"
          />
          <div>HOME</div>
        </div>
        <div class="menu">
          <v-ons-icon
            class="menu-icon"
            :style="{ backgroundColor: (beforePage === 'Carousel') ? opendColor : '' }"
            icon="fa-edit"
            @click="go('Carousel')"
          />
          <div>カルーセル</div>
        </div>
        <div class="menu">
          <v-ons-icon
            class="menu-icon"
            :style="{ backgroundColor: (beforePage == 'Page1') ? opendColor : '' }"
            icon="md-graduation-cap"
            @click="go('Page1')"
          />
          <div>page1</div>
        </div>
        <div class="menu">
          <v-ons-icon
            class="menu-icon"
            :style="{ backgroundColor: (beforePage == 'Page2') ? opendColor : '' }"
            icon="fa-comments"
            @click="go('Page2')"
          />
          <div>page2</div>
        </div>
        <div class="menu">
          <v-ons-icon
            class="menu-icon"
            :style="{ backgroundColor: (beforePage === 'Direct') ? opendColor : '' }"
            icon="fa-envelope"
            @click="hoshino('Direct')"
          />
          <div>page3</div>
        </div>
        <div class="menu">
          <v-ons-icon
            class="menu-icon"
            :style="{ backgroundColor: (beforePage === 'Setting') ? opendColor : '' }"
            icon="fa-cog"
            @click="hoshino()"
          />
          <div>page4</div>
        </div>
      </div>
      <div
        class="bottom-container"
        @click="closeMenu"
      >閉じる</div>
    </div>
  </v-ons-page>
</template>
<script>
import Home from './Home.vue';
import Page1 from './Page1.vue';
import Page2 from './Page2.vue';
import Carousel from './Carousel.vue';

const pages = {
  Home,
  Page2,
  Page1,
  Carousel,
};

export default {
  props: {
    pageStack: {
      type: Array,
      default() { return []; },
    },
    opened: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      opendColor: '#ffb100',
    };
  },
  computed: {
    beforePage() {
      return this.pageStack[this.pageStack.length - 2].extends.key;
    },
  },
  watch: {},
  mounted() {},
  methods: {
    closeMenu() {
      this.$emit('pop-page');
    },
    go(pageName) {
      // fromとtoが同一であれば何もしない
      if (pageName === this.beforePage) {
        return;
      }
      this.$emit('replace-page', {
        extends: pages[pageName],
        onsNavigatorOptions: {},
      });
    },
    goHome() {
      // fromとtoが同一であれば何もしない
      if (this.beforePage === 'Home') {
        return;
      }
      this.$emit('replace-page', {
        extends: Home,
        onsNavigatorOptions: {},
      });
    },
    hoshino() {
      this.$ons.notification.alert('ページは存在しない');
    },

  },
  key: 'Menu',
};
</script>
<style scoped>
.page-wrap {
  background-color: #007aff;
  height: 100%;
  width: 100%;
  color: #fff;
}
.close-icon {
  padding: ２vw 6vw;
  font-size: 36px;
}

.menu-icon {
  background-position: center;
  transition: background 0.8s;
  box-shadow:
  rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
  rgba(0, 0, 0, 0.12) 0px 1px 5px 0px,
  rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
  opacity: 1;
  overflow: hidden;
  padding: 24px;
  margin: 14px 0;
  font-size: 36px;
  border-radius: 50%;
  border: solid 1px;
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
.menu-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 4vw 12vw;
}
.menu {
  margin: 1vw 4vw;
  text-align: center;
}
.bottom-container {
  bottom: 0;
  text-align: center;
  width: 100%;
  position: absolute;
  padding: 2.5vh 0;
  font-size: calc(18px + 1vw);
  background-color: #000fdc;
  background-position: center;
  transition: background 0.8s;
  box-shadow:
  rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
  rgba(0, 0, 0, 0.12) 0px 1px 5px 0px,
  rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
  opacity: 1;
  overflow: hidden;
}
.bottom-container:hover {
  transition: all 0.25s linear 0s;
  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
}
.bottom-container:active {
  background-color: #b9e0ff;
  background-size: 100%;
  transition: background 0s;
}
</style>
