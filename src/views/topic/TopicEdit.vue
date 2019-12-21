<template>
  <v-container>
    <div class="display-1">Edit Topic</div>
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
          <v-btn rounded outlined color="red accent-3" v-on:click="topicDelete">delete</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn rounded outlined color="light-blue accent-2" v-on:click="topicUpdate">update</v-btn>
        </v-col>
      </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      genres         : [],
      topic          : null,
      genre          : null,
      name           : null,
      order          : null,
      response       : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,
    }
  },
  watch : {
    topic: function() {
      this.genre = {genre_id:this.topic.genre_id, label:this.topic.label}
      this.name  = this.topic.topic_name
      this.order = this.topic.order
    }
  },
  mounted () {
    axios
      .get(this.urlPrefixComproCategoryAPI + '/genres')
      .then(response => (this.genres = response.data))
    axios({
        url: this.urlPrefixComproCategoryAPI + '/topics/' + this.$route.params.topic_id,
        method: 'get',
      })
      .then(response => (this.topic = response.data))

  },
  methods : {
    topicUpdate : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/topics/' +  this.topic.topic_id,
        method: 'put',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
        data: {
          'topic_id' : this.topic.topic_id,
          'genre_id' : this.genre.genre_id,
          'name'     : this.name,
          'order'    : this.order, 
        }
      }).then(response => (
        this.response = response.data))
        this.$router.push('/topics')
    },
    topicDelete : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/topics/' +  this.topic.topic_id,
        method: 'delete',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
        data: {
          'topic_id' : this.topic.topic_id,
        }
      }).then(response => (
        this.response = response.data))
        this.$router.push('/topics')
    }
  }
}
        



</script>