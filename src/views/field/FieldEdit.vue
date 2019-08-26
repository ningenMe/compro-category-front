<template>
  <v-container>
    <div class="display-1">Edit</div>
      <v-form
      ref="form"
      lazy-validation
      >
        <v-text-field
          v-model="name"
          :counter="255"
          label="name"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="label"
          :counter="255"
          label="label"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="order"
          label="order"
          outlined
          required
        ></v-text-field>

      </v-form>

      <v-row>
        <v-col
          cols="auto"
          class="mr-auto"
        >
          <v-btn rounded color="deep-purple lighten-4" to="/field/index">もどる</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn rounded color="red accent-3" v-on:click="fieldDelete">削除</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn rounded color="light-blue accent-2" v-on:click="fieldUpdate">更新</v-btn>
        </v-col>
      </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      field    : null,
      id       : null,
      name     : null,
      label    : null,
      order    : null,
      response : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,

    }
  },
  watch : {
    field: function() {
      this.id    = this.field["id"]
      this.name  = this.field["name"]
      this.label = this.field["label"]
      this.order = this.field["order"]
    }
  },
  mounted () {
    axios({
        url: this.urlPrefixComproCategoryAPI + '/fields/find/' + this.$route.params.label,
        method: 'get',
      })
      .then(response => (this.field = response.data))
  },

  methods : {
    fieldDelete : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/api/fields/delete',
        method: 'post',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
        data: {
          'id'  : this.id,
        }
      }).then(response => (
        this.response = response.data))
      this.$router.push('/field/index')
    },
    fieldUpdate : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/api/fields/update',
        method: 'post',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
        data: {
          'id'   : this.id,
          'name' : this.name,
          'label': this.label,
          'order': this.order, 
        }
      }).then(response => (
        this.response = response.data))
      this.$router.push('/field/index')
    }

  }
  
}
        



</script>