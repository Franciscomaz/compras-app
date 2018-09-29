<template>
  <v-app id="app">
    <dashboard></dashboard>
  </v-app>
</template>

<style>
  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
<script>
import Dashboard from './components/navegacao/Dashboard'

export default {
  components: { Dashboard }
}
</script>
