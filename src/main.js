import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/sass/main.scss'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(ElementUI);

Vue.use(BootstrapVue);

Vue.config.productionTip = false
Vue.prototype.axios=axios

router.beforeEach((to, from, next) => {
  let token = $cookies.get('email');
  console.log(token)
  //如果有token的话说明你已经登录,让你正常登录
  if (token) {
    next();
  } else {
    //如果没有登录你访问的不是login就让你强制跳转到login页面
    if (to.path !== "/admin") {
      next({ path: "/admin" });
    } else {
      next();
    }
  }
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
