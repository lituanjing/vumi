<template>
  <div
    :class="colClasses"
    :style="colStyle"
    class="ym-col">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: "YmCol",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    phone: { type: Object, validator, },
    ipad: { type: Object, validator, },
    narrowPc: { type: Object, validator, },
    pc: { type: Object, validator, },
  },
  data () {
    return {
      gutter: 0
    }
  },
  computed: {
    colClasses () {
      const { span, offset, phone, ipad, narrowPc, pc } = this

      return [
        span && `ym-col-${span}`,
        offset && `ym-col-offset-${offset}`,
        ...(phone ? [ `ym-col-phone-${phone.span}`, `ym-col-phone-offset-${phone.offset}`, ] : []),
        ...(ipad ? [ `ym-col-ipad-${ipad.span}`, `ym-col-ipad-offset-${ipad.offset}`, ]: []),
        ...(narrowPc ? [ `ym-col-narrow-pc-${narrowPc.span}`, `ym-col-narrow-pc-offset-${narrowPc.offset}`, ]: []),
        ...(pc ? [ `ym-col-pc-${pc.span}`, `ym-col-pc-offset-${pc.offset}`, ]: []),
      ]
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

  @media (max-width: 576px) {
    $class-prefix: ym-col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: ym-col-phone-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 577px) and (max-width: 768px) {
    $class-prefix: ym-col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: ym-col-ipad-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: ym-col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: ym-col-narrow-pc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }


  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix: ym-col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: ym-col-pc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
