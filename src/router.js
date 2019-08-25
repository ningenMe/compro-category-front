import Vue from 'vue'
import Router from 'vue-router'
import FieldIndex from './views/field/FieldIndex.vue'
import FieldCreate from './views/field/FieldCreate.vue'
import DomainIndex from './views/domain/DomainIndex.vue'
import AuthLogin from './views/auth/AuthLogin.vue'
import Tmp from './views/Tmp.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: FieldIndex
        },
        {
            path: '/field/index',
            component: FieldIndex
        },
        {
            path: '/field/:label/domain/index/',
            component: DomainIndex
        },
        {
            path: '/domain/index/:label',
            component: DomainIndex
        },
        {
            path: '/field/create',
            component: FieldCreate
        },
        {
            path: '/auth/login',
            component: AuthLogin
        }
    ]
})