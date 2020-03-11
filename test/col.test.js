const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

  it('存在.', () => {
    expect(Col).to.exist
  })
  it('接收 span 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: 1
      }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('ym-col-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 offset 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: 1
      }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('ym-col-offset-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接收 phone 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        phone: {span: 1, offset: 2}
      }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('ym-col-phone-1')).to.eq(true)
    expect(vm.$el.classList.contains('ym-col-phone-offset-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 ipad 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        ipad: {span: 1, offset: 2}
      }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('ym-col-ipad-1')).to.eq(true)
    expect(vm.$el.classList.contains('ym-col-ipad-offset-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接收 narrow-pc 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        narrowPc: {span: 1, offset: 2}
      }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('ym-col-narrow-pc-1')).to.eq(true)
    expect(vm.$el.classList.contains('ym-col-narrow-pc-offset-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接收 pc 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc: {span: 1, offset: 2}
      }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('ym-col-pc-1')).to.eq(true)
    expect(vm.$el.classList.contains('ym-col-pc-offset-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
})
