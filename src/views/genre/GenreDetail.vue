<template>
  <v-container>
    <!-- topic名 -->
    <v-card class="my-4" color="secondary" dark>
      <div class="text-center">
        {{ genre.name }}
      </div>
    </v-card>

    <!-- 表部分 -->
    <div class="my-2" v-for="(topic,i) in genre.topics" v-bind:key="i">
      <v-card>
        <v-toolbar color="grey darken-3" dark height="24px">
          <v-toolbar-title class="body-2">{{topic.topic_name}}</v-toolbar-title>
        </v-toolbar>

        <b-table small striped :items="topic.tasks" :fields="keys" :fixed="true">
          <!-- taskカラム -->
          <template slot="task" slot-scope="data">
              <router-link v-bind:to="'/tasks/' + data.item.task_id" class="body-2">{{data.item.task_name}}</router-link>
          </template>

          <!-- urlカラム -->
          <template slot="url" slot-scope="data">
              <a v-bind:href="data.item.url" target="_blank">#</a>
          </template>

          <!-- estimationカラム -->
          <template slot="estimation" slot-scope="data">
            <div class="body-2">
              {{data.value}}
            </div>
          </template>
        </b-table>

      </v-card>
    </div>

  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      genre : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,
      keys: [
        {key:'task'      , sortable: false, thStyle: { backgroundColor: '#d8bfd8',}},
        {key:'url'       , sortable: false, thStyle: { backgroundColor: '#d8bfd8', width: "30px", }},
        {key:'estimation', sortable: true , thStyle: { backgroundColor: '#d8bfd8', width: "120px", }},
      ],
    }
  },
  mounted () {
    axios({
        url: this.urlPrefixComproCategoryAPI + '/genres/' + this.$route.params.label + '/topics',
        method: 'get',
      })
      .then(response => (this.genre = response.data))
  },
}
</script>