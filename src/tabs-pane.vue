<template>
  <div v-if="active" :class="classes" class="ym-tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "YmTabsPane",
  props: {
    name: {
      type: Number | String,
      required: true,
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
        active: this.active
      }
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  }
}
</script>

<style lang="scss" scoped>
.ym-tabs-pane {
  &.active {
    background: red;
  }
}
</style>
