<template>
<v-container>
    <!-- edit,create button -->
    <v-row>
        <v-col cols="auto" class="mr-auto">
            <v-btn outlined color="yellow darken-3" v-bind:to="'/tasks/' + tasks[0].task_id + '/edit'" v-if="$store.getters['getAccessToken'] != null">edit</v-btn>

        </v-col>
        <v-col cols="auto">
        </v-col>

    </v-row>

    <v-card class="mx-auto" outlined elevation="10">
        <v-card-title class="headline">{{task.taskName}}</v-card-title>
        <v-card-subtitle><a v-bind:href="task.url" target="_blank">{{task.url}}</a></v-card-subtitle>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
            <p><strong>estimation score: {{task.estimation}}</strong></p>
            <a class="my-2" v-for="(topic,i) in task.comproCategoryTopicList" v-bind:key="i">
                <v-chip rounded outlined dark color="secondary" v-bind:to="'/topics/' + topic.topicId + '/tasks'">{{topic.topicName}}</v-chip>
            </a>
        </v-card-text>
    </v-card>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            task: {
                taskName: null,
                url: null,
            },
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
    created() {
        this.fetchTask();
    },
    methods: {
        async fetchTask() {
            axios
                .get(this.host + this.path + '/tasks/' + this.$route.params.task_id)
                .then(response => (this.task = response.data.comproCategoryTask))
                .catch(err => {
                    console.log('err:', err);
                })
        }
    },
}
</script>
