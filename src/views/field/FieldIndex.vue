<template>
  <v-container>
    <div class="display-1 font-weight-black">Solved Problems</div>
    <v-layout row wrap>
      <v-flex xs6 v-for="(e,i) in fields" v-bind:key="i">
        <v-container class="pa-2">
          <v-card>
            <v-card-text>
              <!-- <router-link v-bind:to="'/domain/index/'+e.label">{{e.name}}</router-link> -->
              <v-btn text small block v-on:click='prepareDomainIndex(e)'>{{e.name}}</v-btn>
            </v-card-text>
          </v-card>
        </v-container>
        <v-btn rounded color="light-green accent-3" v-bind:to = "'/field/edit/' + e.label" v-if="$store.getters['getAccessToken'] != null">編集</v-btn>

      </v-flex>
    </v-layout>

    <v-row>
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

    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      fields : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,
    }
  },
  // watch : {
  //   fields: function() {
  //     var fieldsMap = {}
  //     this.fields.forEach(element => {
  //       fieldsMap[element.label] = element
  //     });
  //     this.$store.dispatch('setFields', fieldsMap)
  //   }
  // },
  mounted () {
    axios.post('https://ningenme.net/home.api/access',{
      'name':'compro_category'
    })

    axios
      .get(this.urlPrefixComproCategoryAPI + '/fields')
      .then(response => (this.fields = response.data))
  },
  methods : {
    prepareDomainIndex(field){
      this.$store.dispatch('setField', field)
      this.$router.push('/domain/index/'+field.label)
    }
  }
}
</script>