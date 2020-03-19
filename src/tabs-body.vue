<template>
  <div class="ym-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmTabsBody",
  inject: ['eventBus'],
  created () {
  }
}
</script>

<style lang="scss" scoped>
.ym-tabs-body {}
</style>
