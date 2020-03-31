<template>
  <div class="ym-cascader">
    <div
      @click="popoverVisible=!popoverVisible"
      class="ym-cascader__trigger">
      {{ result || '&nbsp;' }}
    </div>
    <div
      v-if="popoverVisible"
      class="ym-cascader__popover-wrapper">
      <cascader-items
        :selected="selected"
        :items="source"
        :height="popoverHeight"
        @update:selected="onUpdate"
        class="ym-cascader__popover"/>
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
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      popoverVisible: true,
    }
  },
  computed: {
    result () {
      return this.selected.map(i => i.name).join('/')
    }
  },
  methods: {
    onUpdate (selected) {
      this.$emit('update:selected', selected)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";
.ym-cascader {
  position: relative;
  &__trigger {
    height: $input-height;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    min-width: 10em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
  &__popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
    background: #fff;
    display: flex;
    @extend .box-shadow;
    &-label {
      white-space: nowrap;
    }
  }
}
</style>
