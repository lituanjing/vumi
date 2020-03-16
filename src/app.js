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
import plugin from './plugin'

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

Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    str: 'message'
  },
  mounted () {
    this.$toast(
      // `<strong>余米'</strong>11111 <a href="https://baidu.com">百度</a>`,
      `我是一行很长很长很长的文本我是一行很长很长很长的文本我是一行很长很长很长的文本我
      是一行很长很长很长的文本我是一行很长很长很长的文本我是一行很长很长很长的文本, 完`,
      {
      // enableHtml: true,
        position: 'bottom',
        closeButton: {
          text: '知道啦',
          callback (toast) {
            toast.log()
            console.log('知道啦 你是真的皮')
          }
        }
      }
    )
  },
  methods: {
    showToast (position) {
      this.$toast('余米' + Math.floor(Math.random() * 1000), { position })
    }
  }
})
