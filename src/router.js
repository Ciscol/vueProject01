import VueRouter from 'vue-router';

import HomeComponent from './components/tabbar/Home.vue';
import MemberComponent from './components/tabbar/Member.vue';
import ShopCartComponent from './components/tabbar/ShopCart.vue';
import SearchComponent from './components/tabbar/Search.vue';
import NewsListComponent from './components/news/NewsList.vue';
import NewsInfoComponent from './components/news/NewsInfo.vue';
import PhotoInfoComponent from './components/photos/PhotoList.vue';

const router = new VueRouter({
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/home', component: HomeComponent},
    { path: '/member', component: MemberComponent},
    { path: '/shopCart', component: ShopCartComponent},
    { path: '/search', component: SearchComponent },
    { path: '/home/newsList', component: NewsListComponent },
    { path: '/home/newsInfo/:id', component: NewsInfoComponent },
    { path: '/home/photoList', component: PhotoInfoComponent },
  ],
  linkActiveClass:' mui-active'
})

export default router;