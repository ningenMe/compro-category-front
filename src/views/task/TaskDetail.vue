<template>
  <v-container>
    <!-- edit,create button -->
    <v-row>
      <v-col
        cols="auto"
        class="mr-auto"
      >
        <v-btn outlined color="yellow darken-3" v-bind:to = "'/tasks/' + tasks[0].task_id + '/edit'" v-if="$store.getters['getAccessToken'] != null">edit</v-btn>

      </v-col>
      <v-col cols="auto">
      </v-col>

    </v-row>

    <v-layout row wrap>

      <b-table small striped :items="tasks" :fields="keys" :fixed="true">

        <!-- taskカラム -->
        <template v-slot:cell(task)="data">
          <div class="body-2">
            <a v-bind:href="data.item.url" target="_blank">
              {{data.item.name}}
            </a><br/>
            <a class="my-2" v-for="(tag,i) in data.item.tags" v-bind:key="i">
              <v-chip rounded outlined dark color="secondary" small v-bind:to="'/topics/' + tag.topic_id + '/tasks'">{{tag.topic_name}}</v-chip>
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
      .get(this.urlPrefixComproCategoryAPI + '/tasks/' + this.$route.params.task_id)
      .then(response => (this.tasks.push(response.data) ))
  },
}
</script>