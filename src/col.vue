<template>
  <div
    :class="colClasses"
    :style="colStyle"
    class="ym-col">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmCol",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  },
  data () {
    return {
      gutter: 0
    }
  },
  computed: {
    colClasses () {
      const { span, offset } = this
      return [span && `ym-col-${span}`, offset && `ym-col-offset-${offset}`]
    },
    colStyle () {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ym-col {
  height: 60px;
  width: 50%;
  /*border: 1px solid gray;*/

  $class-prefix: ym-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class-prefix: ym-col-offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
