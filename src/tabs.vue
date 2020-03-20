<template>
  <div class="ym-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "YmTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (val) {
        return ['horizontal', 'vertical'].indexOf(val) >= 0
      }
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  methods: {
    selectTab () {
      this.$children.forEach(vm => {
        if (vm.$options.name === 'YmTabsHead') {
          vm.$children.forEach(childVm => {
            if (childVm.$options.name === 'YmTabsItem' && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    }
  },
  mounted () {
    this.selectTab()
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  }
}
</script>

<style lang="scss" scoped>
.ym-tabs {}
</style>
