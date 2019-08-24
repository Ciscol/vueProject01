
/* vue */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import vueResource from 'vue-resource';
Vue.use(vueResource);
Vue.http.options.root = "http://www.liulongbin.top:3005";
Vue.http.options.emulateJSON = true;
/* mint-UI */
import 'mint-ui/lib/style.css';
import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
Vue.component(Header.name, Header); 
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
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
const vm = new Vue({
  el: '#app',
  data() {
    return {
    }
  },
  render: h => h(app),
  router
})

Vue.filter('dateFormat', (date,pattern='YYYY-MM-DD HH:mm:ss') => {
  return moment(date).format(pattern)
  
})