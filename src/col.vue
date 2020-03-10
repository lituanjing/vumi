<template>
  <div class="ym-col" :class="[`ym-col-${span}`]">

  </div>
</template>

<script>
export default {
  name: "YmCol",
  props: {
    span: [Number, String]
  }
}
</script>

<style lang="scss" scoped>
.ym-col {
  height: 60px;
  background-color: lightblue;
  border: 1px solid gray;
  width: 50%;

  $class: ym-col-;

  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>
