<template>
  <div :class="{'ym-input-error': error}" class="ym-input-wrapper" >
    <input :value="value"
           :disabled="disabled"
           :readonly="readonly"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
           type="text"
           class="ym-input">
    <template v-if="error">
      <ym-icon name="error" class="icon-error"></ym-icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import YmIcon from './icon'
export default {
  name: "YmInput",
  components: {
    YmIcon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";

.ym-input-wrapper {
  display: inline-flex;
  align-items: center;
  font-size: $font-size;

  > :not(:last-child) {
    margin-right: .5em;
  }

  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }

    &[disabled], &[readonly] {
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }

  &.ym-input-error {
    > input {
      border-color: $red;
    }
    .icon-error {
      fill: $red;
    }
    .error-message {
      color: $red;
    }
  }
}
</style>
