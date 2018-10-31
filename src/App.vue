<template>
  <v-ons-navigator
    swipeable
    :page-stack="pageStack"
    :options="{
      animation: 'slide',
      animationOptions: {duration: 0.2, timing: 'ease-in'}
    }"
  >
    <component
      :is="page"
      v-for="page in pageStack"
      :key="page.key"
      :page-stack="pageStack"
      :place-info="placeInfo"
      @push-page="pushPage($event)"
      @pop-page="popPage()"
      @replace-page="replacePage($event)"
      @push-Page12="pushPage12($event)"
    />
  </v-ons-navigator>
</template>

<script>
import Login from './pages/Login.vue';

export default {
  data() {
    return {
      pageStack: [],
      openSide: false,
      placeInfo: {},
    };
  },
  created() {
    this.pageStack.push(Login);
  },
  methods: {
    // 次の画面への遷移
    pushPage(page) {
      this.pageStack.push(page);
    },
    // 前の画面へ戻る
    popPage() {
      this.pageStack.pop();
    },
    // pagestackのリセット
    replacePage(page) {
      this.pageStack = [];
      this.pageStack.push(page);
    },
    // 在籍への遷移時は、拠点の絞り込みのために拠点コードを引き渡す
    pushPage12(obj) {
      this.placeInfo = obj.item;
      this.pageStack.push(obj);
    },
  },
};
</script>
<style>
html,
body {
  height: 100%;
  margin: 0;
  font-size: 16px;
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', Meiryo,
    メイリオ, Osaka, 'MS PGothic', arial, helvetica, sans-serif !important;
}
.toolbar+.page__background+.page__content {
  overflow: hidden;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #fafafa;
  font-size: 100%;
  font-weight: normal;
  font-style: normal;
  overflow: hidden;
}

.page[status-bar-fill] > .page__content {
  top: 0px !important;
}

.toolbar {
  padding-top: 0px !important;
  height: 8vh!important;
  display: flex!important;
  align-items: center!important;
}
.toolbar__title {
  text-align: center !important;
}
.toolbar__center {
  text-align: center;
  font-size: 20px !important;
  width: 86%!important;

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

.toolbar + .page__background + .page__content {
  top: 8vh !important;
}

.toolbar + .page__background {
  top: 8vh !important;
}
</style>
