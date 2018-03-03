<template>
  <div id="app">
    <el-container>
      <el-header class="header" :style="{height:headerHeight + 'px'}">
        <div class="logo"><b>园林帮</b></div>
        <a href="#" class="bars">
          <span class="sr-only">Toggle navigation</span>
        </a>
      </el-header>
        <el-container ref='content' :style="contentStyle">
         <el-aside width="200px" class="aside" ref="aside">
            <nav-menu />
          </el-aside>
          <el-container ref="mainContianer">
            <el-main class="main" >
              <router-view/>
            </el-main>
            <el-footer class="footer">Footer</el-footer>
          </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { getEleHeight, addEventListener, removeEventListener } from 'util/element';
import { getWindowHeight } from 'util/screen';
import navMenu from './components/navMenu';

let initContinetHeight = 0;
export default {
  name: 'App',
  components: { navMenu },
  data: function() {
    return {
      headerHeight: 60,
      containerHeight: 0
    };
  },
  mounted() {
    initContinetHeight = getEleHeight(this.$refs.content.$el);
    addEventListener(window, 'resize', this.setContainerHeight);
    this.setContainerHeight();
  },
  destroyed() {
    removeEventListener(window, 'resize', this.setContainerHeight);
  },
  computed: {
    contentStyle: function () {
      let height = this.containerHeight; //在计算属性中，需要在第一次执行的时候调用到所所依赖的属性，如果第一次调用不到，在不会更新
      let style = {};
      if (initContinetHeight !== 0) {
        style.minHeight = height + 'px';
      }
      return style;
    }
  },
  methods: {
    setContainerHeight: function() {
      let windowHeight = getWindowHeight();
      this.containerHeight = initContinetHeight < windowHeight - this.headerHeight ? windowHeight - this.headerHeight : initContinetHeight;
    }
  }
};
</script>

<style>
  .header{
    background-color: #f39c12;
    padding: 0;
  }
  .logo{
    width: 200px;
    font-weight: 700;
    font-size: 20px;
    line-height: 60px;
    text-align: center;
    color: #fff;
  }
  .aside{
    border-right: 1px solid #d2d6de;
    background-color: #f9fafc;
  }
  .main{
    background-color: #ecf0f5;
  }
  .footer{
    background: #fff;
    padding: 15px;
    color: #444;
    border-top: 1px solid #d2d6de;
  }
</style>
