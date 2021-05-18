<template>
  <v-container>
    <h1>Addresses</h1>
    <online-status />
    <v-row class="my-4">
      <v-col xl="12" lg="12" md="12" sm="12" cols="12">
        <v-tabs
          v-model="tab"
          background-color="transparent"
          grow>
          <v-tab
            v-for="item in tabs"
            :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="mt-5">
          <v-tab-item>
            <v-card flat color="dark-blue-light2">
              <v-data-table
                :headers="addressHeaders"
                :items="addresses"
                :items-per-page="50"
                class="elevation-1 dark-blue-light2"
              >
                <template v-slot:item.address="{ item }">
                  <div :title="item.address">
                    {{ item.address }}
                  </div>
                </template>
              </v-data-table>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat color="dark-blue-light2">
              <v-data-table
                :headers="addressHeaders"
                :items="addresses"
                :items-per-page="50"
                class="elevation-1 dark-blue-light2"
              >
                <template v-slot:item.address="{ item }">
                  <div :title="item.address">
                    {{ item.address }}
                  </div>
                </template>
              </v-data-table>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat color="dark-blue-light2">
              <v-data-table
                :headers="contactHeaders"
                :items="contacts"
                :items-per-page="50"
                class="elevation-1 dark-blue-light2"
              >
                <template v-slot:item.address="{ item }">
                  <div :title="item.address">
                    {{ item.address }}
                  </div>
                </template>
              </v-data-table>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import OnlineStatus from '@/components/OnlineStatus'

  export default {
    name: 'Addresses',
    components: {
      OnlineStatus,
    },
    data() {
      return {
        addressHeaders: [
          {
            text: 'Comment', sortable: true, value: 'comment',
          },
          {
            text: 'Address', sortable: true, value: 'address',
          },
          {
            text: 'Category', sortable: true, value: 'category',
          },
          {
            text: 'Expiration date', sortable: true, value: 'expires',
          },
          {
            text: 'Created', sortable: true, value: 'datecreated',
          },
        ],
        contactHeaders: [
          {
            text: 'Comment', sortable: true, value: 'comment',
          },
          {
            text: 'Address', sortable: true, value: 'address',
          },
          {
            text: 'Category', sortable: true, value: 'category',
          },
          {
            text: 'Created', sortable: true, value: 'datecreated',
          },
        ],
        tab: null
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
      contacts () {
        return this.$store.state.contacts.map(x => {
          x.datecreated = x.datecreated.split("T").join(" ")
          return x
        })
      },
      tabs () {
        return ["My Active Addresses", "My Expired Addresses", "Contacts"]
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