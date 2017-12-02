/**
 * Created by vmundhe on 12/2/17.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Coins from '../components/Coins.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', component: Coins}
    ]
})

export default router
