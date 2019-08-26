<template>
  <v-container>
    <v-row>
      <v-col
        cols="auto"
        class="mr-auto"
      >
        <v-btn rounded color="yellow accent-3" v-if="this.$store.getters['getAccessToken'] != null">{{this.$store.getters['getEmail']}}</v-btn>
      </v-col>
      <v-col cols="auto">
      </v-col>
    </v-row>
  </v-container>
</template>