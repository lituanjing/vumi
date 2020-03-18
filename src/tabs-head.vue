<template>
  <div class="ym-tabs-head">
    <slot></slot>
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
    console.log(this.eventBus)
  }
}
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
.ym-tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
