<template>
  <v-container>
    <div class="display-1 font-weight-black">Solved Problems</div>

    <v-layout row wrap>
      <v-flex xs6 v-for="(e,i) in responseBody" v-bind:key="i">
        <v-container class="pa-2">
          <v-card>
            <v-card-text>
              <router-link v-bind:to="'/field/'+e.label">{{e.name}}</router-link>
            </v-card-text>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      responseBody : [],
    }
  },
  mounted () {
    axios.post('https://ningenme.net/home.api/access',{
      'name':'compro_category'
    })

    axios
//      .get('https://ningenme.net/compro_category.api/fields')
      .get('http://127.0.0.1:8000/fields')
      .then(response => (this.responseBody = response.data))
  }

}
</script>