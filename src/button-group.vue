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
.ym-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .ym-button {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    &:hover {
      z-index: 1;
    }
  }
}
</style>
