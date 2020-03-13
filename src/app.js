import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

Vue.component('ym-button', Button)
Vue.component('ym-icon', Icon)
Vue.component('ym-button-group', ButtonGroup)
Vue.component('ym-input', Input)
Vue.component('ym-row', Row)
Vue.component('ym-col', Col)
Vue.component('ym-layout', Layout)
Vue.component('ym-header', Header)
Vue.component('ym-sider', Sider)
Vue.component('ym-content', Content)
Vue.component('ym-footer', Footer)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    str: 'message'
  },
  methods: {
    toggleStatus (attr) {
      this[attr] = !this[attr]
    },
    inputChange (e) {
      console.log('e')
      console.log(e)
    }
  }
})

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
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
  let spy = chai.spy(function () {})

  vm.$on('click', spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
  vm.$el.remove()
  vm.$destroy()
}
