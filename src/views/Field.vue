<template>
  <v-container>
    <router-link to="/">もどる</router-link>

    <div> {{ $route.params.label }}</div>

        <v-card v-for="(domain,i) in responseBody" v-bind:key="i">
          <v-toolbar color="grey darken-3" dark height="24px">
            <v-toolbar-title>{{domain.name}}</v-toolbar-title>
          </v-toolbar>
            <div>
              <b-table small :items="domain.problems" :fields="fields">
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
      responseBody : [],
      route: null,
      fields: [
        {key:'estimation',sortable: true},
        {key:'score',sortable: true},
        {key:'name',sortable: true}
      ],
    }
  },
  mounted () {
    axios.post('https://ningenme.net/home.api/access',{
      'name': 'compro_category/domains/'+this.$route.params.label })

    axios
//      .get('https://ningenme.net/compro_category.api/domains/')
      .get('http://127.0.0.1:8000/domains/'+this.$route.params.label)
      .then(response => (this.responseBody = response.data))
  }

}



</script>