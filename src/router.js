import Vue from 'vue'
import Router from 'vue-router'
import GenreIndex from './views/genre/GenreIndex.vue'
import GenreCreate from './views/genre/GenreCreate.vue'
import GenreEdit from './views/genre/GenreEdit.vue'
import GenreDetail from './views/genre/GenreDetail.vue'
import TopicIndex from './views/topic/TopicIndex.vue'
import TopicDetail from './views/topic/TopicDetail.vue'
import TopicCreate from './views/topic/TopicCreate.vue'
import TaskIndex from './views/task/TaskIndex.vue'
import TaskDetail from './views/task/TaskDetail.vue'


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
    routes: [
        //top
        {
            path: '/',
            component: GenreIndex
        },
        //genre
        {
            path: '/genres',
            component: GenreIndex
        },
        {
            path: '/genres/create',
            component: GenreCreate
        },
        {
            path: '/genres/:label/edit',
            component: GenreEdit
        },
        {
            path: '/genres/:label/topics',
            component: GenreDetail
        },
        //topic
        {
            path: '/topics',
            component: TopicIndex
        },
        {
            path: '/topics/create',
            component: TopicCreate
        },
        {
            path: '/topics/:topic_id/tasks',
            component: TopicDetail
        },
        //tasks
        {
            path: '/tasks',
            component: TaskIndex
        },
        {
            path: '/tasks/:task_id',
            component: TaskDetail
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