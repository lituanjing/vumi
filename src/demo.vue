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

          <ym-cascader :source="source" :selected.sync="selected"></ym-cascader>

          <ym-button> bottom 按钮</ym-button>

        </ym-content>
        <ym-footer class="footer">footer</ym-footer>
      </ym-layout>
    </ym-layout>
  </div>
</template>

<script>
import plugin from './plugin'
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

console.log(db)

function ajax (parentId = 0) {
  return db.filter(item => item.parent_id === parentId)
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
      source: ajax(),
      selected: []
    }
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
