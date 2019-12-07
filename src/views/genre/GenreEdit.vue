<template>
  <v-container>
    <div class="display-1">Edit</div>
      <v-form
      ref="form"
      lazy-validation
      >
        <v-text-field
          v-model="name"
          :counter="255"
          label="name"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="label"
          :counter="255"
          label="label"
          outlined
          required
          readonly
        ></v-text-field>

        <v-text-field
          v-model="order"
          label="order"
          outlined
          required
        ></v-text-field>

      </v-form>

      <v-row>
        <v-col
          cols="auto"
          class="mr-auto"
        >
          <v-btn rounded color="deep-purple lighten-4" to="/">もどる</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn rounded color="red accent-3" v-on:click="genreDelete">削除</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn rounded color="light-blue accent-2" v-on:click="genreUpdate">更新</v-btn>
        </v-col>
      </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      genre    : null,
      genre_id : null,
      name     : null,
      label    : null,
      order    : null,
      response : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,

    }
  },
  watch : {
    genre: function() {
      this.genre_id = this.genre["genre_id"]
      this.name     = this.genre["name"]
      this.label    = this.genre["label"]
      this.order    = this.genre["order"]
    }
  },
  mounted () {
    axios({
        url: this.urlPrefixComproCategoryAPI + '/genres/' + this.$route.params.label,
        method: 'get',
      })
      .then(response => (this.genre = response.data))
  },

  methods : {
    genreDelete : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/genres/' + this.$route.params.label,
        method: 'delete',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        }
      }).then(response => (
        this.response = response.data))
      this.$router.push('/')
    },
    genreUpdate : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/genres/' + this.$route.params.label,
        method: 'put',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
        data: {
          'genre_id' : this.genre_id,
          'label'    : this.label,
          'name'     : this.name,
          'order'    : this.order, 
        }
      }).then(response => (
        this.response = response.data))
      this.$router.push('/')
    }

  }
  
}
        



</script>