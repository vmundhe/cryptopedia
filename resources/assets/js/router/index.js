/**
 * Created by vmundhe on 12/2/17.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import CoinIndex from '../components/Coins/Index.vue'
import CoinInfo from '../components/Coins/CoinDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', component: CoinIndex},
        {path: '/:symbol/:id', component: CoinInfo}
    ]
})

export default router
