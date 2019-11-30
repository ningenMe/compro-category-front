<template>
  <v-container>
    <div class="display-1 font-weight-thin">精進記録</div>
    <v-layout row wrap>
      <v-flex xs6 v-for="(e,i) in genres" v-bind:key="i">
        <v-container class="pa-2">
          <v-card>
            <v-card-text>
              <v-btn text small block v-on:click='prepareDomainIndex(e)'>{{e.name}}</v-btn>
            </v-card-text>
          </v-card>
        </v-container>
        <!-- <v-btn rounded color="light-green accent-3" v-bind:to = "'/field/edit/' + e.label" v-if="$store.getters['getAccessToken'] != null">編集</v-btn> -->

      </v-flex>
    </v-layout>

    <!-- <v-row>
      <v-col
        cols="auto"
        class="mr-auto"
      >
        <v-btn rounded color="teal accent-2" to="/auth/login">ログイン</v-btn>
        <v-btn rounded color="teal accent-2" to="/auth/register">登録</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn rounded color="light-blue accent-2" to="/field/create" v-if="this.$store.getters['getAccessToken'] != null">追加</v-btn>
      </v-col>

    </v-row> -->
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      genres : [],
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
  // methods : {
  //   prepareDomainIndex(field){
  //     this.$store.dispatch('setField', field)
  //     this.$router.push('/domain/index/'+field.label)
  //   }
  // }
}
</script>