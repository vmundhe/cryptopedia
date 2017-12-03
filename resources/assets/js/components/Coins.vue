<template>
    <div class="container">
        <div>
            <input class="coin-search" v-model="search" type="text" placeholder="Search by name...">
            <span class="tag is-info is-rounded">Market Cap: ${{totalMarketCap}}</span>
        </div>

        <div class="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <td v-for="label in labels">
                        {{label}}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="coin in filteredCoins">
                    <td>{{coin.rank}}</td>
                    <td><img class="coin-img" :src="coin.logo" width="25px" height="25px"> {{coin.name}}</td>
                    <td>{{coin.symbol}}</td>
                    <td>${{coin.price_usd}}</td>
                    <td>${{coin.market_cap_usd}}</td>
                    <td :style="getColor(coin.percent_change_24h)">
                        {{coin.percent_change_24h}}%
                    </td>
                </tr>
            </tbody>
        </div>
    </div>
</template>

<script type="text/javascript">
    import axios from 'axios'

    export default {
        data() {
            return {
                search: '',
                labels: ['#', 'Name', 'Symbol', 'Price (USD)', 'Market Cap', 'Change(24h)'],
                coins: [],
                totalMarketCap: ''
            }
        },

        created() {
            axios.get('api')
                .then(response => {
                    this.coins = response.data.coins;
                    this.totalMarketCap = response.data.total_market_cap
            })
        },

        methods: {
            getColor: (num) => {
            return num > 0 ? "color:green;" : "color:red;";
            }
        },

        computed: {
            filteredCoins: function () {
                var self = this;
                return this.coins
                    .filter(function(coin)
                    {
                        return coin.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;
                    })
                    ;
            }
        }
    }
</script>
