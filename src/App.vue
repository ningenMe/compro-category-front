<template>
  <v-app>
    <AppHeader/>
    <router-view/>
    <LoginStatus/>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import LoginStatus from './components/LoginStatus'

export default {
  components: { AppHeader,AppFooter,LoginStatus },
}
</script>

<style>
span.linkline:hover {
    text-decoration: underline;
}
</style>




