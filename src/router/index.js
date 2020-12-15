import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/MainPage'
import List from '../components/List'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
