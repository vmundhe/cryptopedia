<template>
    <div class="container">
        <div class="table is-striped market-history-table">
            <thead>
            <tr>
                <th v-for="label in labels">
                    {{label}}
                </th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="(exchange, key) in exchanges">
                <td>{{key}}</td>
                <td>{{exchange.MARKET}}</td>
                <td>{{exchange.VOLUME24HOUR | currency}}</td>
                <td>{{exchange.PRICE | currency}}</td>
            </tr>
            </tbody>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: ['exchanges'],

        data() {
            return {
                labels: ['#', 'Source', 'Volume (24h)', 'Price'],
            }
        }
    }
</script>