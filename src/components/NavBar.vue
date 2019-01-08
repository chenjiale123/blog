<template>
  <nav class="navbar">
    <div id="navbar-effect"></div>
    <div class="navbar-brand">
      <div class="navbar-item">
        <img src="@/assets/images/vm-logo.svg">
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          About Me
        </router-link>
        <router-link class="navbar-item" to="/blog">
          blog
        </router-link>
        <router-link class="navbar-item" to="/project">
          Projects
        </router-link>
        <router-link class="navbar-item" to="/contect">
          Contact
        </router-link>
        <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
     {{name}}    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>{{name}}</el-dropdown-item>
 <router-link to="/admin"> <el-dropdown-item @click="drop">退出登陆</el-dropdown-item></router-link>     
  </el-dropdown-menu>
</el-dropdown>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name:'navbar',
  data(){
    return{
      name:$cookies.get('email')?$cookies.get('email'):'未登陆'
    }
  },
  methods:{
    drop(){
      this.$cookies.remove('email')
    }
  },
  created(){
    // this.name=this.$cookies.get('name')
  }
}
</script>

<style lang="scss">
.navbar {
  .navbar-start {
    margin: auto;
  }
  a {
    font-weight: bold;
    color: #FAFAFA;
    &.router-link-exact-active {
      color: #0b8f5a;
    }
  }
}
.el-dropdown-menu{
  position: absolute;
  left: 50px;
}
#navbar-effect {
  top: -120px;
  // left: -40px;
  height: 250px;
  width: 100px;
  background-color: #FAFAFA;
  transform: rotate(60deg);
  position: absolute;
  box-shadow: 0 0 20px #414141;
  left: 40px;
}
  .el-dropdown-link {
    cursor: pointer;
    color: rgb(255, 255, 255);
    position: relative;
    top: 10px;
    // left: 100px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
