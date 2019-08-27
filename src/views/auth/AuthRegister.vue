<template>
  <v-container>
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
          v-model="email"
          :counter="255"
          label="email"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :counter="255"
          label="password"
          outlined
          required
        ></v-text-field>

      </v-form>

      <v-row>
        <v-col
          cols="auto"
          class="mr-auto"
        >
          <v-btn rounded color="deep-purple lighten-4" to="/field/index">もどる</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn rounded color="light-blue accent-2" v-on:click="authRegister">登録</v-btn>
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
      email    : null,
      password : null,
      response : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,

    }
  },

  methods : {
    authRegister : function (event) {

      axios({
        url: this.urlPrefixComproCategoryAPI + '/api/register',
        method: 'post',
        data: {
          'name' : this.name,
          'email': this.email,
          'password': this.password,
        }
      }).then(
        response => (this.response = response.data)
        )
    }
  }
}
        



</script>