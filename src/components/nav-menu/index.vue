<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse = "isCollapse"
      >
      <subMenu v-for="(sider, index) in siders" :menus="sider" :prefix="''+index" :key="index">
      </subMenu>
  </el-menu>
</template>

<script>
import sideConfig from '@/config/sider';
import subMenu from './subMenu';

export default {
  name: 'navMenu',
  components: { subMenu },
  data: function() {
    return {siders: sideConfig};
  },
  props: {
    isCollapse: {
      type: Boolean
    }
  },
  methods: {
    handleOpen: function() {

    },
    handleClose: function() {

    }
  }
};
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>