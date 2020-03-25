<template>
  <div class="ym-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmButtonGroup",
  mounted() {
    for (let node of this.$el.children) {
      const name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`g-button-group 的直接子元素必须是 ym-button, 但你写的是 ${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
.ym-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .ym-button {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }

    &:hover {
      z-index: 1;
    }
  }
}
</style>
