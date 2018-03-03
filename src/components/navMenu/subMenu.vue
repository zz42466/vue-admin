<template>
  <el-submenu v-if="menus.subMenu && menus.subMenu.length > 0" :index="prefix">
    <template slot="title">
      <i :class="menus.icon"></i>
      <span>{{menus.name}}</span>
    </template>
    <sub-menu v-for="(menu, index) in menus.subMenu" :menus="menu" :prefix="prefix+'-'+index" :key="prefix+'-'+index"/>
  </el-submenu>
  <el-menu-item v-else :index="prefix">
    <i :class="menus.icon"></i>
    <span slot="title">{{menus.name}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'subMenu',
  props: {
    menus: {
      type: Object,
      default: function() {
        return [];
      }
    },
    prefix: {
      type: String,
      default: ''
    }
  }
};
</script>