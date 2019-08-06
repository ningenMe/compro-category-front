<template>
  <v-container>
    <div class="example3">{{ responseBody }}</div>
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
      .get('http://18.182.85.26/compro_category/fields')
      .then(response => (this.responseBody = response.data))
  }

}
</script>