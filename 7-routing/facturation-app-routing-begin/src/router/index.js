import Vue from 'vue'
// 1. Importer les dépendances
import VueRouter from 'vue-router'
// 2. Importer les composants des vues de l'application
import Dashboard from '@/views/Dashboard.vue'
// import Bills from '@/views/Bills.vue'
// import EditBill from '@/views/EditBill.vue'
// import Clients from '@/views/Clients.vue'
// import EditClient from '@/views/EditClient.vue'

Vue.use(VueRouter)

// 3. Définir les routes qui sont liées aux composants
const routes = [
  { name: 'dashboard', path: '/', component: Dashboard },
  { 
    name: 'factures',
    path: '/bills',
    component: () => /* webpackChunkName: "bills" */ import ('../views/Bills.vue') 
  },
  { 
    name: 'edition-facture',
    path: '/editbill/:id',
    props: true,
    component: () => /* webpackChunkName: "editbill" */ import('../views/EditBill.vue')
  },
  { 
    name: 'clients',
    path: '/clients',
    component: () => /* webpackChunkName: "Clients" */ import ('../views/Clients.vue')
    
  },
  {
    name: 'edition-client',
    path: '/editclient/:id',
    props: true,
    component: () => /* webpackChunkName: "EditClient" */ import ('@/views/EditClient.vue')
  },
  { 
    name: 'erreur 404',
    path: '*',
    component: () => /* webpackChunkName: "Page404" */ import ('@/views/Page404.vue')
  },
]

// on place nos routes dans une instance de VueRouter
const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

// 4. on exporte la configuration pour l'importer dans main.js
export default router