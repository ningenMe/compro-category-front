<template>
  <v-container>
    <div class="display-1">Create Task</div>
      <v-form
      ref="form"
      lazy-validation
      >
        <v-text-field
          v-model="taskName"
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

        <div v-for="(genre,i) in comproCategoryGenreList" v-bind:key="i">
          <v-select
            v-model="topicIdList"
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
      comproCategoryGenreList : [],
      taskName    : '',
      url         : null,
      estimation  : 0,
      topicIdList : [], 
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
  },
  methods : {
    taskCreate : function (event) {
      axios({
        url: this.host + this.path + '/tasks',
        method: 'post',
        headers: {
                   "Authorization" : this.$store.getters['getAccessToken'], 
        },
        data: {
          'taskName'   : this.taskName,
          'url'        : this.url, 
          'estimation' : this.estimation,
          'topicIdList': this.topicIdList,
        }
      }).then(response => (
        this.response = response.data))
        this.$router.push('/tasks')
    }
  }
}
        



</script>