<template>
  <v-container>
    <div v-for="(e,i) in responseBody" v-bind:key="i">
    {{e}}
    </div>    
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      domain: [2, 3, 4],
      responseBody : [],
    }
  },
  mounted () {
     axios
      .get('https://ningenme.net/compro_category.api/fields')
      .then(response => (this.responseBody = response.data))
  }

}
</script>