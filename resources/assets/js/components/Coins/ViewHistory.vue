<template>
    <div class="container">
        <div class="table is-striped is-fullwidth">
            <thead>
            <tr>
                <td v-for="label in labels">
                    {{label}}
                </td>
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
                labels: ['Data', 'Open', 'High', 'Low', 'Close']
            }
        }
    }
</script>