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
    console.log(this.eventBus)
  }
}
</script>

<style lang="scss" scoped>
.ym-tabs-body {}
</style>
