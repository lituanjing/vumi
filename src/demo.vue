<template>
  <div id="app">
    <ym-layout class="demo-layout">
      <ym-sider class="sider">sider</ym-sider>
      <ym-layout>
        <ym-header class="header">header</ym-header>
        <ym-content style="padding: 24px;">
          <ym-slides>
            <ym-slides-item name="1">
              <div class="box">1</div>
            </ym-slides-item>
            <ym-slides-item name="2">
              <div class="box">2</div>
            </ym-slides-item>
            <ym-slides-item name="3">
              <div class="box">3</div>
            </ym-slides-item>
          </ym-slides>
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
import YmSlides from './slides'
import YmSlidesItem from './slides-item'
import YmTabs from './tabs'
import YmTabsBody from './tabs-body'
import YmTabsHead from './tabs-head'
import YmTabsItem from './tabs-item'
import YmTabsPane from './tabs-pane'
import db from './db'

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
    YmSlides,
    YmSlidesItem,
    YmTabs,
    YmTabsBody,
    YmTabsHead,
    YmTabsItem,
    YmTabsPane,
  },
  data () {
    return {
      selected: '1',
    }
  },
  created () {
    setTimeout(() => {
      this.selected = '2'
    }, 1000)
  },
  methods: {
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
.box {
  width: 200px;
  height: 150px;
  background: #ddd;
  border: 1px solid red;
}
</style>
