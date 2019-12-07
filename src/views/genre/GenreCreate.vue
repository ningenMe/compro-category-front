<template>
  <v-container>
    <div class="display-1">Create New Field!!!</div>
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
          <v-btn rounded color="light-blue accent-2" v-on:click="genreCreate">送信</v-btn>
        </v-col>
      </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      name     : null,
      label    : null,
      order    : null,
      json     : null,
      response : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,

    }
  },
  methods : {
    genreCreate : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/genres',
        method: 'post',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
        data: {
          'name': this.name,
          'label': this.label,
          'order': this.order, 
        }
      }).then(response => (
        this.response = response.data))
        this.$router.push('/')
    }
  }
}
        



</script>