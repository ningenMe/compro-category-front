<template>
  <v-container>
    <div class="display-1">Create New Problem!!!</div>
      <v-form
      ref="form"
      lazy-validation
      >
        <v-text-field
          v-model="field.name"
          :counter="255"
          label="field"
          outlined
          readonly
        ></v-text-field>

        <v-text-field
          v-model="domain.name"
          :counter="255"
          label="domain"
          outlined
          readonly
        ></v-text-field>

        <v-text-field
          v-model="name"
          :counter="255"
          label="name"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="url"
          label="url"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="score"
          label="score"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="estimation"
          label="estimation"
          outlined
          required
        ></v-text-field>

      </v-form>

      <v-row>
        <v-col
          cols="auto"
          class="mr-auto"
        >
          <v-btn rounded color="deep-purple lighten-4" 
          v-bind:to="'/domain/index/' + field.label">もどる</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn rounded color="light-blue accent-2" v-on:click="problemCreate">送信</v-btn>
        </v-col>
      </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      field      : this.$store.getters['getField'],
      domain     : this.$store.getters['getDomain'],
      name       : null,
      url        : null,
      score      : 0,
      estimation : 0,
      response   : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,
    }
  },
  methods : {
    problemCreate : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/api/problems/create',
        method: 'post',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
        data: {
          'domains_id' : this.domain.id,
          'name'       : this.name,
          'url'        : this.url,
          'score'      : this.score,
          'estimation' : this.estimation,
        }
      }).then(response => (
        this.response = response.data))
        this.$router.push('/domain/index/' + this.field.label)
    }
  }
}
        



</script>