<template>
  <v-container>
    <div class="display-1">Edit Task</div>
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
          <v-btn rounded outlined color="red accent-3" v-on:click="taskDelete">delete</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn rounded outlined color="light-blue accent-2" v-on:click="taskUpdate">update</v-btn>
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
      task            : null,
      name            : null,
      url             : null,
      estimation      : null,
      response        : [],
      response2        : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,
    }
  },
  watch : {
    task: function() {
      this.name       = this.task.name
      this.url        = this.task.url
      this.estimation = this.task.estimation
    }
  },

  mounted () {
    axios
      .get(this.urlPrefixComproCategoryAPI + '/genres/all/topics')
      .then(response => (this.genres = response.data))
    axios
      .get(this.urlPrefixComproCategoryAPI + '/tasks/' + this.$route.params.task_id)
      .then(response => (this.task = response.data))
    axios
      .get(this.urlPrefixComproCategoryAPI + '/tags/tasks/' + this.$route.params.task_id)
      .then(response => (this.genre_topic_ids = response.data))
  },
  methods : {
    taskUpdate : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/tasks/' +  this.task.task_id,
        method: 'put',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
        data: {
          'task_id'          : this.task.task_id,
          'genre_topic_ids'  : this.genre_topic_ids,
          'name'             : this.name,
          'url'              : this.url, 
          'estimation'       : this.estimation, 
        }
      }).then(response => (
        this.response = response.data))
        this.$router.push('/tasks')

    },
    taskDelete : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/tasks/' +  this.task.task_id,
        method: 'delete',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
        data: {
          'task_id'          : this.task.task_id,
        }
      }).then(response => (
        this.response = response.data))
        this.$router.push('/tasks')
    }
  }
}
        



</script>