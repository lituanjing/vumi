<template>
  <div class="ym-cascader-item">
    {{ sourceItem.name }}
    <ym-cascader-item
      v-if="sourceItem.children && sourceItem.children.length>0"
      v-for="item in sourceItem.children"
      :source-item="item"
    />
  </div>
</template>

<script>
export default {
  name: "YmCascaderItem",
  props: {
    sourceItem: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.ym-cascader-item {
  border: 1px solid red;
  margin: 10px;
}
</style>
