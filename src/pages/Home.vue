<template>
  <v-ons-page>
    <TheToolbar
      :title="'Vue * OnsenUIでルーティング'"
      @open-menu="goMenu($event)"
    />
    <div class="main-area">
      <v-ons-row vertical-align="center">
        <v-ons-col width="50%">
          <v-ons-card
            class="zaiseki"
            @click="go('Page1')"
          >
            <div style="text-align: center">
              <v-ons-icon
                icon="fa-graduation-cap"
                class="menu-icon"
              />
            </div>
            page1
          </v-ons-card>
        </v-ons-col>
        <v-ons-col width="50%">
          <v-ons-card
            class="chat"
            @click="go('Page2')"
          >
            <div style="text-align: center">
              <v-ons-icon
                icon="fa-comments"
                class="menu-icon"
              />
            </div>
            page2
          </v-ons-card>
        </v-ons-col>
      </v-ons-row>
      <v-ons-row vertical-align="Direct">
        <v-ons-col width="50%">
          <v-ons-card
            class="direct"
            @click="hoshino('Direct')"
          >
            <div style="text-align: center">
              <v-ons-icon
                icon="fa-amazon"
                class="menu-icon"
              />
            </div>
            page3
          </v-ons-card>
        </v-ons-col>
        <v-ons-col width="50%">
          <v-ons-card
            class="my-page"
            @click="go('Carousel')"
          >
            <div style="text-align: center">
              <v-ons-icon
                icon="fa-home"
                class="menu-icon"
              />
            </div>
            page4
          </v-ons-card>
        </v-ons-col>
      </v-ons-row>
    </div>
    <nav-menu
      :page-stack="pageStack"
      @go="go($event)"
    />
  </v-ons-page>
</template>
<script>
import TheToolbar from '../components/TheToolbar.vue';
import Page1 from './Page1.vue';
import Page2 from './Page2.vue';
import Carousel from './Carousel.vue';
import Menu from './TheMenu.vue';
import NavMenu from '../components/NavMenu.vue';

const page = {
  Page1,
  Carousel,
  Page2,
  Menu,
};
export default {
  components: { TheToolbar, NavMenu },
  props: {
    pageStack: {
      type: Array,
      default() { return []; },
    },
  },
  data() {
    return {
      user: {},
      informations: {},
      date: [],
      mySchedules: [
        {
          startdate: '20181029',
          starttime: '1000',
          endtime: '1100',
          category: '会議',
          title: '[302] ラジオ体操第2',
          placename: '302会議室',
        },
        {
          startdate: '20181029',
          starttime: '1100',
          endtime: '1200',
          category: '会議',
          title: 'ブランチ',
          placename: '302会議室',
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
    goMenu() {
      this.$emit('push-page', {
        extends: Menu,
        onsNavigatorOptions: {
          animation: 'lift',
          animationOptions: { duration: 0.5 },
        },
      });
    },
    hoshino() {
      this.$ons.notification.alert('そんなページはない');
    },
  },
  key: 'Home',

};
</script>
<style scoped>

.page__content {
  overflow: hidden!important;
}
.main-area {
  text-align: center;
}
ons-card {
  background-position: center;
  text-align: center;
  color: #fff;
  transition: background 0.8s;
  box-shadow:
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px,
    rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
  opacity: 1;
  overflow: hidden;
  margin: 4px;
}
ons-card:hover {
  transition: all 0.25s linear 0s;
  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/150000%;
}
ons-card:active {
  background-color: #b9e0ff;
  background-size: 100%;
  transition: background 0s;
}

.zaiseki {
  background: #9CECFB;
}
.chat {
  background: #fc4a1a;
}
.direct {
  background: #ec008c;
  background: -webkit-linear-gradient(to right, #fc6767, #ec008c);
  background: linear-gradient(to right, #fc6767, #ec008c);
}
.my-page {
  background: #00F260;
}

.menu-icon {
  font-size: 60px;
}

</style>
