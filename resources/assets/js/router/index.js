/**
 * Created by vmundhe on 12/2/17.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const CoinIndex = () => import(/* webpackChunkName: "index" */ '../components/Coins/Index.vue');
const CoinInfo = () => import(/* webpackChunkName: "info" */ '../components/Coins/CoinDetail.vue');

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', name: 'index', component: CoinIndex},
        {path: '/:symbol/:id', name: 'info', component: CoinInfo}
    ]
})

export default router
