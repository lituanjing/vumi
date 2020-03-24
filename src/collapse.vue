<template>
  <div class="ym-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmCollapse"
}
</script>

<style lang="scss" scoped>
$gray: rgba(153,153,153,1);
$border-radius: 4px;

.ym-collapse {
  border: 1px solid $gray;
  border-radius: $border-radius;
}

</style>
