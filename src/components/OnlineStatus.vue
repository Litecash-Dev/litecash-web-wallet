<template>
<div>
  <div
    v-if="status === 'online'"
    class="online-status online-status--online">online</div>
  <div
    v-else-if="status === 'offline'"
    class="online-status online-status--offline">offline</div>
</div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    computed: {
      status () {
        return this.$store.state.onlineStatus
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
</style>