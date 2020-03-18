<template>
  <div class="ym-tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: "YmTabsHead"
}
</script>

<style lang="scss" scoped>
.ym-tabs-head {}
</style>
