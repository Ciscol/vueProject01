
/* vue */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import vueResource from 'vue-resource';
Vue.use(vueResource);
Vue.http.options.root = "http://www.liulongbin.top:3005";
Vue.http.options.emulateJSON = true;
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
import Vuex from 'vuex';
Vue.use(Vuex);

/* mint-UI */
import 'mint-ui/lib/style.css';
import { Header, Swipe, SwipeItem, Button, Switch, Lazyload } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);
Vue.use(Lazyload);

/* MUI */
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';

/* CSS */
import './css/base.css';

/* vm */
import app from './App.vue';
import router from './router';
import moment from 'moment';

const store = new Vuex.Store({
  state: {
    cart: JSON.parse(localStorage.getItem('cart') || '[]')
  },
  mutations: {
    addToCart(state, goods) {
      var ifHas = state.cart.some(item => {
        if (item.id === goods.id) {
          item.count += goods.count;
          return true;
        }
      })
      if (!ifHas) {
        state.cart.push(goods);
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
  getters: {
    shoppingTotal(state) {
      var sum = 0;
      state.cart.forEach(item => {
        sum += item.count;
      })
      return sum;
    }
  }
})


const vm = new Vue({
  el: '#app',
  data() {
    return {
    }
  },
  render: h => h(app),
  router,
  store
})

Vue.filter('dateFormat', (date, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(date).format(pattern)

})