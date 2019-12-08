<template>
  <v-container>
    <v-card>
      <b-table small striped :items="topics" :fields="keys" :fixed="true">
        <!-- genreカラム -->
        <template slot="genre" slot-scope="data">
          <v-chip rounded outlined dark color="cyan darken-4" small v-bind:to="'genres/' + data.item.label + '/topics'">{{data.item.genre_name}}</v-chip>
        </template>
        <!-- topicカラム -->
        <template slot="topic" slot-scope="data">
          <v-chip rounded outlined dark color="secondary" small v-bind:to="'topics/' + data.item.topic_id + '/tasks'">{{data.item.topic_name}}</v-chip>
        </template>
      </b-table>
    </v-card>

  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      topics : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,
      keys: [
        {key:'genre', sortable: false, thStyle: { backgroundColor: '#d8bfd8', width: "120px", }},
        {key:'topic', sortable: false, thStyle: { backgroundColor: '#d8bfd8',}},
      ],

    }
  },
  mounted () {
    axios
      .get(this.urlPrefixComproCategoryAPI + '/topics')
      .then(response => (this.topics = response.data))
  },
}
</script>