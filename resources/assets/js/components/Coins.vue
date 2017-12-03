<template>
    <div class="table is-striped is-fullwidth">
        <thead>
            <tr>
                <td v-for="label in labels">
                    {{label}}
                </td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="coin in coins">
                <td>{{coin.rank}}</td>
                <td><img class="coin-img" :src="coin.logo" width="25px" height="25px"> {{coin.name}}</td>
                <td>{{coin.symbol}}</td>
                <td>${{coin.price_usd}}</td>
                <td>{{coin.market_cap_usd}}</td>
                <td>{{coin.percent_change_24h}}%</td>
            </tr>
        </tbody>
    </div>
</template>

<script type="text/javascript">
    import axios from 'axios'

    export default {
        data() {
            return {
                labels: ['#', 'Name', 'Symbol', 'Price (USD)', 'Market Cap (USD)', 'Change(24h)'],
                coins: []
            }
        },

        created() {
            axios.get('api')
                .then(response => {
                    this.coins = response.data.coins
            })
        }
    }
</script>
