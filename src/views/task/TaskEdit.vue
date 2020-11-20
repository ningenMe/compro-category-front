<template>
  <v-container>
    <div class="display-1">Edit Task</div>
      <v-form
      ref="form"
      lazy-validation
      >
        <v-text-field
          v-model="task.taskName"
          :counter="255"
          label="name"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="task.url"
          label="url"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="task.estimation"
          label="estimation"
          outlined
          required
        ></v-text-field>

        <div v-for="(genre,i) in comproCategoryGenreList" v-bind:key="i">
          <v-select
            v-model="task.topicIdList"
            item-text="topicName"
            item-value="topicId"
            :items="genre.comproCategoryTopicList"
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
      comproCategoryGenreList : [],
      task            : null,
      host: process.env.VUE_APP_NINGENME_API_HOST,
      path: process.env.VUE_APP_NINGENME_API_PATH,
    }
  },
  mounted () {
    axios
        .get(this.host + this.path + '/genres/topics')
        .then(response => (this.comproCategoryGenreList = response.data.comproCategoryGenreList))
        .catch(err => {
            console.log('err:', err);
        })
    axios
      .get(this.host + this.path + '/tasks/' + this.$route.params.task_id)
      .then(response => (this.task = response.data.comproCategoryTask))
      .catch(err => {
          console.log('err:', err);
      })
  },
  methods : {
    taskUpdate : function (event) {
      axios({
        url: this.host + this.path + '/tasks/' + this.$route.params.task_id,
        method: 'put',
        headers: {
                   "Authorization" : this.$store.getters['getAccessToken'], 
        },
        data: {
          'taskId'           : this.task.taskId,
          'topicIdList'      : this.task.topicIdList,
          'taskName'         : this.task.taskName,
          'url'              : this.task.url, 
          'score'            : this.task.score,
          'estimation'       : this.task.estimation, 
        }
      })
      .then(response => (this.response = response.data))
      .catch(err => {
          console.log('err:', err);
      })
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