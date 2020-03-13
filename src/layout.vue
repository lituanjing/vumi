<template>
  <div :class="layoutClass"
       class="ym-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmLayout",
  data () {
    return {
      layoutClass: {
        'hasSider': false
      }
    }
  },
  mounted () {
    this.$children.forEach(vm => {
      const { name } = vm.$options
      if (name === 'YmSider') {
        this.layoutClass.hasSider = true
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.ym-layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &.hasSider {
    flex-direction: row;
  }
}
</style>
