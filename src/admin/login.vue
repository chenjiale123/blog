<template>
  <div id="login">
    <div class="login_in">
      <label for>
         <span>邮箱：</span>
      <input type="email" v-model="user.email" placeholder="请输入邮箱">
      </label>
      <label for>
         <span>密码：</span>
      <input type="password" v-model="user.password" placeholder="请输入密码 ">
      </label>
      <label>
        <span>手机号码：</span>
        <input type="text" placeholder="请输入手机号" v-model="rphonenumber">
      </label>
      <label>
        <span>验证码：</span>
        <input type="text" placeholder="请输入验证码" v-model=" scode">
        
        <button class="getcode" v-if="cd" disabled style="background:#ccc">{{cd}}s</button>
        <button class="getcode" @click="getscode" v-else>获取验证码</button>
      </label>
      <button @click="login">登录</button>
      <button>注册</button>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  name: "",
  data() {
    return {
      user: {
     
        send: 1,
        email: "",
        password: "",
        name: ""
      },
         cd:0,
        scode:"",
        rphonenumber:'',
         rcode: "",
           infos: {
        type: "alert",
        show: false,
        message: "rua!"
      }
    };
  },
  methods: {
    login() {
      if (this.scode == this.rcode) {
      var data = qs.stringify(this.user);
      this.$cookies.set("email", this.user.email, 3600);
      this.$cookies.set("name", this.user.name, 3600);

      this.axios
        .post("http://chenjiale.gz01.bdysite.com/api2/login.php", data)
        .then(res => {
          //  alert(res.data.message)
          if (res.data.valid) {
            this.$router.push("/");
            // location.reload();
          } else {
            // console.log(res.data.message)
          }
        });
        }else{
           this.infos = {
          type: "alert",
          show: "true",
          message: "验证码不准确"
        };
        }
    },
    getscode(e) {
      if (this.rphonenumber) {
        //生成随机验证码
        this.rcode = Math.floor(Math.random() * (10000 - 1000)) + 1000;
        console.log(this.rcode);
        //倒计时
        this.cd = 60;
        const timer = setInterval(() => {
          --this.cd ? console.log("倒计时中", this.cd) : clearInterval(timer);
        }, 1000);
        //向php文件发送验证码和手机号码,来转发给用户
        this.axios
          .post(
            "http://liuxiaofan123.gz01.bdysite.com/myvue/Autoloading/index.php",
            "scode=" + this.rcode + "&phone=" + this.rphonenumber
          )
          .then(res => {
            console.log(res);
          })
          .catch(err => console.log(err));
      } else {
        //弹出自定义的模态框组件
        this.infos = {
          type: "alert",
          show: "true",
          message: "请输入号码"
        };
      }
    },
    comm() {
      this.axios
        .get("http://chenjiale.gz01.bdysite.com/api2/getuser.php")
        .then(res => {
          let data = res.data;
          // console.log(data);
          // console.log(this.$cookies.get("username"))
          data.forEach(val => {
            if (val.email == this.$cookies.get("email")) {
              this.user.name = val.name;
              console.log(val);
            }
          });
        });
    }
  },
  created() {
    this.comm();
  }
};
</script>
<style scoped>
#login {
  position: absolute;
  left: 0;
  top: 0;
  background: rgb(27, 27, 29);
  width: 100%;
  height: 100%;
  z-index: 999;
}
#login .login_in {
  width: 400px;
  height: 520px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -260px;
  background: #fff;
}
#login label {
  display: block;
  font-size: 20px;
  margin-left: 50px;
  margin-top: 20px;
  color: #000;
}
#login input {
  /* margin-left: 50px; */
  width: 300px;
  height: 30px;
  border: 1px solid #eee;
}
#login button {
  display: inline-block;
  width: 100px;
  height: 50px;
  background: rgb(208, 248, 223);
  border: 1px solid rgb(208, 248, 223);
  color: rgb(197, 189, 189);
  font-size: 18px;
  text-align: center;
  margin-left: 50px;
  margin-top: 20px;
 
}
.getcode{
  display: block;
}
</style>
