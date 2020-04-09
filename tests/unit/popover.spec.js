import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
import Popover from '@/popover'
chai.use(sinonChai)

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })

  xit('可以设置position.', (done) => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: `<button>点我</button>`, },
        content: '<span>弹出内容</span>'
      },
      propsData: {
        position: 'bottom'
      }
    })
    wrapper.find('button').trigger('click')
    console.log(document.body.outerHTML)
    wrapper.vm.$nextTick(() => {
      // wrapper.destroy()
      done()
    })
  })
  xit('可以设置 trigger', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <ym-popover trigger="hover" ref="a">
      <template slot="content">
      弹出内容
      </template>
      <button>点我</button>
    </ym-popover>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      let event = new Event('mouseenter');
      vm.$el.dispatchEvent(event)
      vm.$nextTick(() => {
        const {contentWrapper} = vm.$refs.a.$refs
        expect(contentWrapper).to.exist
        done()
      })
    }, 200)

  })
})
