<template>
  <div class="ym-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "YmCollapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array,
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  mounted () {
    this.eventBus.$emit('update:selected', this.selected)

    this.eventBus.$on('update:addSelected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      if (this.single) {
        selectedCopy = [name]
      } else {
        selectedCopy.push(name)
      }
      this.eventBus.$emit('update:selected', selectedCopy)
      this.$emit('update:selected', selectedCopy)
    })
    this.eventBus.$on('update:removeSelected', (name) => {
      const index = this.selected.indexOf(name)
      this.selected.splice(index, 1)
      this.eventBus.$emit('update:selected', this.selected)
      this.$emit('update:selected', this.selected)
    })
  }
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
