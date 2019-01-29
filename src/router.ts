import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Team from './components/Team.vue'
import Services from './components/Services.vue'
import Prices from './components/Pricelist.vue'
import Projects from './components/Projects.vue'
import Products from './components/Products.vue'
import Register from './components/Register.vue'
import Contact from './components/Contact.vue'

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
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/prices',
      name: 'prices',
      component: Prices
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
