import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
import { Header } from 'mint-ui'

Vue.component(Header.name, Header);

export default {}