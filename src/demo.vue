<template>
  <div id="app">
    <ym-layout class="demo-layout">
      <ym-sider class="sider">sider</ym-sider>
      <ym-layout>
        <ym-header class="header">header</ym-header>
        <ym-content style="padding: 24px;">
          <ym-button @click="selected=[]"> 清空</ym-button>
          {{ selected && selected[0] && selected[0].name || '空' }}
          {{ selected && selected[1] && selected[1].name || '空' }}
          {{ selected && selected[2] && selected[2].name || '空' }}

          <ym-cascader
            :source.sync="source"
            :selected.sync="selected"
            :load-data="loadData"
            @update:selected="xxx"/>

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

function ajax (parentId = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = db.filter(item => item.parent_id === parentId)
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
      selected: []
    }
  },
  created () {
    ajax(0).then(res => {
      this.source = res
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
  }
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
