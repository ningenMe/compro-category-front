<template>
  <v-container>
    <div class="display-1">Create Topic</div>
      <v-form
      ref="form"
      lazy-validation
      >
          <v-select
            v-model="genre"
            item-text="label"
            item-value="label"
            :items="genres"
            label="label"
            outlined
            return-object
          ></v-select>

        <v-text-field
          v-model="name"
          :counter="255"
          label="name"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="order"
          label="order"
          outlined
          required
        ></v-text-field>

      </v-form>

      <v-row>
        <v-col
          cols="auto"
          class="mr-auto"
        >
          <v-btn rounded color="deep-purple lighten-4" v-bind:to="'/topics/'">return</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn rounded color="light-blue accent-2" v-on:click="topicCreate">create</v-btn>
        </v-col>
      </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      genres   : [],
      items: [
        {label:'foo', value:'bar'},
        {label:'fizz',value:'buzz'}
      ],
      genre    : this.$store.getters['getGenre'],
      name     : null,
      order    : null,
      response : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,
    }
  },
  mounted () {
    axios
      .get(this.urlPrefixComproCategoryAPI + '/genres')
      .then(response => (this.genres = response.data))
  },
  methods : {
    topicCreate : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/topics',
        method: 'post',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
        data: {
          'genre_id' : this.genre.genre_id,
          'name'     : this.name,
          'order'    : this.order, 
        }
      }).then(response => (
        this.response = response.data))
        this.$router.push('/topics')
    }
  }
}
        



</script>