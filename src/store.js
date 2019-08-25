import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fields: [],
        field: {},
        email: null,
        accessToken: null,
    },
    getters: {
        getFields(state) {
            return state.fields;
        },
        getField(state) {
            return state.field;
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
        setField(state, payload) {
            state.field = payload;
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
        setField(context, field) {
            context.commit('setField', field)
        },
        setEmail(context, email) {
            context.commit('setEmail', email)
        },
        setAccessToken(context, accessToken) {
            context.commit('setAccessToken', accessToken)
        }
    },
})