import Vue from 'vue'
import Router from 'vue-router'
import BeersList from '@/components/BeersList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BeersList',
      component: BeersList
    }
  ]
})
