<template>
  <v-ons-page>
    <div class="login-area">
      <div>Vue * OnsenUIでSPAの画面遷移の練習</div>
      <br>
      <v-ons-button @click="login()">進む</v-ons-button>
    </div>
  </v-ons-page>
</template>

<script>
import Home from './Home.vue';

export default {
  props: {
    pageStack: {
      type: Array,
      default() { return []; },
    },
  },
  data() {
    return {
      id: null,
      password: '',
    };
  },
  methods: {
    login() {
      this.$emit('replace-page', {
        extends: Home,
        onsNavigatorOptions: {},
      });
    },
  },
  key: 'Login',
};
</script>
<style scoped>

.page {
  background-color: aqua;
}

.app-input {
  width: 70%;
  height: 42px;
  padding: 0 0 0 8px;
  background-image: none;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  -webkit-appearance: none;
  line-height: normal;
}
.text-input {
  height: 42px!important;
  font-size: 16px;
  background-color: #fff;
  border: solid 1px #a0a0a0;
}
v-ons-icon {
  color:#999999;
  size: 28px;
}
v-ons-button {
  background-color:#3f5575;
}

input .text-input {
  height: 100%!important;
}

.login-area {
  text-align: center;
  height: 100%;
  padding-top:60px;
  box-sizing: border-box;
}

.input-area {
  line-height: 36px;
  margin-bottom: 20px;
  height: 40px;
}
</style>
