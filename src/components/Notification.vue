<template>
<v-container>
    <v-card class="mx-auto" outlined>
        <v-card-text class="pb-0">
            <p>
                ningenMeの精進記録。現在{{count}}問。もっと解きましょう。
            </p>
            <p>
                apiをリファクタ中。参照系はおおよそ復活したはず。時々見れないページがある。
            </p>
        </v-card-text>
    </v-card>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            count: 0,
            host: process.env.VUE_APP_NINGENME_API_HOST,
            path: process.env.VUE_APP_NINGENME_API_PATH,
        }
    },
    updated() {
        this.fetchCount();
    },
    mounted() {
        this.fetchCount();
    },
    methods: {
        async fetchCount() {
            axios
                .get(this.host + this.path + '/tasks/count')
                .then(response => (this.count = response.data.count))
                .catch(err => {
                    console.log('err:', err);
                })
        }
    },
}
</script>
