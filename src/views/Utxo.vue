<template>
  <v-container>
    <div class="d-flex">
      <div>
        <h1>UTXO</h1>
        <online-status />
      </div>
      <v-spacer></v-spacer>
      <v-card class="dark-blue-light2 ml-2 mr-2">
        <v-card-title>Blockchain Height</v-card-title>
        <v-card-text class="bright-blue--text" style="font-size:1.1rem">10563803</v-card-text>
      </v-card>
      <v-card class="dark-blue-light2">
        <v-card-title>Last block hash</v-card-title>
        <v-card-text class="bright-blue--text" style="font-size:1.1rem">10563803</v-card-text>
      </v-card>
    </div>
    <v-row class="my-4">
      <v-col xl="12" lg="12" md="12" sm="12" cols="12">
        <v-card flat color="dark-blue-light2">
          <v-data-table
            :headers="utxoHeaders"
            :items="utxo"
            :items-per-page="50"
            class="elevation-1 dark-blue-light2"
          >
            <template v-slot:item.status="{ item }">
              <div :title="item.status" class="bright-blue--text">
                {{ item.status }}
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
    name: 'Utxo',
    components: {
      OnlineStatus,
    },
    data () {
      return {
        utxoHeaders: [
          {
            text: 'Amount', sortable: true, value: 'amount',
          },
          {
            text: 'Maturity', sortable: true, value: 'maturity',
          },
          {
            text: 'Status', sortable: true, value: 'status',
          },
          {
            text: 'Type', sortable: true, value: 'type',
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
      addresses () {
        return this.$store.state.addresses.map(x => {
          x.datecreated = x.datecreated.split("T").join(" ")
          return x
        })
      },
      utxo () {
        return this.$store.state.utxo
      },
    },
  }
</script>
<style lang="scss" scoped>
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