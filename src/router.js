import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import blog from './views/blog.vue'
import contect from './views/contect.vue'
import project from './views/project.vue'
import detail from './views/detail.vue'


import user from '@/admin/user.vue'
import adduser from '@/admin/adduser.vue'
import addblog from '@/admin/addblog.vue'
import login from '@/admin/login.vue'
import register from '@/admin/register.vue'
import comm from '@/admin/comm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/contect',
      name: 'contect',
      component: contect
    },{
      path: '/admin/comm',
      name: 'comm',
      component: comm
    },{
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },{
      
        path: '/admin/user',
      name: 'user',
      component: user,
      },{
        path: '/admin/adduser',
      name: 'adduser',
      component: adduser,
      },{
        path: '/admin/addblog',
      name: 'addblog',
      component: addblog,
      },{
        path: '/admin',
      name: 'login',
      component: login,
      },{
        path: '/admin/register',
      name: 'register',
      component: register,
      }
    
  ],mode:"history"
})
