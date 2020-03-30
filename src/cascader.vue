<template>
  <div class="ym-cascader">
    <div class="ym-cascader__trigger">
      <slot></slot>
    </div>
    <div class="ym-cascader__popover">
      <div v-for="item in source">
        <cascader-item :source-item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascader-item'

export default {
  name: "YmCascader",
  components: {
    CascaderItem,
  },
  props: {
    source: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";
.ym-cascader { }
</style>
