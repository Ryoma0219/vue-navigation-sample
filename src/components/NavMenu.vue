<template>
  <div
    class="nav"
    :class="{ active: isOpen }"
  >
    <ons-icon
      class="nav-item nav-count-1"
      :style="{ backgroundColor: (beforePage === 'Home') ? opendColor : '' }"
      icon="md-home"
      @click="go('Home')"
    />
    <ons-icon
      class="nav-item nav-count-2"
      :style="{ backgroundColor: (beforePage === 'Carousel') ? opendColor : '' }"
      icon="fa-edit"
      @click="go('Carousel')"
    />
    <ons-icon
      class="nav-item nav-count-3"
      :style="{ backgroundColor: (beforePage === 'Page1') ? opendColor : '' }"
      icon="md-graduation-cap"
      @click="go('Page1')"
    />
    <ons-icon
      class="nav-item nav-count-4"
      :style="{ backgroundColor: (beforePage === 'Page2') ? opendColor : '' }"
      icon="fa-comments"
      @click="go('Page2')"
    />
    <ons-icon
      class="nav-item nav-count-5"
      icon="fa-cog"
      @click="hoshino()"
    />
    <a
      href="#toggle"
      class="mask"
    ><ons-icon
      icon="md-apps"
      @click="isOpen = !isOpen"
    /></a>
  </div>
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
    return {
      isOpen: false,
      opendColor: '#ffb100',
    };
  },
  computed: {
    beforePage() {
      return this.pageStack[this.pageStack.length - 1].extends.key;
    },
  },
  methods: {
    navOpen() {
      return !this.isOpen;
    },
    go(pageName) {
      // fromとtoが同一であれば何もしない
      if (pageName === this.beforePage) {
        this.isOpen = false;
        return;
      }
      this.isOpen = false;
      this.$emit('go', pageName);
    },
    hoshino() {
      this.$ons.notification.alert('ページが存在しない');
    },
  },

};
</script>
<style scoped>
.nav {
  right: 20px;
  z-index: 20;
  width: 60px;
  bottom: 20px;
  height: 60px;
  display: block;
  position: absolute;
  line-height: 60px;
  border-radius: 60%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .75)
}

.mask {
  z-index: 21;
  color: #fff;
  width: inherit;
  height: inherit;
  cursor: pointer;
  font-size: 28px;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  background: #f23363;
  transition: all .1s ease-in-out 0s
}

.nav.active .mask {
  background: #0e00aa;
  transform: rotate(-135deg)
}

.nav:after {
  top: 0;
  left: 0;
  content: '';
  width: inherit;
  height: inherit;
  border-radius: 50%;
  position: absolute;
  background: #2979ff!important;
  transition: all .1s ease-in-out 0s
}

.nav.active:after {
  top: -145px;
  left: -145px;
  width: 350px;
  height: 350px
}

.nav-item {
  top: 0;
  left: 0;
  z-index: 19;
  width: 56px;
  height: 56px;
  color: #fff;
  font-size: 36px;
  transform: none;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  transition: all .3s cubic-bezier(.68, 1.55, .265, 1);
  border-radius: 50%;
  background-position: center;
  opacity: 1;
  overflow: hidden;
}
.nav-item:hover {
  transition: all 0.25s linear 0s;
  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
}
.nav-item:active {
  background-color: #6eb9f7;
  background-size: 100%;
  transition: background 0s;
}
.nav.active .nav-count-1 {
  transform: translate(10px, -132px)
}

.nav.active .nav-count-2 {
  transform: translate(-46px, -118px)
}

.nav.active .nav-count-3 {
  transform: translate(-92px, -86px)
}

.nav.active .nav-count-4 {
  transform: translate(-118px, -42px)
}

.nav.active .nav-count-5 {
  transform: translate(-132px, 10px)
}

</style>
