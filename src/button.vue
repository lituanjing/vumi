<template>
  <button class="ym-button" :class="{ [`ym-icon-${iconPosition}`]: true }">
    <svg v-if="icon" class="ym-icon">
      <use :xlink:href=`#icon-${icon}`></use>
    </svg>
    <div class="ym-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "YmButton",
  props: ['icon', 'iconPosition']
}
</script>

<style lang="scss" scoped>
.ym-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .ym-icon {
    order: 1;
    margin-right: .1em;
  }

  > .ym-button-content {
    order: 2;
  }

  &.ym-icon-right {
    > .ym-button-content {
      order: 1;
    }

    > .ym-icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
  }
}
</style>
