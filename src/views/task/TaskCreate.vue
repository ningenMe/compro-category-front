<template>
  <v-container>
    <div class="display-1">Create Task</div>
      <v-form
      ref="form"
      lazy-validation
      >
        <v-text-field
          v-model="name"
          :counter="255"
          label="name"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="url"
          label="url"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="estimation"
          label="estimation"
          outlined
          required
        ></v-text-field>

        <div v-for="(genre,i) in genres" v-bind:key="i">
          <v-select
            v-model="genre_topic_ids[genre.genre_id]"
            item-text="topic_name"
            item-value="topic_id"
            :items="genre.topics"
            :label="genre.label"
            outlined
            multiple
          ></v-select>
        </div>

      </v-form>

      <v-row>
        <v-col
          cols="auto"
          class="mr-auto"
        >
          <v-btn rounded color="deep-purple lighten-4" v-bind:to="'/tasks/'">return</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn rounded color="light-blue accent-2" v-on:click="taskCreate">create</v-btn>
        </v-col>
      </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      genres          : [],
      genre_topic_ids : {},
      name            : "task",
      url             : null,
      estimation      : 0,
      response        : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,
    }
  },
  mounted () {
    axios
      .get(this.urlPrefixComproCategoryAPI + '/genres/all/topics')
      .then(response => (this.genres = response.data))
  },
  methods : {
    taskCreate : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/tasks',
        method: 'post',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
        data: {
          'genre_topic_ids'  : this.genre_topic_ids,
          'name'       : this.name,
          'url'        : this.url, 
          'estimation' : this.estimation, 
        }
      }).then(response => (
        this.response = response.data))
        this.$router.push('/tasks')
    }
  }
}
        



</script>