<template>
  <div class="ym-cascader">
    <div
      @click="popoverVisible=!popoverVisible"
      class="ym-cascader__trigger">
    </div>
    <div
      v-if="popoverVisible"
      class="ym-cascader__popover">

      <cascader-items :items="source" />

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
  &__trigger {
    height: 32px;
    width: 300px;
    border: 1px solid red;
  }
  &__popover {
    height: 200px;
    border: 1px solid red;
    display: flex;
    &-label {
      white-space: nowrap;
    }
  }
}
</style>
