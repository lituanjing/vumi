<template>
  <div class="ym-toast-wrapper" :class="toastClasses">
    <div  ref="toast" class="ym-toast">
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
        this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
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
      this.$emit('close')
      this.$destroy()
    }
  },
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-duration: 300ms;

@keyframes slide-down {
  0% { opacity: 0; transform: translateY(-60%) }
  100% { opacity: 1; transform: translateY(0) }
}

@keyframes slide-up {
  0% { opacity: 0; transform: translateY(60%) }
  100% { opacity: 1; transform: translateY(0) }
}

@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.ym-toast-wrapper {
  position: fixed; left: 50%; transform: translateX(-50%);


  &.position-top {
    top: 16px;
    .ym-toast {
      animation: slide-down $animation-duration linear;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .ym-toast {
      animation: fade-in $animation-duration linear;
    }
  }
  &.position-bottom {
    bottom: 16px;
    .ym-toast {
      animation: slide-up $animation-duration;
    }
  }
}

.ym-toast {
  font-size: $font-size;
  line-height: 1.8; min-height: $toast-height; display: flex; align-items: center;
  border-radius: 4px; background: $toast-bg; box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  color: white; padding: 0 16px;

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
}
</style>

