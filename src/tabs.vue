<template>
  <div class="ym-tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (val) {
        return ['horizontal', 'vertical'].indexOf(val) >= 0
      }
    }
  },
  created () {
    // this.$emit('update:selected', 'xxx')
  }
}
</script>

<style lang="scss" scoped>
.ym-tabs {}
</style>
