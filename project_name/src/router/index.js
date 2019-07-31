import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Head from '@/components/Head'
import Option from '@/components/Option'
import Optionto from '@/components/Optionto'
import mainPageLayout from '@/components/mainPageLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPageLayout',
      component: mainPageLayout,
      redirect: 'Option',
      children: [
        {
          path: '/Option',
          name: 'Option',
          component: Option,
          meta:{
            title:"我是选项1"
          }
        },
        {
          path: '/Optionto',
          name: 'Optionto',
          component: Optionto,
          meta:{
            title:"我是选项2"
          }
        },
      ],
      meta:{
        title:"我是路由1"
      }
    },
    {
      path: '/Head',
      name: 'Head',
      component: Head,
      meta:{
        title:"我是路由2"
      }
    },
    // {
    //   path: '/Option',
    //   name: 'Option',
    //   component: Option,
    //   meta:{
    //     title:"我是选项1"
    //   }
    // },
    // {
    //   path: '/Optionto',
    //   name: 'Optionto',
    //   component: Optionto,
    //   meta:{
    //     title:"我是选项2"
    //   }
    // },
    // {
    //   path: '/mainPageLayout',
    //   name: 'mainPageLayout',
    //   component: mainPageLayout,
    //   meta:{
    //     title:"我是选项2"
    //   }
    // }

  ]
})
