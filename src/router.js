import VueRouter from 'vue-router';

import HomeComponent from './components/tabbar/Home.vue';
import MemberComponent from './components/tabbar/Member.vue';
import ShopCartComponent from './components/tabbar/ShopCart.vue';
import SearchComponent from './components/tabbar/Search.vue';

const router = new VueRouter({
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/home', component: HomeComponent},
    { path: '/member', component: MemberComponent},
    { path: '/shopCart', component: ShopCartComponent},
    { path: '/search', component: SearchComponent},
  ],
  linkActiveClass:' mui-active'
})

export default router;