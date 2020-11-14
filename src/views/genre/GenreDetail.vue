<template>
<v-container>

    <!-- edit,create button -->
    <v-row>
        <v-col cols="auto" class="mr-auto">
            <v-btn outlined color="yellow darken-3" disabled>topic</v-btn>
            <v-btn outlined color="yellow darken-3">
                <select v-model="selected_topic">
                    <option v-bind:value="topic" v-for="(topic,i) in genre.comproCategoryTopicList" v-bind:key="i">
                        {{ topic.topicName}}
                    </option>
                </select>
                ▼
            </v-btn>
            <v-btn outlined color="yellow darken-3" v-on:click='prepareTopicEdit(selected_topic)' v-if="$store.getters['getAccessToken'] != null">edit</v-btn>
            <v-btn outlined color="yellow darken-3" v-bind:to="'/topics/' + selected_topic.topic_id + '/tasks'" v-if="$store.getters['getAccessToken'] == null">tasks</v-btn>

        </v-col>

        <v-col cols="auto">
            <!-- <v-btn block outlined color="light-blue accent-2" v-on:click='prepareTopicCreate()' v-if="this.$store.getters['getAccessToken'] != null">topic create</v-btn> -->
            <v-btn outlined color="light-blue accent-2" v-on:click='prepareTopicCreate()' v-if="$store.getters['getAccessToken'] != null">topic create</v-btn>
        </v-col>

    </v-row>

    <!-- genre名 -->
    <v-card class="my-4" color="secondary" dark>
        <div class="text-center">
            {{ genre.genreName }}
        </div>
    </v-card>

    <!-- 表部分 -->
    <div class="my-2" v-for="(topic,i) in genre.comproCategoryTopicList" v-bind:key="i">
        <v-card>
            <v-toolbar color="grey darken-3" dark height="24px">
                <v-toolbar-title class="body-2">{{topic.topicName}}</v-toolbar-title>
            </v-toolbar>

            <b-table small striped :items="topic.comproCategoryTaskList" :fields="keys" :fixed="true">
                <!-- taskカラム -->
                <template v-slot:cell(task)="data">
                    <router-link v-bind:to="'/tasks/' + data.item.taskId" class="body-2">{{data.item.taskName}}</router-link>
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

        </v-card>
    </div>

</v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            genre: [],
            selected_topic: [],
            keys: [{
                    key: 'task',
                    sortable: false,
                    thStyle: {
                        backgroundColor: '#d8bfd8',
                    }
                },
                {
                    key: 'url',
                    sortable: false,
                    thStyle: {
                        backgroundColor: '#d8bfd8',
                        width: "30px",
                    }
                },
                {
                    key: 'estimation',
                    sortable: true,
                    thStyle: {
                        backgroundColor: '#d8bfd8',
                        width: "120px",
                    }
                },
            ],
            host: process.env.VUE_APP_NINGENME_API_HOST,
            path: process.env.VUE_APP_NINGENME_API_PATH,
        }
    },
    mounted() {
        axios
            .get(this.host + this.path + '/genres/' + this.$route.params.label + '/topics')
            .then(response => (this.genre = response.data.comproCategoryGenre))
    },
    methods: {
        prepareTopicCreate() {
            //genreをそのままvuexに渡すと無駄な情報が多いので引数を成形する
            var genreArg = {
                'genreId': this.genre.genreId,
                'label': this.genre.label,
                'name': this.genre.name
            }
            this.$store.dispatch('setGenre', genreArg)
            this.$router.push('/topics/create')
        },
        prepareTopicEdit(topic) {
            this.$store.dispatch('setTopic', topic)
            this.$router.push('/topics/' + topic.topicId + '/edit')
        }
    }
}
</script>
