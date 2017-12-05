<template>
    <div class="container">
        <div class="tabs is-boxed">
            <ul class="coin-detail-tabs">
                <li v-for="tab in tabs">
                    <a @click="activeTabName = tab.name">{{tab.displayName}}</a>
                </li>
            </ul>
        </div>

        <div v-if="displayContents('info')">
            <view-info :coin-info = "coinInfo"></view-info>
        </div>
        <div v-if="displayContents('markets')">
            <view-market :exchanges = "exchanges"></view-market>
        </div>
        <div v-if="displayContents('history')">
            <view-history :history = "history"></view-history>
        </div>
    </div>
</template>

<script type="text/javascript">
    import axios from 'axios'

    const ViewInfo = () => import(/* webpackChunkName: "view-info" */ './ViewInfo.vue');
    const ViewMarket = () => import(/* webpackChunkName: "view-market" */ './ViewMarket.vue');
    const ViewHistory = () => import(/* webpackChunkName: "view-history" */ './ViewHistory.vue');


    export default {
        components: {
            ViewInfo,
            ViewMarket,
            ViewHistory
        },

        data() {
            return {
                tabs: [
                    {
                        name: 'info',
                        displayName: 'Info'
                    },
                    {
                        name: 'markets',
                        displayName: 'Market'
                    },
                    {
                        name: 'history',
                        displayName: 'Historical Data'
                    }
                ],
                activeTabName: 'info',
                coinInfo: '',
                exchanges: [],
                history: []
            };
        },

        created() {
            axios.get(`api/${this.$route.params.symbol}/${this.$route.params.id}`)
                .then(response => {
                this.coinInfo = response.data.additional_info
                this.exchanges = response.data.exchanges
                this.history = response.data.history
            })
        },

        methods: {
            displayContents(name) {
                return this.activeTabName === name;
            }
        }
    }
</script>
