import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fields: [],
    },
    getters: {
        getFields (state) {
            return state.fields;
        },
    },
    mutations: {
        setFields (state, payload) {
            state.fields = payload;
        },
    },
    actions: {
        setFields (context, fields) {
            context.commit('setFields', fields)
        }
    },
})