//ToDo: Import vue and name it Vue
import Vue from 'vue'
//ToDo: Import vue-router and name it VueRouter
import VueRouter from 'vue-router'
//ToDo: Import vue-resource and name it VueResource
import VueResource from 'vue-resource'

//ToDo: Import App.vue and name it App
import App from './App.vue'
//ToDo: Import routes.js and use the {} passing routes
import {routes} from './routes.js'
//ToDo: Import store/store.js and name it store
import store from './store/store.js'

Vue.config.productionTip = false

//ToDo Initialize VueRouter using Vue.use()
Vue.use(VueRouter)
//ToDo Initialize VueResource using Vue.use()
Vue.use(VueResource)

//ToDo: Set Equal to your Firebase Database URL
Vue.http.options.root = 'https://web2630-stocktrader-b8584.firebaseio.com/' 

    Vue.filter('currency', (value) => {
        //ToDo: Return value.toLocaleString(), Add '$' sign before value
        if(Number.isInteger(value)) {
            return '$' + value.toLocaleString()
        }
        else {
            return 'Error: ' + value
        }
    })

const router = new VueRouter({
    //ToDo: Set router mode to history
    mode: 'history',
    //ToDo: Pass routes constant imported from above
    routes
})

new Vue({
    //ToDo: Pass the router constant to vue application
    router,
    //ToDo: Pass store constant to vue application
    store,
    render: h => h(App),
}).$mount('#app')
