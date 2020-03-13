<template>
  <div class="ym-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmContent"
}
</script>

<style lang="scss" scoped>
.ym-content {
  flex-grow: 1;
}
</style>
