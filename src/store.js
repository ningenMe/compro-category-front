import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fields: [],
        email: null,
        accessToken: null,
    },
    getters: {
        getFields(state) {
            return state.fields;
        },
        getEmail(state) {
            return state.email;
        },
        getAccessToken(state) {
            return state.accessToken;
        },
    },
    mutations: {
        setFields(state, payload) {
            state.fields = payload;
        },
        setEmail(state, payload) {
            state.email = payload;
        },
        setAccessToken(state, payload) {
            state.accessToken = payload;
        },
    },
    actions: {
        setFields(context, fields) {
            context.commit('setFields', fields)
        },
        setEmail(context, email) {
            context.commit('setEmail', email)
        },
        setAccessToken(context, accessToken) {
            context.commit('setAccessToken', accessToken)
        }
    },
})