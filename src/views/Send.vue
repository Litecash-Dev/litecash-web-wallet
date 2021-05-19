<template>
  <v-container>
    <div class="d-flex">
      <div>
        <h1>Wallet</h1>
        <online-status />
      </div>
    </div>
    <h2 class="mt-5">Send CASH</h2>
    <v-row class="my-4">
      <v-col xl="8" lg="8" md="8" sm="12" cols="12">
        <v-card flat color="dark-blue-light2">
          <v-card-text>
            <v-text-field
              ref="tf-address"
              v-model="address"
              label="Send to address"
              class="mb-4"
            ></v-text-field>
            <v-text-field
              v-model="amount"
              NAprefix="CASH"
              label="Transaction amount (CASH)"
              type="number"
              :rules="rules"
              :max="balance"
              @blur="checkInput"
              class="mb-4"
            ></v-text-field>
            <v-text-field
              v-model="fees"
              label="Transaction fees (CSATS)"
              :max="balance"
              @blur="checkInput"
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
      <v-col xl="4" lg="4" md="4" sm="12" cols="12">
        <!-- <img width="200" :src="require('@/assets/qr-code-dummy.png')" alt=""> -->
        <v-card flat color="dark-blue-light2">
          <v-card-text class="gray--text subtitle-1">
            Balance: {{ balance }}
          </v-card-text>
          <v-card-text class="gray--text subtitle-1">
            Remaining: {{ remaining }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xl="12" lg="12" md="12" sm="12" cols="12" class="text-center">
        <p>Double check that the address you have is correct!</p>
        <div>
          <v-btn class="bright-green mr-4" light @click="sendTransaction">
            <v-icon small class="mr-2">mdi-send</v-icon>
            Send
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
        amount: 0,
        fees: 10,
        comment: '',
        rules: [
          value => !!value || 'Required.',
          value => value < this.balance || 'Max balance is ' + this.balance,
        ],
      }
    },
    computed: {
      balance () {
        return this.$store.state.balance
      },
      remaining () {
        return this.balance - this.amount - this.fees
      }
    },
    methods: {
      checkInput () {
        if ((this.amount + this.fees) >= this.balance) {
          this.amount = this.balance - this.fees
        }
      },
      sendTransaction () {
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