<template>
  <v-container>
    <div class="d-flex">
      <div>
        <h1>Settings</h1>
      </div>
      <v-spacer></v-spacer>
      <div>Version <strong>{{ gitVersion }}</strong></div>
    </div>
    <v-row class="my-4">
      <v-col xl="6" lg="6" md="6" sm="12" cols="12">
        <v-card height="300" flat color="dark-blue-light2">
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
        <v-card height="300" flat color="dark-blue-light2">
          <v-card-title>General settings</v-card-title>
          <v-card-text>
            <v-switch
              v-model="transactionPasswordPrompt"
              label="Ask for password for every sending transaction"
            ></v-switch>
            <v-select
              v-model="lockscreenDuration"
              :items="lockscreenDurationItems"
              label="Lock screen duration"
            ></v-select>
            <v-text-field
              v-model="password"
              label="Change your password"
              placeholder="Change your password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <!-- <v-btn outlined color="primary">
              <v-icon small class="mr-2">mdi-lock</v-icon>
              Change Wallet Password
            </v-btn> -->
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="12" cols="12">
        <v-card height="300" flat color="dark-blue-light2">
          <v-card-title>Local node</v-card-title>
          <v-card-text>
            <v-radio-group
              v-model="localNode"
              rowNA
            >
              <v-radio
                label="Local node"
                value="local-node"
              ></v-radio>
              <v-radio
                label="Peer"
                value="peer"
              ></v-radio>
            </v-radio-group>
            <v-text-field
              v-model="localNodePort"
              label="Local node port"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="12" cols="12">
        <v-card height="300" flat color="dark-blue-light2">
          <v-card-title>Report problem</v-card-title>
          <v-card-text>
            <p>To report a problem:</p>
            <ul>
              <li>Click <strong>Save wallet logs</strong> </li>
              <li>Send to <a href="mailto:support@lite-cash.com">support@lite-cash.com</a> or open a ticket at <a href="http://www.github.com/litecash-dev" target="_blank" rel="noopener noreferrer">Github</a> </li>
              <li>Don't forget to attach the logs or any screenshots</li>
            </ul>
            <v-btn outlined color="bright-blue" light class="mt-5">
              <v-icon small class="mr-2">mdi-content-save</v-icon>
              Save wallet logs
            </v-btn>

          </v-card-text>
          <!-- <v-card-actions>
            <v-btn outlined color="bright-blue" light>Save wallet logs</v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
      <v-col xl="12" lg="12" md="12" sm="12" cols="12" class="text-center">
        <v-btn
          color="bright-blue"
          class="mr-5"
          :disabled="!settingsChanged"
          light>Save changes</v-btn>
        <v-btn
          color="bright-blue"
          class="ml-5"
          :disabled="!settingsChanged"
          light>Undo changes</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { tag } from '@/assets/git-version.json'

  export default {
    name: 'Settings',
    data () {
      return {
        lockscreenDurationItems: [
          { value: 10, text: "10 minutes" },
          { value: 20, text: "20 minutes" },
          { value: 30, text: "30 minutes" },
          { value: 60, text: "60 minutes" },
          { value: 120, text: "120 minutes" }
        ],
        showPassword: false,
        settingsChanged: false,
        gitVersion: tag
      }
    },
    computed: {
      remoteNodeAddress: {
        get () {
          return this.$store.state.settings.remoteNodeAddress
        },
        set (val) {
          this.checkSettingsChanged()
          this.$store.commit("SET_REMOTE_ADDRESS", val)
        }
      },
      localNode: {
        get () {
          return this.$store.state.settings.localNode
        },
        set (val) {
          this.checkSettingsChanged()
          this.$store.commit("SET_LOCAL_NODE", val)
        }
      },
      localNodePort: {
        get () {
          return this.$store.state.settings.localNodePort
        },
        set (val) {
          this.checkSettingsChanged()
          this.$store.commit("SET_LOCAL_NODE_PORT", val)
        }
      },
      password: {
        get () {
          return this.$store.state.settings.walletPassword
        },
        set (val) {
          this.checkSettingsChanged()
          this.$store.commit("SET_WALLET_PASSWORD", val)
        }
      },
      lockscreenDuration: {
        get () {
          return this.$store.state.settings.lockscreenDuration
        },
        set (val) {
          this.checkSettingsChanged()
          this.$store.commit("SET_LOCKSCREEN_DURATION", val)
        }
      },
      transactionPasswordPrompt: {
        get () {
          return this.$store.state.settings.transactionPasswordPrompt
        },
        set (val) {
          this.checkSettingsChanged()
          this.$store.commit("SET_TRANSACTION_PASSWORD_PROMPT", val)
        }
      }
    },
    methods: {
      checkSettingsChanged () {
        this.settingsChanged = true
      }
    },
  }
</script>
<style lang="scss" scoped>
</style>