<template>
    <div>
        <!--ToDo: Load app-stock component-->
        <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
        <!--ToDo: Loop through stock in stocks using v-for-->
        <!--ToDo: Bind to stock using : and pass stock from the v-for-->
    </div>
</template>

<script>
//ToDo: Import Stock from ./Stock.vue
import Stock from './Stock.vue'

export default {
    //ToDo: Initialize Stock component and name it appStock
    components: {
        appStock: Stock
    },

    computed: {
        //ToDo: Create stocks computer method
        stocks() {
            // ToDo: Return $store.getters.stocks
            return this.$store.getters.stocks
        }
    }
}
</script>