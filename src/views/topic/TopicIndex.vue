<template>
  <v-container>

    
    <!-- edit,create button -->
    <v-row>
      <v-col
        cols="auto"
        class="mr-auto"
      >
        <v-btn outlined color="yellow darken-3" disabled >topic</v-btn>
        <v-btn outlined color="yellow darken-3">
        <select v-model="selected_topic">
          <option v-bind:value="topic" v-for="(topic,i) in topics" v-bind:key="i">
            {{ topic.topic_name}}
          </option>
        </select>
        ▼
        </v-btn>
        <v-btn outlined color="yellow darken-3" v-on:click='prepareTopicEdit(selected_topic)' v-if="$store.getters['getAccessToken'] != null">edit</v-btn>
        <!-- <v-btn outlined color="yellow darken-3" v-bind:to = "'/topics/' + selected_topic.topic_id + '/edit'" v-if="$store.getters['getAccessToken'] != null">edit</v-btn> -->
        <v-btn outlined color="yellow darken-3" v-bind:to = "'/topics/' + selected_topic.topic_id + '/tasks'" v-if="$store.getters['getAccessToken'] == null">tasks</v-btn>

      </v-col>

      <v-col cols="auto">
        <v-btn outlined color="light-blue accent-4" to='/topics/create' v-if="this.$store.getters['getAccessToken'] != null">topic create</v-btn>
      </v-col>

    </v-row>


    <v-card>
      <b-table small striped :items="topics" :fields="keys" :fixed="true">
        <!-- genreカラム -->
        <template v-slot:cell(genre)="data">
          <v-chip rounded outlined dark color="cyan darken-4" small v-bind:to="'genres/' + data.item.label + '/topics'">{{data.item.genre_name}}</v-chip>
        </template>
        <!-- topicカラム -->
        <template v-slot:cell(topic)="data">
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
      selected_topic: [],
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
  methods : {
    prepareTopicEdit(topic){
      this.$store.dispatch('setTopic',topic)
      this.$router.push('/topics/' + topic.topic_id + '/edit')
    }
  }

}
</script>