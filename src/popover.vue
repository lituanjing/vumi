<template>
  <div class="ym-popover" @click="xxx">
    <div v-if="visible" class="ym-popover-content-wrapper">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmPopover",
  data () {
    return {
      visible: false
    }
  },
  methods: {
    xxx () {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.ym-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;

  &-content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>
