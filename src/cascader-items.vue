<template>
  <div class="ym-cascader-item" :style="{ height }">
    <div class="ym-cascader-item__left">
      <div
        v-for="item in items"
        @click="leftSelected=item"
        class="ym-cascader-item__left-label">
        {{ item.name }}

        <ym-icon v-if="item.children" name="right"/>
      </div>
    </div>

    <div
      v-if="rightItems"
      class="ym-cascader-item__right">
      <ym-cascader-items :items="rightItems" :height="height" />
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
    }
  },
  data () {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems () {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      }
      return null
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
  height: 111px;

  &__left {
    height: 100%;
    padding: .3em 0;

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
  }
}
</style>
