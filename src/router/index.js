import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    // component:Login
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home'),
    meta:{
      isLogin:true
    },
    children: [
      {
        path: '/home/user/index',
        component: () => import('../components/leftNav/user/userManage/userList.vue')
      },
      {
        path: '/home/user/quanxian',
        component: () => import('../components/leftNav/user/userManage/userRights.vue')
      },
      {
        path: '/home/user/audit',
        component: () => import('../components/leftNav/user/userManage/userCheck.vue')
      },
      {
        path: '/home/admin/index',
        component: () => import('../components/leftNav/user/rooterManage/rooterList.vue')
      },
      {
        path: '/home/adminRole/index',
        component: () => import('../components/leftNav/user/rooterManage/roleList.vue')
      },
      {
        path: '/home/thi',
        component: () => import('../components/leftNav/global/systemHome/index.vue')
      },
      {
        path: '/home/settings/site',
        component: () => import('../components/leftNav/global/webModel/systemSet.vue')
      },
      {
        path: '/home/settings/sms',
        component: () => import('../components/leftNav/global/webModel/messageSet.vue')
      },
      {
        path: '/home/settings/email',
        component: () => import('../components/leftNav/global/webModel/emailSet.vue')
      },
      {
        path: '/home/nav/index',
        component: () => import('../components/leftNav/global/NavManage/frontNav.vue')
      },
      {
        path: '/home/adminNav/index',
        component: () => import('../components/leftNav/global/NavManage/backstageNav.vue')
      },
      {
        path: '/home/sms/index',
        component: () => import('../components/leftNav/global/modelManage/messageModel.vue')
      },
      {
        path: '/home/template/index',
        component: () => import('../components/leftNav/global/modelManage/webModel.vue')
      },
      {
        path: '/home/templateMobile/index',
        component: () => import('../components/leftNav/global/modelManage/phoneModel.vue')
      },
      {
        path: '/home/color/index',
        component: () => import('../components/leftNav/global/themeSetting/index.vue')
      },
      // 内容板块
      {
        path:'/home/weekly/index',
        component:() => import('../components/leftNav/content/weekNewManage/weekNewsList.vue')
      },
      {
        path:'/home/live/index',
        component:() => import('../components/leftNav/content/liveManage/settings.vue')
      },
      {
        path:'/home/appMarket/index',
        component:() => import('../components/leftNav/content/appMarket/appList.vue')
      },
      {
        path:'/home/appMarket/fenlei',
        component:() => import('../components/leftNav/content/appMarket/appKinds.vue')
      },
      {
        path:'/home/article/index',
        component:() => import('../components/leftNav/content/articleManage/articleList.vue')
      },
      {
        path:'/home/article/category',
        component:() => import('../components/leftNav/content/articleManage/articleType.vue')
      },
      {
        path:'/home/article/comment',
        component:() => import('../components/leftNav/content/articleManage/articleComments.vue')
      },
      {
        path:'/home/article/set',
        component:() => import('../components/leftNav/content/articleManage/articleSetting.vue')
      },
      {
        path:'/home/article/statement',
        component:() => import('../components/leftNav/content/articleManage/Disclaimer.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 路由守卫
// router.beforeEach((to,from,next)=>{
//   if(to.matched.some(res=>res.meta.isLogin)){//判断是否需要登录
//       if (localStorage.getItem("token")) {
//           next();
//       }else{
//           next({
//               path:"/login",
//               query:{
//                   redirect:to.fullPath
//               }
//           });
//       }

//   }else{
//       next()
//   }
// });

export default router
