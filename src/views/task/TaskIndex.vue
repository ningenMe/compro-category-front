<template>
  <v-container>

    <!-- edit,create button -->
    <v-row>
      <v-col
        cols="auto"
        class="mr-auto"
      >
        <v-btn outlined color="yellow darken-3" disabled >task</v-btn>
        <v-btn outlined color="yellow darken-3">
        <select v-model="task">
          <option v-bind:value="task" v-for="(task,i) in tasks" v-bind:key="i">
            {{ task.name}}
          </option>
        </select>
        ▼
        </v-btn>
        <v-btn outlined color="yellow darken-3" v-bind:to = "'/tasks/' + task.task_id + '/edit'" v-if="$store.getters['getAccessToken'] != null">edit</v-btn>
        <v-btn outlined color="yellow darken-3" v-bind:to = "'/tasks/' + task.task_id" v-if="$store.getters['getAccessToken'] == null">tasks</v-btn>

      </v-col>
      <v-col cols="auto">
        <v-btn outlined color="light-blue accent-4" to='/tasks/create' v-if="this.$store.getters['getAccessToken'] != null">task create</v-btn>
      </v-col>

    </v-row>

    <v-layout row wrap>
      
      <b-table small striped :items="tasks" :fields="keys" :fixed="true">

        <!-- taskカラム -->
        <template v-slot:cell(task)="data">
          <div class="body-2">
            <router-link v-bind:to="'/tasks/' + data.item.task_id" class="body-2">{{data.item.name}}</router-link>
            
            <br/>
            
            <a class="my-2" v-for="(tag,i) in data.item.tags" v-bind:key="i">
              <v-chip rounded outlined dark color="secondary" small v-bind:to="'topics/' + tag.topic_id + '/tasks'">{{tag.topic_name}}</v-chip>
            </a>
          </div>
        </template>

        <!-- urlカラム -->
        <template v-slot:cell(url)="data">
            <a v-bind:href="data.item.url" target="_blank">#</a>
        </template>
        
        <!-- estimationカラム -->
        <template v-slot:cell(estimation)="data">
          <div class="body-2">
            {{data.value}}
          </div>
        </template>
      
      </b-table>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      tasks : [],
      task  : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,
      keys: [
        {key:'task'      , sortable: false, thStyle: { backgroundColor: '#d8bfd8',}},
        {key:'url'       , sortable: false, thStyle: { backgroundColor: '#d8bfd8', width: "30px", }},
        {key:'estimation', sortable: true , thStyle: { backgroundColor: '#d8bfd8', width: "120px", }},
      ],

    }
  },
  mounted () {
    axios
      .get(this.urlPrefixComproCategoryAPI + '/tasks')
      .then(response => (this.tasks = response.data))
  },
}
</script>