<template>
  <div
    :class="[span && `ym-col-${span}`, offset && `ym-col-offset-${offset}`]"
    :style="{ paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px' }"
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
  }
}
</script>

<style lang="scss" scoped>
.ym-col {
  height: 60px;
  border: 1px solid gray;
  width: 50%;

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
