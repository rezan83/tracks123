import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Carrier from "../views/Carrier.vue";
import store from "../store"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: (to, from, next) =>{
      if (store.state.userName) {
        next()
      } else {
        next({ name: 'Home' })
      }
    }
   
  },
  {
    path: "/carrier/:carrierId",
    name: "Carrier",
    component: Carrier,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
