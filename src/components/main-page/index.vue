<template>
  <el-container>
    <Aside />
    <el-container ref='content' :style="contentStyle">
        <zz-header />
        <el-main class="main" >
          <router-view/>
        </el-main>
        <el-footer class="footer">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
  import { getEleHeight, addEventListener, removeEventListener } from 'util/element';
  import { getWindowHeight } from 'util/screen';
  import Aside from './aside';
  import ZzHeader from './header';

  let initContinetHeight = 0;
  export default {
    name: 'MainPage',
    components: { Aside, ZzHeader },
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
  .footer{
    background: #fff;
    padding: 15px;
    color: #444;
    border-top: 1px solid #d2d6de;
  }
</style>
