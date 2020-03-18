<template>
  <div class="ym-tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmTabsPane",
  props: {
    name: {
      type: Number | String,
      required: true,
    }
  },
  inject: ['eventBus'],
  created () {
    this.eventBus.$on('update:selected', (name) => {
      console.log(`tabs-pane[${this.name}] accepted ${name}`)
    })
  }
}
</script>

<style lang="scss" scoped>
.ym-tabs-pane {}
</style>
