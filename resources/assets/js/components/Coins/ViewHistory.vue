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
            <tr v-for="(data) in history">
                <td>{{data.time}}</td>
                <td>{{data.open | currency}}</td>
                <td>{{data.high | currency}}</td>
                <td>{{data.low | currency}}</td>
                <td>{{data.close | currency}}</td>
            </tr>
            </tbody>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: ['history'],

        data() {
            return {
                labels: ['Date', 'Open', 'High', 'Low', 'Close']
            }
        }
    }
</script>