import Vue from 'vue'
import Router from 'vue-router'
import GenreIndex from './views/genre/GenreIndex.vue'
import GenreCreate from './views/genre/GenreCreate.vue'
import GenreEdit from './views/genre/GenreEdit.vue'
import GenreDetail from './views/genre/GenreDetail.vue'
import TopicIndex from './views/topic/TopicIndex.vue'
import TopicDetail from './views/topic/TopicDetail.vue'
import TopicCreate from './views/topic/TopicCreate.vue'
import TopicEdit from './views/topic/TopicEdit.vue'
import TaskIndex from './views/task/TaskIndex.vue'
import TaskDetail from './views/task/TaskDetail.vue'
import TaskCreate from './views/task/TaskCreate.vue'
import TaskEdit from './views/task/TaskEdit.vue'

import AuthLogin from './views/auth/AuthLogin.vue'
import AuthRegister from './views/auth/AuthRegister'

Vue.use(Router)

export default new Router({
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
        {
            path: '/topics/:topic_id/edit',
            component: TopicEdit
        },
        //tasks
        {
            path: '/tasks',
            component: TaskIndex
        },
        {
            path: '/tasks/create',
            component: TaskCreate
        },
        {
            path: '/tasks/:task_id',
            component: TaskDetail
        },
        {
            path: '/tasks/:task_id/edit',
            component: TaskEdit
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