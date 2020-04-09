const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../../src/tabs'
import TabsHead from '../../src/tabs-head'
import TabsBody from '../../src/tabs-body'
import TabsItem from '../../src/tabs-item'
import TabsPane from '../../src/tabs-pane'

Vue.component('ym-tabs', Tabs)
Vue.component('ym-tabs-head', TabsHead)
Vue.component('ym-tabs-body', TabsBody)
Vue.component('ym-tabs-item', TabsItem)
Vue.component('ym-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected 属性', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <ym-tabs selected="finance">
        <ym-tabs-head>
          <ym-tabs-item name="woman"> 美女 </ym-tabs-item>
          <ym-tabs-item name="finance"> 财经 </ym-tabs-item>
          <ym-tabs-item name="sports"> 体育 </ym-tabs-item>
        </ym-tabs-head>
        <ym-tabs-body>
          <ym-tabs-pane name="woman"> 美女相关资讯 </ym-tabs-pane>
          <ym-tabs-pane name="finance"> 财经相关资讯 </ym-tabs-pane>
          <ym-tabs-pane name="sports"> 体育相关资讯 </ym-tabs-pane>
        </ym-tabs-body>
      </ym-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.ym-tabs-item[data-name="finance"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })

  it('可以接受 direction prop', () => {

  })
})
