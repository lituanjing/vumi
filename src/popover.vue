<template>
  <div ref="popover" class="ym-popover">
    <div v-if="visible"
         :class="{[`ym-popover-position-${position}`]: true}"
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
  props: {
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator (value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    },
  },
  data () {
    return {
      visible: false,
    }
  },
  computed: {
    openEvent () {
      return this.trigger === 'click' ? 'click' : 'mouseenter'
    },
    closeEvent () {
      return this.trigger === 'click' ? 'click' : 'mouseleave'
    },
  },
  mounted () {
    if (this.trigger ===  'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener(this.openEvent, this.open)
      this.$refs.popover.addEventListener(this.closeEvent, this.close)
    }
  },
  beforeDestroy () {
    if (this.trigger ===  'click') {
      this.$refs.popover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popover.removeEventListener(this.openEvent, this.open)
      this.$refs.popover.removeEventListener(this.closeEvent, this.close)
    }
  },
  methods: {
    positionContent () {
      const { scrollX, scrollY } = window
      const { $refs: { contentWrapper, triggerWrapper }, position } = this
      document.body.appendChild(contentWrapper)
      const { width, height, top, left } = triggerWrapper.getBoundingClientRect()
      const { height: selfHeight } = contentWrapper.getBoundingClientRect()
      const positions = {
        top: { top: top + scrollY, left: left + scrollX, },
        bottom: { top: top + height + scrollY, left: left + scrollX, },
        left: {
          top: top + (height - selfHeight) / 2 + scrollY,
          left: left + scrollX,
        },
        right: {
          top: top + (height - selfHeight) / 2 + scrollY,
          left: left + width + scrollX,
        },
      }
      contentWrapper.style.left = `${positions[position].left}px`
      contentWrapper.style.top = `${positions[position].top}px`
    },
    onClickDocument (ev) {
      if (this.$refs.popover &&
        (this.$refs.popover === ev.target || this.$refs.popover.contains(ev.target))
      ) { return }
      if (this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === ev.target || this.$refs.contentWrapper.contains(ev.target))
      ) { return }
      this.close()
    },
    open () {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
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
}
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;

.ym-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;

  &-content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);*/
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: #fff;

    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;

    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }

    &.ym-popover-position-top {
      transform: translateY(-100%);
      margin-top: -10px;

      &::before, &::after {
        left: 10px;
        border-bottom: 0;
      }
      &::before {
        border-top-color: #000;
        top: 100%;
      }
      &::after {
        border-top-color: #fff;
        top: calc(100% - 1px);
      }
    }
    &.ym-popover-position-bottom {
      margin-top: 10px;
      &::before, &::after {
        left: 10px;
        border-top: 0;
      }
      &::before {
        border-bottom-color: #000;
        bottom: 100%;
      }
      &::after {
        border-bottom-color: #fff;
        bottom: calc(100% - 1px);
      }
    }
    &.ym-popover-position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after {
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-right: 0;
      }
      &::before {
        border-left-color: #000;
      }
      &::after {
        border-left-color: #fff;
        left: calc(100% - 1px);
      }
    }
    &.ym-popover-position-right {
      margin-left: 10px;
      &::before, &::after {
        top: 50%;
        transform: translateY(-50%);
        right: 100%;
        border-left: 0;
      }
      &::before {
        border-right-color: #000;
      }
      &::after {
        border-right-color: #fff;
        right: calc(100% - 1px);
      }
    }
  }
}
</style>
