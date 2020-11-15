<template>
<v-container>

    <!-- edit,create button -->
    <v-row>
        <v-col cols="auto" class="mr-auto">
            <v-btn outlined color="yellow darken-3" disabled>tasks</v-btn>
            <v-btn outlined color="yellow darken-3">
                <select v-model="task">
                    <option v-bind:value="task" v-for="(task,i) in tasks" v-bind:key="i">
                        {{task.taskName}}
                    </option>
                </select>
                ▼
            </v-btn>
            <v-btn outlined color="yellow darken-3" v-bind:to="'/tasks/' + task.taskId + '/edit'" v-if="$store.getters['getAccessToken'] != null">edit</v-btn>
            <v-btn outlined color="yellow darken-3" v-bind:to="'/tasks/' + task.taskId" v-if="$store.getters['getAccessToken'] == null">tasks</v-btn>

        </v-col>
        <v-col cols="auto">
            <v-btn outlined color="light-blue accent-4" to='/tasks/create' v-if="this.$store.getters['getAccessToken'] != null">task create</v-btn>
        </v-col>
    </v-row>

    <!-- pagenation -->
    <!-- <v-row>
        <v-col cols="auto" class="mr-auto">
        </v-col>
        <v-col cols="auto">
            <v-btn outlined color="yellow darken-3" v-bind:to="'/tasks/offset/'+this.prev_offset" v-if="this.prev_offset != this.offset">from {{this.prev_offset}}</v-btn>
            <v-btn outlined color="yellow darken-3" v-bind:to="'/tasks/offset/'+this.offset">from {{this.offset}}</v-btn>
            <v-btn outlined color="yellow darken-3" v-bind:to="'/tasks/offset/'+this.next_offset">from {{this.next_offset}}</v-btn>
        </v-col>
    </v-row> -->

    <v-layout row wrap>

        <b-table small striped :items="tasks" :fields="keys" :fixed="true">

            <!-- taskカラム -->
            <template v-slot:cell(task)="data">
                <div class="body-2">
                    <router-link v-bind:to="'/tasks/' + data.item.taskId" class="body-2">{{data.item.taskName}}</router-link>

                    <br />
                    <a class="my-2" v-for="(topic,i) in data.item.comproCategoryTopicList" v-bind:key="i">
                        <v-chip rounded outlined dark color="secondary" small v-bind:to="'topics/' + topic.topicId + '/tasks'">{{topic.topicName}}</v-chip>
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
    data() {
        return {
            tasks: [],
            task: [],
            host: process.env.VUE_APP_NINGENME_API_HOST,
            path: process.env.VUE_APP_NINGENME_API_PATH,
            prev_offset: 0,
            offset: 0,
            next_offset: 0,
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
    // updated() {
    //     this.fetchTasks();
    // },
    created() {
        this.fetchTasks();
    },
    methods: {
        fetchTasks() {
            if (this.$route.params.offset) this.offset = Number(this.$route.params.offset);
            if (isNaN(this.offset)) this.offset = 0;
            this.prev_offset = 0;
            if (50 <= this.offset) this.prev_offset = this.offset - 50;
            this.next_offset = this.offset + 50;
            axios
                .get(this.host + this.path + '/tasks?offset=' + this.offset)
                .then(response => (this.tasks = response.data.comproCategoryTaskList))
                .catch(err => {
                    console.log('err:', err);
                })
        },
    },
}
</script>
