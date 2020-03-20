<template>
  <div class="ym-popover" @click.stop="xxx">
    <div v-if="visible"
         ref="contentWrapper"
         @click.stop
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
    xxx () {
      this.visible = !this.visible
      console.log('切换 visible')
      if (this.visible) {
        setTimeout(() => {
          document.body.appendChild(this.$refs.contentWrapper)
          console.log('新增 document click 监听器')
          console.log(this.$refs.triggerWrapper)
          const { scrollX, scrollY } = window
          const { width, height, top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
          console.log( width, height, top, left )
          this.$refs.contentWrapper.style.left = `${left + scrollX}px`
          this.$refs.contentWrapper.style.top = `${top + scrollY}px`

          let eventHandler = () => {
            console.log('document 隐藏 popover')
            this.visible = false
            console.log('删除监听器')
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
        }, 27)
      } else {
        console.log('vm 隐藏 popover')
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
