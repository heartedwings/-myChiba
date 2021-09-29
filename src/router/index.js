import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import ContactForm from '../views/ContactForm.vue'
import ContactEdit from '../views/ContactEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

  {
    path: '/contactForm',
    name: 'ContactForm',
    component: ContactForm
  },

  {
    path: '/contactEdit',
    name: 'ContactEdit',
    component: ContactEdit
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
