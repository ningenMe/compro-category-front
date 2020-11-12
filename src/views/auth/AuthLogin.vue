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
      host : process.env.VUE_APP_NINGENME_API_HOST,
      access_token : null,
    }
  },
  watch : {
    email: function() {
      this.$store.dispatch('setEmail',this.email)
    },
    access_token: function() {
      this.$store.dispatch('setAccessToken',this.access_token)
    },
  },

  methods : {
    authLogin : function (event) {
      var params = new URLSearchParams();
      params.append('email', this.email);
      params.append('password', this.password);

      axios.post(this.host + '/v1/login', params)
      .then(
        response => {
          this.access_token = response.headers["authorization"]
          console.log(response)
        }
      )
    }
  }
}
        



</script>