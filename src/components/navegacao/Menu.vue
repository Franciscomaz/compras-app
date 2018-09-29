<template v-for="item in items">
    <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
    >
    <v-list-group
            v-model="item.model"
            :key="item.title"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
    >
        <v-list-tile slot="activator">
            <v-list-tile-content>
                <v-list-tile-title>
                    {{ item.title }}
                </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list-group>
    </v-layout>
</template>

<script>
export default {
  name: 'Menu',
  items: [
    { title: 'Dashboard', icon: 'dashboard', path: 'home' },
    { title: 'Exit', icon: 'exit_to_app', path: 'login' }
  ]
}
</script>

<style scoped>

</style>
