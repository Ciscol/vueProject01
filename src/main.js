
/* vue */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import vueResource from 'vue-resource';
Vue.use(vueResource);

/* mint-UI */
import 'mint-ui/lib/style.css'
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header); 
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

/* MUI */
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';

/* CSS */
import './css/base.css';

/* vm */
import app from './App.vue';
import router from './router';

const vm = new Vue({
  el: '#app',
  data() {
    return {
    }
  },
  render: h => h(app),
  router
})