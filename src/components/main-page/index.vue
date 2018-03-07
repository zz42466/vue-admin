<template>
  <el-container>
    <Aside />
    <el-container ref='content' style="min-height: 100vh;">
        <zz-header />
        <el-main class="main" >
          <router-view/>
        </el-main>
        <el-footer class="footer">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
  import Aside from './aside';
  import ZzHeader from './header';

  export default {
    name: 'MainPage',
    components: { Aside, ZzHeader },
    data: function() {
      return {
        containerHeight: 0,
        isCollapse: false
      };
    },
    destroyed() {
      removeEventListener(window, 'resize', this.setContainerHeight);
    },
    methods: {
      toggleCollapse() {
        this.isCollapse = !this.isCollapse;
      }
    }
  };
</script>

<style>
  .footer{
    background: #fff;
    padding: 15px;
    color: #444;
    border-top: 1px solid #d2d6de;
  }
</style>
