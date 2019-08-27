import VueRouter from 'vue-router';

import HomeComponent from './components/tabbar/Home.vue';
import MemberComponent from './components/tabbar/Member.vue';
import ShopCartComponent from './components/tabbar/ShopCart.vue';
import SearchComponent from './components/tabbar/Search.vue';
import NewsListComponent from './components/news/NewsList.vue';
import NewsInfoComponent from './components/news/NewsInfo.vue';
import PhotoListComponent from './components/photos/PhotoList.vue';
import PhotoInfoComponent from './components/photos/PhotoInfo.vue';
import GoodsListComponent from './components/goods/GoodsList.vue';
import GoodsInfoComponent from './components/goods/GoodsInfo.vue';
import GoodsDescComponent from './components/goods/GoodsDesc.vue';
import GoodsCommentComponent from './components/goods/GoodsComment.vue';

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeComponent},
    { path: '/member', component: MemberComponent},
    { path: '/shopCart', component: ShopCartComponent},
    { path: '/search', component: SearchComponent },
    { path: '/home/newsList', component: NewsListComponent },
    { path: '/home/newsInfo/:id', component: NewsInfoComponent },
    { path: '/home/photoList', component: PhotoListComponent },
    { path: '/home/photoInfo/:id', component: PhotoInfoComponent },
    { path: '/home/goodsList', component: GoodsListComponent },
    { path: '/home/goodsInfo/:id', component: GoodsInfoComponent, name:'goodsInfo' },
    { path: '/home/goodsDesc/:id', component: GoodsDescComponent , name:'goodsDesc'},
    { path: '/home/goodsComment/:id', component: GoodsCommentComponent , name:'goodsComment'},
  ],
  linkActiveClass:' mui-active'
})

export default router;