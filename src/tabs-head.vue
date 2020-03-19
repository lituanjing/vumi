<template>
  <div ref="head" class="ym-tabs-head">
    <slot></slot>
    <div ref="line" class="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "YmTabsHead",
  inject: ['eventBus'],
  mounted () {
    this.eventBus.$on('update:selected', (name, vm) => {
      let { width, left } = vm.$el.getBoundingClientRect()
      let { left: headLeft } = this.$refs.head.getBoundingClientRect()
      this.$refs.line.style.width = `${ width }px`
      // this.$refs.line.style.transform = `translateX(${ left }px)`
      this.$refs.line.style.left = `${ left - headLeft }px`
    })
  }
}
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
$blue: #1989fa;
$border-color: #ddd;
.ym-tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    width: 100px;
    border-bottom: 2px solid $blue;
    transition: all .3s;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
  }
}
</style>
