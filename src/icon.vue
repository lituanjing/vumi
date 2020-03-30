<template>
  <svg class="ym-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
import "./svg"
export default {
  name: "YmIcon",
  props: ['name']
}
</script>

<style lang="scss" scoped>
.ym-icon {
  width: 1em;
  height: 1em; }
</style>
