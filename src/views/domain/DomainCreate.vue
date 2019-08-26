<template>
  <v-container>
    <div class="display-1">Create New Domain!!!</div>
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
          v-model="name"
          :counter="255"
          label="name"
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
          <v-btn rounded color="deep-purple lighten-4" v-bind:to="'/domain/index/'+field.label">もどる</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn rounded color="light-blue accent-2" v-on:click="domainCreate">送信</v-btn>
        </v-col>
      </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      field    : this.$store.getters['getField'],
      name     : null,
      order    : null,
      json     : null,
      response : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,
    }
  },
  methods : {
    domainCreate : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/api/domains/create',
        method: 'post',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
        data: {
          'fields_id': this.field.id,
          'name'     : this.name,
          'order'    : this.order, 
        }
      }).then(response => (
        this.response = response.data))
        this.$router.push('/domain/index/'+this.field.label)
    }
  }
}
        



</script>