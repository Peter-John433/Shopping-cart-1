import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import OffLineStore from '../views/middleheader/OffLineStore.vue'
import PayBill from '../views/middleheader/PayBill.vue';
import OcheBlog from '../views/middleheader/OcheBlog.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/continue shopping',
      name: 'OffLineStore',
      component: OffLineStore
    },
    {
      path: '/pay bills at ochestore',
      name: 'PayBill',
      component: PayBill
    },
    {
      path: '/pay bills at ochestore',
      name: 'OcheBlog',
      component: OcheBlog
    }
  ]
})

export default router
