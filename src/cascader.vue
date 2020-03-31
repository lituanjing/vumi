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
        @update:selected="onUpdateSelected"
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
    },
    loadData: { type: Function }
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
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
      const lastItem = newSelected[newSelected.length - 1]
      const simplest = (children, id) => children.filter(item => item.id === id)[0]
      const complex = (children, id) => {
        let noChildren = []
        let hasChildren = []
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item)
          } else {
            noChildren.push(item)
          }
        })
        let found = simplest(noChildren, id)
        if (found) {
          return found
        } else {
          let found = simplest(hasChildren, id)
          if (found) {
            return found
          } else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id)
              if (found) {
                return found
              }
            }
            return undefined
          }
        }
      }

      let updateSource = (res) => {
        let copy = JSON.parse(JSON.stringify(this.source))
        let toUpdate = complex(copy, lastItem.id)
        toUpdate.children = res
        this.$emit('update:source', copy)
      }
      this.loadData(lastItem, updateSource)
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
