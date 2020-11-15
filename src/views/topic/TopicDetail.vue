<template>
<v-container>
    <v-card>
        <v-toolbar color="grey darken-3" dark height="24px">
            <v-toolbar-title class="body-2">{{topic.topicName}}</v-toolbar-title>
        </v-toolbar>
        <div>
            <b-table small striped :items="topic.comproCategoryTaskList" :fields="keys" :fixed="true">

                <!-- taskカラム -->
                <template v-slot:cell(task)="data">
                    <router-link v-bind:to="'/tasks/' + data.item.taskId" class="body-2">{{data.item.taskName}}</router-link>
                </template>

                <!-- urlカラム -->
                <template v-slot:cell(url)="data">
                    <a v-bind:href="data.item.url" target="_blank" class="body-2">#</a>
                </template>

                <!-- estimationカラム -->
                <template v-slot:cell(estimation)="data">
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
    data() {
        return {
            topic: {},
            host: process.env.VUE_APP_NINGENME_API_HOST,
            path: process.env.VUE_APP_NINGENME_API_PATH,
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

        }
    },
    created() {
        this.fetchTopic();
    },
    methods: {
        fetchTopic() {
            axios
                .get(this.host + this.path + '/topics/' + this.$route.params.topic_id + '/tasks')
                .then(response => (this.topic = response.data.comproCategoryTopic))
                .catch(err => {
                    console.log('err:', err);
                });
        }
    },
}
</script>
