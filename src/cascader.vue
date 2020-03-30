<template>
  <div class="ym-cascader">
    <div
      @click="popoverVisible=!popoverVisible"
      class="ym-cascader__trigger">
    </div>
    <div
      v-if="popoverVisible"
      class="ym-cascader__popover-wrapper">
      <cascader-items
        class="ym-cascader__popover"
        :items="source"
        :height="popoverHeight" />
    </div>
  </div>
</template>

<script>
import CascaderItems from './cascader-items'

export default {
  name: "YmCascader",
  components: {
    CascaderItems,
  },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    }
  },
  data () {
    return {
      popoverVisible: true,
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
@import "var";
.ym-cascader {
  position: relative;
  &__trigger {
    height: 32px;
    width: 300px;
    border: 1px solid black;
  }
  &__popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    display: flex;
    @extend .box-shadow;
    &-label {
      white-space: nowrap;
    }
  }
}
</style>
