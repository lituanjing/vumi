<template>
  <div
    :style="rowStyle"
    class="ym-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmRow",
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  computed: {
    rowStyle () {
      let { gutter } = this
      return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
    }
  },
  mounted () {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style lang="scss" scoped>
.ym-row {
  display: flex;
}
</style>
