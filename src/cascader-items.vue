<template>
  <div class="ym-cascader-item" :style="{ height }">
    <div class="ym-cascader-item__left">
      <div
        v-for="item in items"
        @click="onClickLabel(item)"
        class="ym-cascader-item__left-label">
        <span class="ym-cascader-item__left-label__name">{{ item.name }}</span>

        <span class="ym-cascader-item__icons">
          <template v-if="item.name === loadingItem.name">
            <ym-icon class="ym-cascader-item__icon-loading" name="loading"/>
          </template>
          <template v-else>
            <ym-icon v-if="rightArrowVisible(item)" name="right"/>
          </template>
        </span>
      </div>
    </div>

    <div
      v-if="rightItems"
      class="ym-cascader-item__right">
      <ym-cascader-items
        :level="level+1"
        :items="rightItems"
        :selected="selected"
        :height="height"
        :load-data="loadData"
        :loading-item="loadingItem"
        @update:selected="onUpdateSelected"
      />
    </div>
  </div>
</template>

<script>
import YmIcon from './icon'

export default {
  name: "YmCascaderItems",
  components: {
    YmIcon,
  },
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    },
    loadData: {
      type: Function,
    },
    loadingItem: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
    }
  },
  computed: {
    rightItems () {
      const { selected, level, items } = this
      if (selected &&selected[level]) {
        let currentSelected = items.filter(item => item.name === selected[level].name)[0]
        if (currentSelected && currentSelected.children) {
          return currentSelected.children
        }
      }
      return null
    },
  },
  methods: {
    rightArrowVisible (item) {
      return this.loadData ? !item.isLeaf : item.children
    },
    onClickLabel (item) {
      const { selected, level } = this
      let copy = [...selected]
      copy[level] = item
      copy.splice(level + 1)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";
.ym-cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 180px;
  max-height: 180px;

  &__left {
    overflow: auto;
    height: 100%;
    padding: .3em 0;

    &-label {
      padding: .5em 1em;
      display: flex;
      align-items: center;
      cursor: pointer;
      white-space: nowrap;

      &:hover {
        background: $grey;
      }

      .ym-cascader-item__left-label__name {
        margin-right: .3em;
        user-select: none;
      }

      > .ym-cascader-item__icons {
        margin-left: auto;
        transform: scale(0.7);
        .ym-cascader-item__icon-loading {
          animation: spin .8s linear infinite;
        }
      }
    }
  }

  &__right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
}
</style>
