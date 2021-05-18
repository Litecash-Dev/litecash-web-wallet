<template>
  <v-app>
    <v-app-bar
      app
      dark
      flat
      color="transparent"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Litecash Logo"
          class="shrink mr-2"
          contain
          src="/img/logo.png"
          transition="scale-transition"
          width="40"
        />
        <div class="logo-title">Web Wallet</div>
      </div>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.breakpoint.smAndDown">
        <v-btn to="/wallet" icon>
          <v-icon>mdi-wallet</v-icon>
        </v-btn>
        <v-btn to="/addresses" icon>
          <v-icon>mdi-clipboard-multiple-outline</v-icon>
        </v-btn>
        <v-btn to="/utxo" icon>
          <v-icon>mdi-swap-vertical</v-icon>
        </v-btn>
        <v-btn to="/settings" icon>
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </template>
      <template v-else>
        <v-btn to="/wallet" text>
          <v-icon>mdi-wallet</v-icon>
          <span class="ml-2">Wallet</span>
        </v-btn>
        <v-btn to="/addresses" text>
          <v-icon>mdi-clipboard-multiple-outline</v-icon>
          <span class="ml-2">Addresses</span>
        </v-btn>
        <v-btn to="/utxo" text>
          <v-icon>mdi-swap-vertical</v-icon>
          <span class="ml-2">UTXO</span>
        </v-btn>
        <v-btn to="/settings" text>
          <v-icon>mdi-cog</v-icon>
          <span class="ml-2">Settings</span>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
  .logo-title {
    text-transform: uppercase;
  }
</style>