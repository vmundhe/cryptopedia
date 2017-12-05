<template>
    <div class="container">
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <div class="table is-striped is-fullwidth">
                            <thead>
                                <tr>
                                    <td v-for="label in labels">
                                        {{label}}
                                    </td>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import axios from 'axios'

    export default {
        props: ['exchanges'],

        data() {
            return {
                labels: ['#', 'Source', 'Volume (24h)', 'Price'],
            }
        }
    }
</script>