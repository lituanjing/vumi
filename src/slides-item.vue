<template>
  <transition name="slide">
    <div v-if="visible" class="ym-slides-item">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "YmSlidesItem",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: '',
    }
  },
  computed: {
    visible () {
      return this.selected === this.name
    }
  }
}
</script>

<style lang="scss" scoped>
.ym-slides-item {
}
.slide-leave-to {
  background: red;
  position: absolute; left: 0; top: 0; }
.slide-enter-active, .slide-leave-active {
  transition: all 1s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
