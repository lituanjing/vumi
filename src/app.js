import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('ym-button', Button)
Vue.component('ym-icon', Icon)
Vue.component('ym-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
  },
  methods: {
    toggleStatus (attr) {
      this[attr] = !this[attr]
    }
  }
})

// 单元测试
import chai from 'chai'
const expect = chai.expect

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })
  // vm.$mount('#test')
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#icon-settings')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  // vm.$mount('#test')
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loading')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })

  const div = document.createElement('div')
  document.body.appendChild(div)
  vm.$mount(div)
  let svgElement = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svgElement)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })

  const div = document.createElement('div')
  document.body.appendChild(div)
  vm.$mount(div)
  let svgElement = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svgElement)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount()
  vm.$on('click', function () {
    // 期望函数被执行
  })
  let button = vm.$el
  button.click()
  vm.$el.remove()
  vm.$destroy()
}
