<template>
  <v-container>
    <div class="d-flex">
      <div>
        <h1>Settings</h1>
      </div>
      <v-spacer></v-spacer>
      <div>Version 0.0.1</div>
    </div>
    <v-row class="my-4">
      <v-col xl="6" lg="6" md="6" sm="12" cols="12">
        <v-card flat color="dark-blue-light2">
          <v-card-title>Remote Node</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="remoteNodeAddress"
              label="IP:Port"
              placeholder="explorer.lite-cash.com:10000"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="12" cols="12">
        <v-card flat color="dark-blue-light2">
          <v-card-title>General settings</v-card-title>
          <v-card-text>aaaaaaa</v-card-text>
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="12" cols="12">
        <v-card flat color="dark-blue-light2">
          <v-card-title>Local node</v-card-title>
          <v-card-text>aaaaaaa</v-card-text>
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="12" cols="12">
        <v-card flat color="dark-blue-light2">
          <v-card-title>Report problem</v-card-title>
          <v-card-text>aaaaaaa</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Settings',
    data () {
      return {
      }
    },
    computed: {
      remoteNodeAddress: {
        get () {
          return this.$store.state.settings.remoteNodeAddress
        },
        // set () {
        //   this.$stire
        // }
      }
    },
  }
</script>
<style lang="scss" scoped>
</style>