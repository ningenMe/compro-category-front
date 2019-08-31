<template>
  <v-container>

    <v-card class="my-4" color="secondary" dark>
      <div class="text-center">
        {{ field.name }}
      </div>
    </v-card>
    
    <div class="my-2" v-for="(domain,i) in domains" v-bind:key="i">
      <v-card>
        <v-toolbar color="grey darken-3" dark height="24px">
          <v-toolbar-title class="body-2">{{domain.name}}</v-toolbar-title>
        </v-toolbar>
        <div>
          <b-table small striped :items="domain.problems" :fields="keys" :fixed="true">
 
            <template slot="problem" slot-scope="data">
              <div class="body-2">
                <a v-bind:href="data.item.url" target="_blank">{{data.item.name}} </a>
              </div>
            </template>
 
            <template slot="estimation" slot-scope="data">
              <div class="body-2">
                {{data.value}}
              </div>
              <div v-if="$store.getters['getAccessToken'] != null" class="body-2"> 
                <v-btn rounded color="light-green accent-3"
                v-on:click='prepareProblemEdit(domain,data.item.id)'>編集</v-btn>
              </div>
            </template>

            <!-- <template slot="score" slot-scope="data">
              <div v-if="$store.getters['getAccessToken'] != null" class="body-2"> 
                <v-btn rounded color="light-green accent-3"
                v-on:click='prepareProblemEdit(domain,data.item.id)'>編集</v-btn>
              </div>
              <div v-else class="body-2">{{data.value}}</div>
            </template> -->
 
          </b-table>
        </div>
      </v-card>
      <v-btn rounded color="light-green accent-3" 
      v-if="$store.getters['getAccessToken'] != null"
      v-bind:to="'/domain/edit/'+domain.id">編集</v-btn>
      <v-btn rounded color="light-blue accent-2"
      v-if="$store.getters['getAccessToken'] != null"
      v-on:click='prepareProblemCreate(domain)'>問題追加</v-btn>
    </div>


    <v-row>
      <v-col
        cols="auto"
        class="mr-auto"
      >
        <v-btn rounded color="deep-purple lighten-4" to="/">もどる</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn rounded color="light-blue accent-2" to="/domain/create" v-if="$store.getters['getAccessToken'] != null">追加</v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      field : this.$store.getters['getField'],
      domains: [],
      route: null,
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,

      keys: [
        {key:'problem'   , sortable: false, thStyle: { backgroundColor: '#d8bfd8',}},
        {key:'estimation', sortable: true , thStyle: { backgroundColor: '#d8bfd8', width: "120px", }},
//        {key:'score'     , sortable: false, thStyle: { backgroundColor: '#d8bfd8', width: "100px", }},
      ],
    }
  },
  mounted () {
    axios
      .post('https://ningenme.net/home.api/access',{
      'name': 'compro_category/field/'+this.$route.params.label })

    axios
      .get( this.urlPrefixComproCategoryAPI + '/domains/' + this.$route.params.label)
      .then(response => (this.domains = response.data))
  },
  methods: {
    getFields: function() {
      return this.$store.getters['getFields']
    },
    prepareProblemCreate: function(domain){
      this.$store.dispatch('setDomain', domain)
      this.$router.push('/problem/create/')
    },
    prepareProblemEdit: function(domain,id){
      this.$store.dispatch('setDomain', domain)
      this.$router.push('/problem/edit/' + id)
    }
  }
  
}



</script>