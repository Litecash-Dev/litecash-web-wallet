<template>
  <v-container>
    <div class="d-flex">
      <div>
        <h1>Wallet</h1>
        <online-status />
      </div>
      <v-spacer></v-spacer>
      <v-btn width="115" color="bright-blue">
        <v-icon small class="mr-2">mdi-arrow-down</v-icon>
        receive
      </v-btn>
      <v-btn width="115" color="bright-pink-purple" class="ml-3">
        <v-icon small class="mr-2">mdi-arrow-up</v-icon>
        send
      </v-btn>
    </div>
    <v-row class="my-4">
      <v-col xl="6" lg="6" md="6" sm="12" cols="12">
        <v-card height="200" flat color="dark-blue-light2">
          <v-card-title>Balance</v-card-title>
          <v-card-text>
            <div class="cash-amount display-1 bright-green--text mt-5">
            10,000,000 <span>CASH</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="12" cols="12">
        <v-card height="200" flat color="dark-blue-light2">
          <v-card-title>In progress</v-card-title>
          <v-card-text>
            <div class="px-5 d-flex flex-row justify-space-between text-center">
              <div class="progress-block progress-block-receiving">
                <div class="progress-title">Receiving</div>
                <div class="progress-number">0</div>
                <v-icon large class="progress-icon">mdi-arrow-down-thin-circle-outline</v-icon>
              </div>
              <div class="progress-block progress-block-sending">
                <div class="progress-title">Sending</div>
                <div class="progress-number">0</div>
                <v-icon large class="progress-icon">mdi-arrow-up-thin-circle-outline</v-icon>
              </div>
              <div class="progress-block progress-block-maturing">
                <div class="progress-title">Maturing</div>
                <div class="progress-number">0</div>
                <v-icon large class="progress-icon">mdi-lock-outline</v-icon>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xl="12" lg="12" md="12" sm="12" cols="12">
        <v-card flat color="dark-blue-light2">
          <v-card-title>Transactions</v-card-title>
          <v-data-table
            :headers="transactionHeaders"
            :items="transactions"
            :items-per-page="50"
            class="elevation-1 dark-blue-light2"
          >
            <template v-slot:item.address="{ item }">
              <div :title="item.address">
                {{ item.address }}
              </div>
            </template>
            <template v-slot:item.status="{ item }">
              <div v-if="item.status === 'sent'" class="bright-pink-purple--text">
                <v-icon color="bright-pink-purple">mdi-arrow-up-thin-circle-outline</v-icon>
                {{ item.status }}
              </div>
              <div v-else-if="item.status === 'received'" class="bright-blue--text">
                <v-icon color="bright-blue">mdi-arrow-down-thin-circle-outline</v-icon>
                {{ item.status }}
              </div>
            </template>
            <template v-slot:item.amount="{ item }">
              <div
                :title="item.amount"
                class="transaction-amount bright-blue--text display-1">
                <div class="transaction-amount-prefix" v-if="item.status === 'received'">+</div>
                <div class="transaction-amount-prefix" v-else-if="item.status === 'sent'">-</div>
                {{ item.amount }}
              </div>
            </template>
          </v-data-table>
        </v-card>

      </v-col>
    </v-row>
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
        transactionHeaders: [
          {
            text: 'Date/Time', sortable: true, value: 'datestamp',
          },
          {
            text: 'Address', sortable: true, value: 'address',
          },
          {
            text: 'Amount', sortable: true, value: 'amount',
          },
          {
            text: 'Status', sortable: true, value: 'status',
          },
        ],
      }
    },
    filters: {
      formatDatestamp (value) {
        return value.spit("T").join(" ")
      }
    },
    computed: {
      transactions () {
        return this.$store.state.transactions.map(x => {
          x.datestamp = x.datestamp.split("T").join(" ")
          return x
        })
      }
    },
  }
</script>
<style lang="scss" scoped>
  .online-status {
    font-size: 12px;
  }
  .online-status:before {
    margin-right: 5px;
    border: 5px solid transparent;
    border-radius: 50%;
    background: 0 0;
    content: "";
    display: inline-block;
    height: 10px;
    width: 10px;
  }
  .online-status--online:before {
    border-color: $branding-bright-green;
  }
  .online-status--offline:before {
    border-color: $branding-gray;
  }
  .cash-amount {
    font-weight: normal;
    font-family: Arial !important;
  }
  .cash-amount > span {
    opacity: 0.6;
  }

  .progress-title {
    text-transform: uppercase;
  }
  .progress-number {
    font-size: 1.4rem;
    margin: 10px;
  }
  .progress-block-receiving .progress-number, .progress-block-receiving .progress-icon {
    color: $branding-bright-blue;
  }
  .progress-block-sending .progress-number, .progress-block-sending .progress-icon {
    color: $branding-bright-pink-purple;
  }
  .progress-block-maturing .progress-number, .progress-block-maturing .progress-icon {
    color: $branding-gray;
  }
  .transaction-amount {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 160px;
    height: 45px;
    white-space: nowrap;
  }
  .transaction-amount-prefix {
    display: inline-block;
    // width: 30px;
  }
  tbody {
     tr:hover {
        background-color: transparent !important;
     }
  }
</style>