<template>
  <el-aside class="aside" width="auto"  ref="aside">
    <div class="aside-header">
      <div class="logo"><b>园林帮</b></div>
      <i @click="toggleCollapse()" class="fa fa-bars fa-2x bar"></i>
    </div>
    <nav-menu :isCollapse="isCollapse" />
  </el-aside>
</template>

<script>
  import navMenu from './../nav-menu';

  export default {
    name: 'Aside',
    components: { navMenu },
    data: function() {
      return {
        containerHeight: 0,
        isCollapse: false
      };
    },
    methods: {
      toggleCollapse() {
        this.isCollapse = !this.isCollapse;
      }
    }
  };
</script>

<style>
  .aside-header{
    position: relative;
    height: 60px;
    background-color: #f39c12;
    padding: 0;
    color: #fff;
    text-align: center;
  }
  .bar{
    position: absolute;
    top: 0px;
    cursor: pointer;
    padding: 18px;
    left: 100%;
    z-index: 200;
  }
  .bar:hover{
    background: rgba(0,0,0,0.1);
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
</style>
