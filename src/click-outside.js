const onClickDocument = e => {
  const { target } = e

  callbacks.forEach((item) => {
    const { el, callback } = item
    if (target === el || el.contains(target)) { return }
    callback()
  })
}
document.addEventListener('click', onClickDocument)

const callbacks = []

export default {
  bind: (el, binding) => {
    callbacks.push({ el, callback: binding.value })
  }
}

const removeListener = () => {
  document.removeEventListener('click', onClickDocument)
}

export { removeListener }

// <div ref="cascader" class="ym-cascader" v-click-outside="close">
