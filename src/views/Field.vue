<template>
  <v-container>
    <router-link to="/">もどる</router-link>
    
    <div>{{ field[$route.params.label]["name"] }}</div>

    <v-card v-for="(domain,i) in domains" v-bind:key="i">
      <v-toolbar color="grey darken-3" dark height="24px">
        <v-toolbar-title>{{domain.name}}</v-toolbar-title>
      </v-toolbar>
        <div>
          <b-table small :items="domain.problems" :fields="keys">
            <template slot="estimation" slot-scope="data">
              {{ data.value}}
            </template>
            <template slot="problem" slot-scope="data">
              <a v-bind:href="data.item.url" target="_blank">{{data.item.name}} </a>
            </template>
          </b-table>
        </div>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      field : this.$store.getters['getFields'],
      domains: [],
      route: null,

      keys: [
        {key:'problem'},
        {key:'score'},
        {key:'estimation',sortable: true},
      ],
    }
  },
  mounted () {
    axios
      .post('https://ningenme.net/home.api/access',{
      'name': 'compro_category/domains/'+this.$route.params.label })

    axios
      .get('https://ningenme.net/compro_category.api/domains/'+this.$route.params.label)
      .then(response => (this.domains = response.data))
  },
  method: {
    getFields: function() {
      return this.$store.getters['getFields']
    },
  }  
}



</script>