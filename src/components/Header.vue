<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <!--ToDo: Create a router-link that goes to '/' root, add class navbar-brand and add Stock Trader text-->
                <router-link to="/" class="navbar-brand"> Stock Trader </router-link>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <!--ToDo: Create router-link that goes to '/portfolio' -->
                    <!--ToDo: set activeClass to "active", add tag attribute set to li, and add Portfolio text-->
                    <router-link to="/portfolio" activeClass="active" tag="li"> <a>Portfolio</a> </router-link>

                    <!--ToDo: Create router-link that goes to '/stocks' -->
                    <!--ToDo: set activeClass to "active", add tag attribute set to li, and add Stocks text-->
                    <router-link to="/stocks" activeClass="active" tag="li"> <a>Stocks</a> </router-link>
                </ul>
                <strong class="navbar-text navbar-right">Funds:
                    <!--ToDo: Call funds computed function and pipe the currency filter that is created in main.js-->
                    {{funds | currency}}
                </strong>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <!--ToDo: Add click event to <a> that calls endDay method-->
                        <a href="#" @click="endDay">End Day</a>
                    </li>

                    <!--ToDo: Inside <li> Bind to class using :class that passes an object {} called open and set it to isDropdownOpen-->
                    <!--ToDo: Add click event that toggles isDropdownOpen to true and false-->
                    <li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
                        <a
                            href="#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <!--ToDo: Add click event that calls the saveData method-->
                            <li><a href="#" @click="SaveData">Save Data</a></li>
                            <!--ToDo: Add click event that calls the loadData method-->
                            <li><a href="#" @click="loadData">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
//ToDo: Import mapActions from vuex
import {mapActions} from 'vuex'

export default {
    data () {
        return {
            //ToDo: Create data object called isDropdownOpen and set it to false
            isDropdownOpen: false
        }
    },
    computed: {
        //ToDo: Create a computed function called funds
        funds() {
            //ToDo: Have funds() return this.$store.getters.funds
            return this.$store.getters.funds
        }
    },
    methods: {
        //ToDo: Create ...mapActions method
        ...mapActions({
            //ToDo: Call randomizeStocks: 'randomizeStocks'
            //ToDo: Call fetchData: 'loadData'
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData'
        }),

        //ToDo: Create endDay method
        endDay() {
            //ToDo: Call randomizeStocks()
            this.randomizeStocks()
        },

        //ToDo: Create SaveData method
        SaveData() {
            //ToDo: Create const called data that holds an object
                //ToDo: Set funds: to the $store getters funds
                //ToDo: Set stockPortfolio: to the $store getters stockPortfolio
                //ToDo: Set stocks: to the $store getters stocks
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
            }
            //ToDo: Outside the data object use $http, using .put pass 'data.json' and the data object
            this.$http.post('data.json', data)
        },

        //ToDo: Create loadData method
        loadData() {
            //ToDo: Call fetchData()
            this.fetchData()
        }
    }
}
</script>