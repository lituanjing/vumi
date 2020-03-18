<template>
  <div @click="xxx" class="ym-tabs-item">
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
  created () {
    this.eventBus.$on('update:selected', (name) => {
      console.log(`tabs-item[${this.name}] accepted ${name}`)
    })
  },
  methods: {
    xxx () {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.ym-tabs-item {}
</style>
