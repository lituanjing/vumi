<template>
  <div class="ym-popover" @click.stop="xxx">
    <div v-if="visible" @click.stop class="ym-popover-content-wrapper">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmPopover",
  data () {
    return {
      visible: false
    }
  },
  methods: {
    xxx () {
      this.visible = !this.visible
      console.log('切换 visible')
      if (this.visible) {
        setTimeout(() => {
          console.log('新增 document click 监听器')
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
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>
