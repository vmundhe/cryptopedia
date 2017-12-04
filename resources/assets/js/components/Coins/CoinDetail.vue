<template>
    <div class="container">
        <div class="tabs is-boxed">
            <ul class="coin-detail-tabs">
                <li>
                    <a @click="setActiveTabName('info')">Info</a>
                </li>
                <li>
                    <a @click="setActiveTabName('markets')">Market</a>
                </li>
            </ul>
        </div>

        <div v-if="displayContents('info')">
            <view-info :coin-info = "coinInfo"></view-info>
        </div>
        <div v-if="displayContents('markets')">
            <view-market :exchanges = "exchanges"></view-market>
        </div>
    </div>
</template>

<script type="text/javascript">
    import axios from 'axios'

    import ViewInfo from './ViewInfo.vue'
    import ViewMarket from './ViewMarket.vue'

    export default {
        components: {
            ViewInfo,
            ViewMarket
        },

        data() {
            return {
                activeTabName: null,
                coinInfo: '',
                exchanges: []
            };
        },

        created() {
            axios.get(`api/${this.$route.params.symbol}/${this.$route.params.id}`)
                .then(response => {
                this.coinInfo = response.data.additional_info
                this.exchanges = response.data.exchanges
            })
        },

        mounted() {
            this.activeTabName = 'info';
        },

        methods: {
            setActiveTabName(name) {
                this.activeTabName = name;

            },
            displayContents(name) {
                return this.activeTabName === name;
            }
        }
    }
</script>
