import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Cascader from './cascader'
import Col from './col'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Icon from './icon'
import Input from './input'
import Layout from './layout'
import plugin from './plugin'
import Popover from './popover'
import Row from './row'
import Sider from './sider'
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

Vue.component('ym-button', Button)
Vue.component('ym-button-group', ButtonGroup)
Vue.component('ym-cascader', Cascader)
Vue.component('ym-col', Col)
Vue.component('ym-collapse', Collapse)
Vue.component('ym-collapse-item', CollapseItem)
Vue.component('ym-content', Content)
Vue.component('ym-footer', Footer)
Vue.component('ym-header', Header)
Vue.component('ym-icon', Icon)
Vue.component('ym-input', Input)
Vue.component('ym-layout', Layout)
Vue.component('ym-popover', Popover)
Vue.component('ym-row', Row)
Vue.component('ym-sider', Sider)
Vue.component('ym-tabs', Tabs)
Vue.component('ym-tabs-body', TabsBody)
Vue.component('ym-tabs-head', TabsHead)
Vue.component('ym-tabs-item', TabsItem)
Vue.component('ym-tabs-pane', TabsPane)

Vue.use(plugin)

new Vue({
  el: '#app',
  data () {
    return {
      source: [
        {
          name: '山东',
          children: [
            {
              name: '济南',
              children: [
                { name: '历城' },
                { name: '历下' },
                { name: '高新' },
                { name: '天桥' },
                { name: '市中' },
              ]
            },
            {
              name: '青岛',
              children: [
                { name: '黄岛' },
                { name: '市南' },
              ]
            },
            { name: '泰安' },
          ]
        },
        {
          name: '浙江',
          children: [
            {
              name: '杭州',
              children: [
                { name: '西湖' },
                { name: '上城' },
                { name: '下城' },
                { name: '滨江' },
                { name: '萧山' },
              ]
            },
            { name: '嘉兴' },
            { name: '湖州' },
          ]
        },
        { name: '北京' },
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
})
