<template>
    <div class="container">
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile is-parent">
                    <article class="tile is-child notification">
                        <div class="content">
                            <nav class="navbar coin-info-navbar" role="navigation" aria-label="main navigation">
                                <div class="navbar-menu is-active">
                                    <div class="navbar-start">
                                        <a v-for="tab in tabs" class="navbar-item" href="#" @click="setCardContent(tab.name)">{{tab.name}}</a>
                                    </div>
                                </div>
                            </nav>

                            <div class="card-content" v-for="tab in tabs"  v-if="displayContents(tab.name)">
                                {{cardData}}
                            </div>

                        </div>
                    </article>
                </div>
            </div>

            <div class="sidebar tile is-child is-vertical is-4">
                <article class="tile is-child notification coin-info">
                    <p class="title sidebar-header"><img class="coin-img" :src="`https://www.cryptocompare.com${coinInfo.ImageUrl}`" width="35px" height="35px"> {{coinInfo.H1Text}}</p>
                    <div class="content">
                        <div class="table coin-info-table">
                            <tbody>
                            <tr>
                                <td>Total Supply:</td>
                                <td>{{coinInfo.TotalCoinSupply}}</td>
                            </tr>
                            <tr>
                                <td>Algorithm:</td>
                                <td>{{coinInfo.Algorithm}}</td>
                            </tr>
                            <tr>
                                <td>Proof Type:</td>
                                <td>{{coinInfo.ProofType}}</td>
                            </tr>
                            <tr>
                                <td>Start Date:</td>
                                <td>{{coinInfo.StartDate}}</td>
                            </tr>
                            <tr>
                                <td>Twitter:</td>
                                <td>{{coinInfo.Twitter}}</td>
                            </tr>
                            <tr>
                                <td>Website:</td>
                                <td><a :href="`https:/${coinInfo.website}`" target="_blank">{{coinInfo.website}}</a></td>
                            </tr>
                            </tbody>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import axios from 'axios'

    export default {
        data() {
            return {
                coinInfo: '',
                activeTabName: null,
                cardData: null,
                tabs: [
                    {
                        name: 'Description',
                        active: true
                    },
                    {
                        name: 'Features',
                        active: false
                    },
                    {
                        name: 'Technology',
                        active: false
                    }
                ]
            }
        },

        created() {
            axios.get(`api/${this.$route.params.symbol}/${this.$route.params.id}`)
                .then(response => {
                this.coinInfo = response.data.additional_info
            })
        },

        mounted() {
            this.setCardContent('Description');
        },

        methods: {
            setCardContent(name) {
                this.activeTabName = name;
                this.cardData = $(".card-content").html(this.coinInfo[this.activeTabName]);
            },
            displayContents(name) {
                return this.activeTabName === name;
            }
        }
    }
</script>