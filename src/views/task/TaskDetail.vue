<template>
  <v-container>
    <v-layout row wrap>
      <b-table small striped :items="tasks" :fields="keys" :fixed="true">

        <!-- taskカラム -->
        <template slot="task" slot-scope="data">
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
      .then(response => (this.tasks = response.data))
  },
}
</script>