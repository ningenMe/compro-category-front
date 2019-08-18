import Vue from 'vue'
import Router from 'vue-router'
import Root from './views/Root.vue'
import Field from './views/Field.vue'
import Tmp from './views/Tmp.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'root',
            component: Root
        },
        {
            path: '/field/:label',
            component: Field
        },
        {
            path: '/tmp',
            component: Tmp
        }
    ]
})