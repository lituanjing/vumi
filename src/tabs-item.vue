<template>
  <div :class="classes" :data-name="name" @click="onClick" class="ym-tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  inject: ['eventBus'],
  data () {
    return {
      active: false
    }
  },
  computed: {
    classes () {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created () {
    if (this.eventBus) {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    }
  },
  methods: {
    onClick () {
      if (this.disabled) return
      this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: #1989fa;
$disabled-text-color: rgba(0, 0, 0, 0.25);
.ym-tabs-item {
  flex-shrink: 0;
  padding: 0 2em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>
