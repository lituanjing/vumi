<template>
  <div :class="toastClasses" ref="wrapper" class="ym-toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div ref="line" class="line"></div>
    <span
      v-if="closeButton"
      @click="onClickClose"
      class="close">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "YmToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 2.5
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'middle', 'bottom'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    toastClasses () {
      return { [`position-${this.position}`]: true }
    }
  },
  mounted () {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    updateStyles () {
      this.$nextTick(() => {
        this.$refs.line.style.height = this.$refs.wrapper.getBoundingClientRect().height + 'px'
      })
    },
    execAutoClose () {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    onClickClose () {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    },
    log () {
      console.log('测试')
    },
    close () {
      this.$el.remove()
      this.$destroy()
    }
  },
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);

.ym-toast {
  position: fixed;  font-size: $font-size;
  line-height: 1.8; min-height: $toast-height; display: flex; align-items: center;
  border-radius: 4px; background: $toast-bg; box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  color: white; padding: 0 16px;
  left: 50%; transform: translateX(-50%);
  .message {
    padding: 8px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  &.position-top {
    top: 16px;
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.position-bottom {
    bottom: 16px;
  }
}
</style>

