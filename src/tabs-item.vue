<template>
  <div class="ym-tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.ym-tabs-item {}
</style>
