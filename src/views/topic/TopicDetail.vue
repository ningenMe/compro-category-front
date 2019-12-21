<template>
  <v-container>
    <v-card>
      <v-toolbar color="grey darken-3" dark height="24px">
        <v-toolbar-title class="body-2">{{topic.name}}</v-toolbar-title>
      </v-toolbar>
      <div>
        <b-table small striped :items="topic.tasks" :fields="keys" :fixed="true">

          <!-- taskカラム -->
          <template slot="task" slot-scope="data">
              <router-link v-bind:to="'/tasks/' + data.item.task_id" class="body-2">{{data.item.name}}</router-link>
          </template>

          <!-- urlカラム -->
          <template slot="url" slot-scope="data">
              <a v-bind:href="data.item.url" target="_blank" class="body-2">#</a>
          </template>

          <!-- estimationカラム -->
          <template slot="estimation" slot-scope="data">
            <div class="body-2"> {{data.value}}</div>
          </template>
          
        </b-table>
      </div>
    </v-card>

  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      topic : {},
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,
      keys: [
        {key:'task'   , sortable: false, thStyle: { backgroundColor: '#d8bfd8',}},
        {key:'url'       , sortable: false, thStyle: { backgroundColor: '#d8bfd8', width: "30px", }},
        {key:'estimation', sortable: true , thStyle: { backgroundColor: '#d8bfd8', width: "120px", }},
      ],

    }
  },
  mounted () {
    axios
      .get(this.urlPrefixComproCategoryAPI + '/topics/' + this.$route.params.topic_id + '/tasks')
      .then(response => (this.topic = response.data))
  },
}
</script>