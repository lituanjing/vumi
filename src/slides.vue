<template>
  <div class="ym-slides">
    <div ref="window" class="ym-slides-window">
      <div class="ym-slides-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
// https://codesandbox.io/s/floral-snow-k4hqx?file=/src/components/ym-slides.vue
export default {
  name: "YmSlides",
  props: {
    selected: {
      type: String,
    }
  },
  mounted () {
    this.updateChildren()
  },
  updated () {
    this.updateChildren()
  },
  methods: {
    updateChildren () {
      const first = this.$children[0]
      const selected = this.selected || first.name
      this.$children.forEach(vm => {
        vm.selected = selected
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.ym-slides {
  display: inline-block;
  border: 3px solid #333;

  &-wrapper {
    border: 3px solid #cd0000;
    position: relative;
  }
}
</style>
