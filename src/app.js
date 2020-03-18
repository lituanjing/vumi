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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'

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
Vue.component('ym-tabs', Tabs)
Vue.component('ym-tabs-head', TabsHead)
Vue.component('ym-tabs-item', TabsItem)
Vue.component('ym-tabs-body', TabsBody)
Vue.component('ym-tabs-pane', TabsPane)

Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    selectedTab: 'tab1'
  },
  mounted () {
  },
  methods: {
  }
})
