<template>
  <div class="ym-cascader-item">
    <div class="ym-cascader-item__left">
      <div
        v-for="item in items"
        @click="leftSelected=item"
        class="label">
        {{ item.name }}
      </div>
    </div>

    <div
      v-if="rightItems"
      class="ym-cascader-item__right">
      <ym-cascader-items :items="rightItems" />
    </div>
  </div>
</template>

<script>
export default {
  name: "YmCascaderItems",
  props: {
    items: {
      type: Array
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
.ym-cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  &__left {
    border: 1px solid red;
  }

  &__right {
    margin-top: -1px;
  }
}
</style>
