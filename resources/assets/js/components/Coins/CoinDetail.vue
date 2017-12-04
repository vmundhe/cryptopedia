<template>
    <div class="container">
        <div class="tabs is-boxed">
            <ul>
                <li class="is-active">
                    <a @click="setActiveTabName('info')">Info</a>
                </li>
                <li>
                    <a @click="setActiveTabName('markets')">Market</a>
                </li>
            </ul>
        </div>

        <div v-if="displayContents('info')">
            <view-info></view-info>
        </div>
        <div v-if="displayContents('markets')">
            <view-market></view-market>
        </div>
    </div>
</template>

<script type="text/javascript">
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
            };
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
