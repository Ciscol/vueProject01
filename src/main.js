/* CSS */
import './css/base.css';

/* vue */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

/* mint-UI */
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
Vue.component(Header.name, Header);

/* MUI */
import './lib/mui/css/mui.css';
/* vm */
import app from './App.vue';
import router from './router';
const vm = new Vue({
  el: '#app',
  data() {
    return {
      msg: '123456'
    }
  },
  render: h => h(app),
  router
})