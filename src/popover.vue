<template>
  <div ref="popover" @click="onClick" class="ym-popover">
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
    }
  },
  data () {
    return {
      visible: false,
    }
  },
  methods: {
    positionContent () {
      const {
        $refs: { contentWrapper, triggerWrapper }
      } = this
      document.body.appendChild(contentWrapper)
      const { scrollX, scrollY } = window
      const { width, height, top, left } = triggerWrapper.getBoundingClientRect()
      const { height: selfHeight } = contentWrapper.getBoundingClientRect()
      if (this.position === 'top') {
        contentWrapper.style.left = `${left + scrollX}px`
        contentWrapper.style.top = `${top + scrollY}px`
      } else if (this.position === 'bottom') {
        contentWrapper.style.left = `${left + scrollX}px`
        contentWrapper.style.top = `${top + height + scrollY}px`
      } else if (this.position === 'left') {
        contentWrapper.style.left = `${left + scrollX}px`
        contentWrapper.style.top = `${top + (height - selfHeight) / 2 + scrollY}px`
      } else if (this.position === 'right') {
        const { height: selfHeight } = contentWrapper.getBoundingClientRect()
        contentWrapper.style.left = `${left + width + scrollX}px`
        contentWrapper.style.top = `${top + (height - selfHeight) / 2 + scrollY}px`
      }
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
