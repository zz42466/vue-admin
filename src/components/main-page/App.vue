<template>
  <div id="app">
    <el-container>
     <el-aside class="aside" width="auto"  ref="aside">
        <div class="aside-header">
          <div class="logo"><b>园林帮</b></div>
          <i @click="toggleCollapse()" class="fa fa-bars fa-2x bar"></i>
        </div>
        <nav-menu :isCollapse="isCollapse" />
      </el-aside>
      <el-container ref='content' :style="contentStyle">
        <el-header class="header">
          <div class="navbar-custom-menu">
            <el-dropdown>
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
          <el-main class="main" >
            <router-view/>
          </el-main>
          <el-footer class="footer">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import { getEleHeight, addEventListener, removeEventListener } from 'util/element';
  import { getWindowHeight } from 'util/screen';
  import navMenu from './components/NavMenu';

  let initContinetHeight = 0;
  export default {
    name: 'App',
    components: { navMenu },
    data: function() {
      return {
        containerHeight: 0,
        isCollapse: false
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
        this.containerHeight = initContinetHeight < windowHeight ? windowHeight : initContinetHeight;
      },
      toggleCollapse() {
        this.isCollapse = !this.isCollapse;
      }
    }
  };
</script>

<style>
  .header, .aside-header{
    position: relative;
    height: 60px;
    background-color: #f39c12;
    padding: 0;
    color: #fff;
  }
  .aside-header{
    text-align: center;
  }
  .bar{
    position: absolute;
    left: 100%;
    top: 19px;
    z-index: 200;
  }
  .logo{
    display: inline-block;
    font-weight: 700;
    font-size: 20px;
    line-height: 60px;
    text-align: center;
  }
  .aside{
    overflow: visible;
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
