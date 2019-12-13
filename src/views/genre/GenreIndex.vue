<template>
  <v-container>
  
    <!-- edit,create button -->
    <v-row>
      <v-col
        cols="auto"
        class="mr-auto"
      >
        <v-btn outlined color="yellow darken-3" disabled >genre</v-btn>
        <v-btn outlined color="yellow darken-3">
        <select v-model="selected_label">
          <option v-for="(genre,i) in genres" v-bind:key="i">
            {{ genre.label}}
          </option>
        </select>
        ▼
        </v-btn>
        <v-btn outlined color="yellow darken-3" v-bind:to = "'/genres/' + selected_label + '/edit'" v-if="$store.getters['getAccessToken'] != null">edit</v-btn>
        <v-btn outlined color="yellow darken-3" v-bind:to = "'/genres/' + selected_label + '/topics'" v-if="$store.getters['getAccessToken'] == null">topics</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn outlined color="light-blue accent-4" to="/genres/create" v-if="this.$store.getters['getAccessToken'] != null">genre create</v-btn>
      </v-col>

    </v-row>

    <!-- genre index -->
    <v-layout row wrap>
      <v-flex xs6 v-for="(genre,i) in genres" v-bind:key="i">
        <v-container class="pa-2">
          <v-card>
            <v-card-text>
              <v-btn text small block v-bind:to="'/genres/' + genre.label + '/topics'">{{genre.name}}</v-btn>
            </v-card-text>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      genres : [],
      selected_label: 'search',
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,
    }
  },
  mounted () {
    axios.post('https://ningenme.net/home.api/access',{
      'name':'compro_category'
    })

    axios
      .get(this.urlPrefixComproCategoryAPI + '/genres')
      .then(response => (this.genres = response.data))
  },
}
</script>