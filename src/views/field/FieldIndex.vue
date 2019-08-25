<template>
  <v-container>
    <div class="display-1 font-weight-black">Solved Problems</div>
    <v-layout row wrap>
      <v-flex xs6 v-for="(e,i) in fields" v-bind:key="i">
        <v-container class="pa-2">
          <v-card>
            <v-card-text>
              <router-link v-bind:to="'/field/'+e.label+'/domain/index'">{{e.name}}</router-link>
            </v-card-text>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>

    <v-row>
      <v-col
        cols="auto"
        class="mr-auto"
      >
        <v-btn rounded color="yellow accent-3" v-if="this.$store.getters['getAccessToken'] != null">{{this.$store.getters['getEmail']}}</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn rounded color="light-blue accent-2" to="/field/create" v-if="this.$store.getters['getAccessToken'] != null">field追加</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn rounded color="teal accent-2" to="/auth/login">ログイン</v-btn>
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
    }
  },
  watch : {
    fields: function() {
      var fieldsMap = {}
      this.fields.forEach(element => {
        fieldsMap[element.label] = element
      });
      this.$store.dispatch('setFields', fieldsMap)
    }
  },
  computed: {
    getFields: function() {
      return this.$store.getters['getFields']
    },
  },
  mounted () {
    axios.post('https://ningenme.net/home.api/access',{
      'name':'compro_category'
    })

    axios
      .get('https://ningenme.net/compro_category.api/fields')
      .then(response => (this.fields = response.data))
  }

}
</script>