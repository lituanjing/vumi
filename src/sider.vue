<template>
  <transition name="fade">
    <div v-if="visible" class="ym-sider">
      <slot></slot>
      <button @click="visible = false">close</button>
    </div>
  </transition>

</template>

<script>
export default {
  name: "YmSider",
  data () {
    return {
      visible: true
    }
  },
}
</script>

<style lang="scss" scoped>
.ym-sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  margin-left: -200px;
}
</style>
