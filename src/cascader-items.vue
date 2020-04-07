<template>
  <div class="ym-cascader-item" :style="{ height }">
    <div class="ym-cascader-item__left">
      <div
        v-for="item in items"
        @click="onClickLabel(item)"
        class="ym-cascader-item__left-label">
        {{ item.name }}

        <ym-icon v-if="item.children" name="right"/>
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
    }
  },
  methods: {
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
  min-height: 111px;
  max-height: 180px;

  &__left {
    height: 100%;
    padding: .3em 0;
    overflow: auto;

    &-label {
      padding: .3em 1em;
      display: flex;
      align-items: center;

      > .ym-icon {
        margin-left: .25em;
        transform: scale(0.75);
      }
    }
  }

  &__right {
    height: 100%;
    border-left: 1px solid $border-color-light;
    overflow: auto;
  }
}
</style>
