import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resources from '../components/Navbar/Resources.vue'

import Guides from '../components/Navbar/Resources_dropdown/Guides.vue'
import Imaps from '../components/Navbar/Resources_dropdown/Imaps.vue'
import Routes from '../components/Navbar/Resources_dropdown/Routes.vue'

import Iron_ore from '../views/Ores/Iron_route.vue'
import Starmetal_ore from '../views/Ores/Starmetal_route.vue'
import Orichalcum_ore from '../views/Ores/Orichalcum_route.vue'
import Silver_ore from '../views/Ores/Silver_route.vue'
import Gold_ore from '../views/Ores/Gold_route.vue'
import Platinum_ore from '../views/Ores/Platinum_route.vue'

import Ironwood from '../views/Woods/Ironwood_route.vue'
import Wyrdwood from '../views/Woods/Wyrdwood_route.vue'

import Hemp from '../views/Plants/Hemp_route.vue'
import Herbs from '../views/Plants/Herbs_route.vue'
import Silkweed from '../views/Plants/Silkweed_route.vue'
import Wirefiber from '../views/Plants/Wirefiber_route.vue'
import Fungus from '../views/Plants/Fungus_route.vue'
import Dyes from '../views/Plants/Dyes_route.vue'

import Airessence from '../views/Essences/Airessence_route.vue'
import Deathessence from '../views/Essences/Deathessence_route.vue'
import Earthessence from '../views/Essences/Earthessence_route.vue'
import Fireessence from '../views/Essences/Fireessence_route.vue'
import Lifeessence from '../views/Essences/Lifeessence_route.vue'
import Spiritessence from '../views/Essences/Spiritessence_route.vue'
import Wateressence from '../views/Essences/Wateressence_route.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/resources/guides',
    name: 'Guides',
    component: Guides
  },
  {
    path: '/resources/imaps',
    name: 'Imaps',
    component: Imaps
  },
  {
    path: '/resources/routes',
    name: 'Routes',
    component: Routes
  },
  {
    path: '/routes/iron',
    name: 'Iron_ore',
    component: Iron_ore 
  },
  {
    path: '/routes/starmetal',
    name: 'Starmetal_ore',
    component: Starmetal_ore 
  },
  {
    path: '/routes/orichalcum',
    name: 'Orichalcum_ore',
    component: Orichalcum_ore 
  },
  {
    path: '/routes/silver',
    name: 'Silver_ore',
    component: Silver_ore 
  },
  {
    path: '/routes/gold',
    name: 'Gold_ore',
    component: Gold_ore 
  },
  {
    path: '/routes/platinum',
    name: 'Platinum_ore',
    component: Platinum_ore 
  },
  {
    path: '/routes/ironwood',
    name: 'Ironwood',
    component: Ironwood 
  },
  {
    path: '/routes/wyrdwood',
    name: 'Wyrdwood',
    component: Wyrdwood 
  },
  {
    path: '/routes/hemp',
    name: 'Hemp',
    component: Hemp  
  },
  {
    path: '/routes/silkweed',
    name: 'Silkweed',
    component: Silkweed 
  },
  {
    path: '/routes/wirefiber',
    name: 'Wirefiber',
    component: Wirefiber 
  },
  {
    path: '/routes/herbs',
    name: 'Herbs',
    component: Herbs 
  },
  {
    path: '/routes/fungus',
    name: 'Fungus',
    component: Fungus 
  },
  {
    path: '/routes/dyes',
    name: 'Dyes',
    component: Dyes 
  },
  {
    path: '/routes/airessence',
    name: 'Airessence',
    component: Airessence 
  },
  {
    path: '/routes/deathessence',
    name: 'Airessence',
    component: Deathessence 
  },
  {
    path: '/routes/earthessence',
    name: 'Earthessence',
    component: Earthessence 
  },
  {
    path: '/routes/fireessence',
    name: 'Fireessence',
    component: Fireessence 
  },
  {
    path: '/routes/lifeessence',
    name: 'Lifeessence',
    component: Lifeessence 
  },
  {
    path: '/routes/spiritessence',
    name: 'Spiritessence',
    component: Spiritessence 
  },
  {
    path: '/routes/wateressence',
    name: 'Wateressence',
    component: Wateressence 
  },
]

const router = new VueRouter({
  routes
})

export default router
