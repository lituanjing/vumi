<template>
  <button
    :class="{ [`ym-icon-${iconPosition}`]: true }"
    @click="$emit('click')"
    class="ym-button">
    <ym-icon v-if="loading" class="ym-button-icon-loading" name="loading"></ym-icon>
    <ym-icon v-if="icon && !loading" :name="icon"> </ym-icon>
    <div class="ym-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import YmIcon from './icon'
export default {
  name: "YmButton",
  components: {
    YmIcon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (val) {
        return val === 'left' || val === 'right'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}
.ym-button {
  font-size: var(--font-size);
  min-height: var(--button-height);
  padding: .5em 1em;
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

  &-icon-loading {
    animation: spin .8s linear infinite;
  }
}
</style>
