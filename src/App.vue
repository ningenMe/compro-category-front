<template>
  <v-app>
    <AppHeader/>
    <router-view/>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  components: { AppHeader,AppFooter },
}
</script>

<style>
span.linkline:hover {
    text-decoration: underline;
}
</style>




