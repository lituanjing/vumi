<template>
  <div @click="open=!open" class="ym-collapse-item">
    <div class="ym-collapse-item__title">
      {{ title }}
    </div>
    <div v-if="open" class="ym-collapse-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "YmCollapseItem",
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  data () {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss" scoped>
$gray: rgba(153,153,153,1);
$border-radius: 4px;

.ym-collapse-item {
  &__title {
    border: 1px solid $gray;
    margin: -1px -1px 0 -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 .5em;
  }
  &:first-child {
    .ym-collapse-item__title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    .ym-collapse-item__title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  &__content {
    padding: .5em;
  }
}
</style>
