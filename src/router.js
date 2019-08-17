import Vue from 'vue'
import Router from 'vue-router'
import Root from './views/Root.vue'
import Field from './views/Field.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    {
        path: '/',
        name: 'root',
        component: Root
    },
    {
        path: '/field/:fieldname',
        component: Field
    }
]
})