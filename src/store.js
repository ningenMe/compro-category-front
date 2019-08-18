import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fields: [],
    },
    getters: {
        getFields: (state, getters) => {
            return state.fields;
        },
    },
    mutations: {
        setFields: (state, payload) => {
            return state.fields = payload;
        },
    },
    actions: {}
})