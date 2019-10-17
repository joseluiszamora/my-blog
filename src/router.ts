import Vue from 'vue'
import Router from 'vue-router'
import Home from './Pages/Home.vue'
import About from './Pages/About.vue'
import Skills from './Pages/Skills.vue'
import Services from './Pages/Services.vue'
import Portfolio from './Pages/Portfolio.vue'
import News from './Pages/News.vue'
import Contact from './Pages/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/skill',
      name: 'skill',
      component: Skills
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
