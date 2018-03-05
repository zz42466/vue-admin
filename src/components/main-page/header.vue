<template>
  <el-header class="header">
    <ul class="header-menu">
      <li v-popover:message>
        <span>
          <i class="fa fa-bell-o bell"></i>
        </span>
        <el-popover
          ref="message"
          placement="bottom"
          title="消息"
          width="200"
          offset="50"
          trigger="click"
          >
          <div>消息1</div>
          <div>消息2</div>
          <div>消息3</div>
        </el-popover>
      </li>
      <li>
        <div class="user">
          <img class="avatar" src="//tower.im/assets/default_avatars/noon-f5e0637e6cdb5cc9b4c7a41470b18d3e43fa282040f68b3578474a19277f6300.jpg"/>
          <span class="name">张三</span>
        </div>
      </li>
    </ul>
  </el-header>
</template>

<script>
  export default {
    name: 'ZzHeader'
  };
</script>

<style>
  .header{
    position: relative;
    height: 60px;
    background-color: #f39c12;
    padding: 0;
    color: #fff;
  }
  .header-menu{
    float: right;
    padding: 0 50px;
  }
  ul.header-menu li{
    float: left;
    display: block;
    cursor: pointer;
  }
  ul.header-menu li:hover{
    background: rgba(0,0,0,0.1);
  }
  .el-dropdown{
  }
  .bell{
    padding: 16px 15px;
    font-size: 28px;
  }
  .user{
    display: inline-block;
    padding: 15px 15px;
  }
  .user .avatar{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
</style>
