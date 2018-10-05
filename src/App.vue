<template>
  <v-app id="app">
    <notifications position="top right"></notifications>
    <dashboard></dashboard>
  </v-app>
</template>

<style>
</style>
<script>
import Dashboard from './components/navegacao/Dashboard'

export default {
  components: { Dashboard }
}
</script>
