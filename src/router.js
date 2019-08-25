import Vue from 'vue'
import Router from 'vue-router'
import FieldIndex from './views/field/FieldIndex.vue'
import FieldCreate from './views/field/FieldCreate.vue'
import FieldEdit from './views/field/FieldEdit.vue'
import DomainIndex from './views/domain/DomainIndex.vue'
import AuthLogin from './views/auth/AuthLogin.vue'
import AuthRegister from './views/auth/AuthRegister'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: FieldIndex
        },
        //field
        {
            path: '/field/index',
            component: FieldIndex
        },
        {
            path: '/field/:label/domain/index/',
            component: DomainIndex
        },
        {
            path: '/field/edit/:label',
            component: FieldEdit
        },
        //domain
        {
            path: '/domain/index/:label',
            component: DomainIndex
        },
        {
            path: '/field/create',
            component: FieldCreate
        },
        //auth
        {
            path: '/auth/login',
            component: AuthLogin
        },
        {
            path: '/auth/register',
            component: AuthRegister
        }
    ]
})