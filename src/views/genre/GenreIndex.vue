<template>
<v-container>
    <!-- edit,create button -->
    <v-row>
        <v-col cols="auto" class="mr-auto">
            <v-btn outlined color="yellow darken-3" disabled>genre</v-btn>
            <v-btn outlined color="yellow darken-3">
                <select v-model="selected_genre">
                    <option v-bind:value="genre" v-for="(genre,i) in genres" v-bind:key="i">
                        {{ genre.genreName}}
                    </option>
                </select>
                ▼
            </v-btn>
            <v-btn outlined color="yellow darken-3" v-bind:to="'/genres/' + selected_genre.label + '/edit'" v-if="$store.getters['getAccessToken'] != null">edit</v-btn>
            <v-btn outlined color="yellow darken-3" v-bind:to="'/genres/' + selected_genre.label + '/topics'" v-if="$store.getters['getAccessToken'] == null">topics</v-btn>
        </v-col>

        <v-col cols="auto">
            <v-btn outlined color="light-blue accent-4" to="/genres/create" v-if="this.$store.getters['getAccessToken'] != null">genre create</v-btn>
        </v-col>

    </v-row>

    <!-- genre index -->
    <v-layout row wrap>
        <v-flex xs6 v-for="(genre,i) in genres" v-bind:key="i">
            <v-container class="pa-2">
                <v-btn text small block outlined elevation="10" class="pt-7 pb-7" v-bind:to="'/genres/' + genre.label + '/topics'">{{genre.genreName}}</v-btn>
            </v-container>
        </v-flex>
    </v-layout>

</v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            genres: [],
            selected_genre: 'search',
            host: process.env.VUE_APP_NINGENME_API_HOST,
            path: process.env.VUE_APP_NINGENME_API_PATH,
        }
    },
    mounted() {
        axios
            .get(this.host + this.path + '/genres')
            .then(response => (this.genres = response.data['comproCategoryGenreList']))
            .catch(err => {
                console.log('err:', err);
            })
    },
}
</script>
