import Vue from 'vue'
import Router from 'vue-router'
import GenreIndex from './views/genre/GenreIndex.vue'
import FieldIndex from './views/field/FieldIndex.vue'
import FieldCreate from './views/field/FieldCreate.vue'
import FieldEdit from './views/field/FieldEdit.vue'
import DomainIndex from './views/domain/DomainIndex.vue'
import DomainCreate from './views/domain/DomainCreate.vue'
import DomainEdit from './views/domain/DomainEdit.vue'
import ProblemCreate from './views/problem/ProblemCreate.vue'
import ProblemEdit from './views/problem/ProblemEdit.vue'
import AuthLogin from './views/auth/AuthLogin.vue'
import AuthRegister from './views/auth/AuthRegister'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: GenreIndex
        },
        //field
        {
            path: '/field/index',
            component: FieldIndex
        },
        {
            path: '/field/create',
            component: FieldCreate
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
            path: '/domain/create',
            component: DomainCreate
        },
        {
            path: '/domain/edit/:id',
            component: DomainEdit
        },
        //problem
        {
            path: '/problem/create',
            component: ProblemCreate
        },
        {
            path: '/problem/edit/:id',
            component: ProblemEdit
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