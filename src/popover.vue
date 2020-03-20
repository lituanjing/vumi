<template>
  <div ref="popover" @click="onClick" class="ym-popover">
    <div v-if="visible"
         ref="contentWrapper"
         class="ym-popover-content-wrapper">
        <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "YmPopover",
  data () {
    return {
      visible: false,
    }
  },
  methods: {
    positionContent () {
      document.body.appendChild(this.$refs.contentWrapper)
      const { scrollX, scrollY } = window
      const { width, height, top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = `${left + scrollX}px`
      this.$refs.contentWrapper.style.top = `${top + scrollY}px`
    },
    onClickDocument (ev) {
      if (this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === ev.target || this.$refs.contentWrapper.contains(ev.target))
      ) { return }
      this.close()
    },
    open () {
      this.visible = true
      setTimeout(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      }, 27)
    },
    close () {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick (ev) {
      if (this.$refs.triggerWrapper.contains(ev.target)) {
        if (this.visible) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.ym-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;

  &-content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
}
</style>
