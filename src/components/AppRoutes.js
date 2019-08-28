import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter ({
    mode: 'history', // HTML 5 API
    routes: [
        {
            path: '/Game',
            component: require ('../components/Plateau.vue').default,
            name: 'Play'
            // props: true
        },
        // {
        //     path: '/Carte',
        //     component: require ('../components/SuppliersMap.vue').default,
        //     name: 'Carte'
        // },
        {
            path: '/',
            component: require ('../components/Navigation.vue').default,
            name: 'Navigation'
        },
        {
            path: '*',
            redirect: '/'
        },
    ]
})

export default router