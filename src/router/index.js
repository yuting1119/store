import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Space from '../views/Space.vue'
import Book from '../views/Book.vue'
import Map from '../views/Map.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Space',
    name: 'Space',
    component: Space
  },
  {
    path: '/Book',
    name: 'Book',
    component: Book
  },
  {
    path: '/Map',
    name: 'Map',
    component: Map
  }
]

const router = new VueRouter({
  routes
})

export default router
