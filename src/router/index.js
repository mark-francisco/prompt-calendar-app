import Vue from "vue";
import VueRouter from "vue-router";
import AddEvent from "../views/AddEvent.vue";
import EditEvent from "../views/EditEvent.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   component: Calendar,
  // },
  {
    path: "/add",
    name: "addEvent",
    component: AddEvent,
  },
  {
    path: "/edit",
    name: "editEvent",
    component: EditEvent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});

export default router;
