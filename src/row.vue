<template>
  <div class="ym-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmRow"
}
</script>

<style lang="scss" scoped>
.ym-row {
  display: flex;
}
</style>
