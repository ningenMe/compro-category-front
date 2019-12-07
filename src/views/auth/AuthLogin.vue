<template>
  <v-container>
      <v-form
      ref="form"
      lazy-validation
      >
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
          <v-btn rounded color="deep-purple lighten-4" to="/">もどる</v-btn>
        </v-col>


        <v-col cols="auto">
          <v-btn rounded color="light-blue accent-2" v-on:click="authLogin">ログイン</v-btn>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      email    : null,
      password : null,
      response : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,

    }
  },
  watch : {
    response: function() {
      this.$store.dispatch('setEmail',this.email)
      this.$store.dispatch('setAccessToken',this.response["access_token"])
    },
  },

  methods : {
    authLogin : function (event) {

      axios({
        url: this.urlPrefixComproCategoryAPI + '/login',
        method: 'post',
        data: {
          'email': this.email,
          'password': this.password,
        }
      }).then(
        response => (this.response = response.data)
        )
    },
    authCheck : function (event) {

      axios({
        url: this.urlPrefixComproCategoryAPI + '/me',
        method: 'get',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
      }).then(response => (this.response = response.data))
      this.$router.push('/')
    }

  }
}
        



</script>