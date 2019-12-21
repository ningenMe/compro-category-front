<template>
  <v-app>
    <AppHeader/>
    <IndexButton/>
    <router-view/>
    <LoginStatus/>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import LoginStatus from './components/LoginStatus'
import IndexButton from './components/IndexButton'

export default {
  components: { AppHeader,AppFooter,LoginStatus,IndexButton },
}
</script>

<style>
span.linkline:hover {
    text-decoration: underline;
}
</style>




