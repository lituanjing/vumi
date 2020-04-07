<template>
  <div id="app">
    <ym-layout class="demo-layout">
      <ym-sider class="sider">sider</ym-sider>
      <ym-layout>
        <ym-header class="header">header</ym-header>
        <ym-content style="padding: 24px;">
          <ym-button @click="selected=[]"> 清空</ym-button>

          <ym-cascader
            :source.sync="source"
            :selected.sync="selected"/>

          <ym-cascader
            :source.sync="source1"
            :selected.sync="selected"
            :load-data="loadData"/>

          <ym-popover>
            <template>
              <ym-button>点我</ym-button>
            </template>
            <template slot="content">
              弹出内容
            </template>
          </ym-popover>

          <div></div>
          <ym-button> bottom 按钮</ym-button>
        </ym-content>
        <ym-footer class="footer">footer</ym-footer>
      </ym-layout>
    </ym-layout>
  </div>
</template>

<script>
import YmButton from './button'
import YmButtonGroup from './button-group'
import YmCascader from './cascader'
import YmCol from './col'
import YmCollapse from './collapse'
import YmCollapseItem from './collapse-item'
import YmContent from './content'
import YmFooter from './footer'
import YmHeader from './header'
import YmIcon from './icon'
import YmInput from './input'
import YmLayout from './layout'
import YmPopover from './popover'
import YmRow from './row'
import YmSider from './sider'
import YmTabs from './tabs'
import YmTabsBody from './tabs-body'
import YmTabsHead from './tabs-head'
import YmTabsItem from './tabs-item'
import YmTabsPane from './tabs-pane'
import db from './db'
import { removeListener } from './click-outside'

function ajax (parentId = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id === parentId)
      result.forEach(node => {
        node.isLeaf = db.filter(item => item.parent_id === node.id).length <= 0;
      })
      resolve(result)
    }, 30)
  })
}

export default {
  name: "demo",
  components: {
    YmButton,
    YmButtonGroup,
    YmCascader,
    YmCol,
    YmCollapse,
    YmCollapseItem,
    YmContent,
    YmFooter,
    YmHeader,
    YmIcon,
    YmInput,
    YmLayout,
    YmPopover,
    YmRow,
    YmSider,
    YmTabs,
    YmTabsBody,
    YmTabsHead,
    YmTabsItem,
    YmTabsPane,
  },
  data () {
    return {
      source: [],
      source1: [],
      selected: []
    }
  },
  created () {
    // removeListener()
    this.source = [
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

    ajax(0).then(res => {
      this.source1 = res
    })
  },
  methods: {
    xxx (selected) {
      // const { id } = selected[0]
      // ajax(id).then(res => {
      //   const lastLevelSelected = this.source.filter(item => item.id === id)[0]
      //   this.$set(lastLevelSelected, 'children', res)
      // })
    },
    loadData (item, updateSource) {
      const { name, id, parent_id } = item
      ajax(id).then(res => {
        updateSource(res)
      })
    },
  },
}
</script>

<style scoped>

.demo-layout {
  height: 100vh;
}

.sider {
  background: #333;
  width: 200px;
}

.header {
  background: #999;
  height: 100px;
}

.footer {
  background: #ccc;
  height: 50px;
}
</style>
