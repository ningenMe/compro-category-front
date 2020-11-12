<template>
  <v-app>
    <AppHeader/>
    <IndexButton/>
    <Notification/>
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
import Notification from './components/Notification'

export default {
  components: { AppHeader,AppFooter,LoginStatus,IndexButton,Notification },
}
</script>

<style>
span.linkline:hover {
    text-decoration: underline;
}
</style>




