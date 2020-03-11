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
      const { span, offset, phone, ipad, narrowPc, pc, createClasses } = this

      return [
        ...createClasses({ span, offset }),
        ...createClasses(phone, 'phone-'),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrow-pc-'),
        ...createClasses(pc, 'pc-'),
      ]
    },
    colStyle () {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
  },
  methods: {
    createClasses (obj, str = '') {
      if (!obj) return []
      return [
        obj.span && `ym-col-${str}${obj.span}`,
        obj.offset && `ym-col-${str}offset-${obj.offset}`,
      ]
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

  @media (min-width: 577px) {
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

  @media (min-width: 769px) {
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


  @media (min-width: 993px) {
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
