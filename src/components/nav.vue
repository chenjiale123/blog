<template>
<div id="nav">
   <el-row class="tac">
  <el-col :span="12">
    <h5>导航</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>设置 </span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>        
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
      <router-link  tag="span" to="/admin/addblog" slot="title">添加博客</router-link> 
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
   <router-link  tag="span" to="/admin/adduser" slot="title">添加用户</router-link> 
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
       <router-link  tag="span" to="/admin/user" slot="title">人员管理</router-link> 
      </el-menu-item>
        <el-menu-item index="5">
        <i class="el-icon-setting"></i>
       <router-link  tag="span" to="/admin/comm" slot="title">评论管理</router-link> 
      </el-menu-item>
    </el-menu>
  </el-col>

</el-row>
</div>
</template>


<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
#nav{
    /* margin-left: 150px; */
    /* float: left; */
    position: absolute;
    left: 160px;
    
    
}
</style>
