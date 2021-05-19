<template>
  <v-container>
    <div class="d-flex">
      <div>
        <h1>Wallet</h1>
        <online-status />
      </div>
    </div>
    <h2 class="mt-5">Receive CASH</h2>
    <v-row class="my-4">
      <v-col xl="8" lg="8" md="8" sm="12" cols="12">
        <v-card flat color="dark-blue-light2">
          <v-card-text>
            <v-text-field
              ref="tf-address"
              v-model="address"
              label="My address"
              class="mb-4"
            ></v-text-field>
            <v-select
              v-model="expiresIn"
              :items="expiresInItems"
              label="Lock screen duration"
              class="mb-4"
            ></v-select>
            <v-text-field
              v-model="amount"
              label="Receive amount (optional)"
              class="mb-4"
            ></v-text-field>
            <v-text-field
              v-model="comment"
              label="Comment (optional)"
              class="mb-4"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xl="4" lg="4" md="4" sm="12" cols="12" :class="$vuetify.breakpoint.smAndDown ? 'text-center' : false">
        <img width="200" :src="require('@/assets/qr-code-dummy.png')" alt="">
      </v-col>
      <v-col xl="12" lg="12" md="12" sm="12" cols="12" class="text-center">
        <p>Send this address to the sender over an external secure channel (to help retain your privacy)</p>
        <div>
          <v-btn class="bright-green mr-4" light @click="copyToClipboard">
            <v-icon small class="mr-2">mdi-content-copy</v-icon>
            Copy
          </v-btn>
          <v-btn class="dark-blue-light2" to="/wallet">
            <v-icon small class="mr-2">mdi-cancel</v-icon>
            Cancel
          </v-btn>
        </div>
      </v-col>
    </v-row>


    <v-snackbar
      v-model="snackbar"
      :timeout="5000"
      color="bright-blue"
      light
    >
      <strong>Address copied!</strong>
    </v-snackbar>

  </v-container>
</template>

<script>
  import OnlineStatus from '@/components/OnlineStatus'

  export default {
    name: 'Wallet',
    components: {
      OnlineStatus,
    },
    data() {
      return {
        snackbar: false,
        address: 'fdjid089sgg98gdsh8fhdsFA708f',
        expiresIn: 12,
        amount: '',
        comment: '',
        expiresInItems: [
          {
            text: '12h', value: 12,
          },
          {
            text: '24h', value: 24,
          },
          {
            text: '48h', value: 48,
          },
          {
            text: 'never', value: -1,
          },
        ],
      }
    },
    computed: {
    },
    methods: {
      copyToClipboard () {
        let el = this.$refs['tf-address'].$el.querySelector('input')
        el.select()
        document.execCommand('copy')
        this.snackbar = true
      }
    },
  }
</script>
<style lang="scss" scoped>
</style>