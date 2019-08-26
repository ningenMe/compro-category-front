<template>
  <v-container>
    <div class="display-1">DomainEdit</div>
      <v-form
      ref="form"
      lazy-validation
      >
        <v-text-field
          v-model="field.name"
          :counter="255"
          label="field"
          outlined
          readonly
        ></v-text-field>

        <v-text-field
          v-model="name"
          :counter="255"
          label="name"
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
          <v-btn rounded color="deep-purple lighten-4" v-bind:to="'/domain/index/'+field.label">もどる</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn rounded color="red accent-3" v-on:click="domainDelete">削除</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn rounded color="light-blue accent-2" v-on:click="domainUpdate">更新</v-btn>
        </v-col>
      </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      field    : this.$store.getters['getField'],
      domain   : null,
      id       : null,
      name     : null,
      order    : null,
      response : [],
      urlPrefixComproCategoryAPI : process.env.VUE_APP_URL_PREFIX_COMPRO_CATEGORY_API,
    }
  },
  watch : {
    domain: function() {
      this.id    = this.domain["id"]
      this.name  = this.domain["name"]
      this.order = this.domain["order"]
    }
  },
  mounted () {
    axios({
      url: this.urlPrefixComproCategoryAPI + '/domains/find/' + +this.$route.params.id,
      method: 'get',
    })
    .then(response => (this.domain = response.data))
  },

  methods : {
    domainDelete : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/api/domains/delete',
        method: 'post',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
        data: {
          'id'  : this.id,
        }
      }).then(response => (
        this.response = response.data))
      this.$router.push('/domain/index/'+this.field.label)
    },
    domainUpdate : function (event) {
      axios({
        url: this.urlPrefixComproCategoryAPI + '/api/domains/update',
        method: 'post',
        headers: {
                   "Authorization" : "Bearer " + this.$store.getters['getAccessToken'], 
        },
        data: {
          'id'        : this.id,
          'fields_id' : this.field.id,
          'name'      : this.name,
          'order'     : this.order, 
        }
      }).then(response => (
        this.response = response.data))
      this.$router.push('/domain/index/'+this.field.label)
    }

  }
  
}
        



</script>