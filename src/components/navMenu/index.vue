<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
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
  methods: {
    handleOpen: function() {

    },
    handleClose: function() {

    }
  }
};
</script>