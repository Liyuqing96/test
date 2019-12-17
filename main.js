import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/router'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: "hash",
    routes: routes
})

new Vue({
    router,
}).$mount('#app')
