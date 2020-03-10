<template>
  <div
    :class="rowClasses"
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
    },
    align: {
      type: String,
      validator (value) {
        return ['left', 'right', 'center'].includes(value)
      }
    }
  },
  computed: {
    rowClasses () {
      const { align } = this
      return [
        align && `ym-row-align-${align}`
      ]
    },
    rowStyle () {
      const { gutter } = this
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
  &.ym-row-align-left {
    justify-content: flex-start;
  }
  &.ym-row-align-right {
    justify-content: flex-end;
  }
  &.ym-row-align-center {
    justify-content: center;
  }
}
</style>
