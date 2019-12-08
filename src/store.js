import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        genre: {},
        genres: [],
        topic: {},
        fields: [],
        field: {},
        domain: {},
        email: null,
        accessToken: null,
    },
    getters: {
        getGenre(state) {
            return state.genre;
        },
        getGenres(state) {
            return state.genres;
        },

        getTopic(state) {
            return state.topic;
        },
        getFields(state) {
            return state.fields;
        },
        getField(state) {
            return state.field;
        },
        getDomain(state) {
            return state.domain;
        },
        getEmail(state) {
            return state.email;
        },
        getAccessToken(state) {
            return state.accessToken;
        },
    },
    mutations: {
        setGenre(state, payload) {
            state.genre = payload;
        },
        setGenres(state, payload) {
            state.genres = payload;
        },


        setTopic(state, payload) {
            state.topic = payload;
        },
        setFields(state, payload) {
            state.fields = payload;
        },
        setField(state, payload) {
            state.field = payload;
        },
        setDomain(state, payload) {
            state.domain = payload;
        },
        setEmail(state, payload) {
            state.email = payload;
        },
        setAccessToken(state, payload) {
            state.accessToken = payload;
        },
    },
    actions: {
        setGenre(context, genre) {
            context.commit('setGenre', genre)
        },
        setGenres(context, genres) {
            context.commit('setGenres', genres)
        },

        setTopic(context, topic) {
            context.commit('setTopic', topic)
        },
        setFields(context, fields) {
            context.commit('setFields', fields)
        },
        setField(context, field) {
            context.commit('setField', field)
        },
        setDomain(context, domain) {
            context.commit('setDomain', domain)
        },
        setEmail(context, email) {
            context.commit('setEmail', email)
        },
        setAccessToken(context, accessToken) {
            context.commit('setAccessToken', accessToken)
        }
    },
})