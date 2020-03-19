<template>
  <div class="ym-tabs-head">
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
  created () {
    this.eventBus.$on('update:selected', (name, vm) => {
      console.log(name)
      console.log(vm)
    })
  }
}
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
$blue: #1989fa;
.ym-tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  border: 1px solid red;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    width: 100px;
    border-bottom: 1px solid $blue;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
