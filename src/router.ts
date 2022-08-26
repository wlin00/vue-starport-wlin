import Home from "../src/views/Home.vue"
import List from "../src/views/List.vue"
import Detail from "../src/views/Detail.vue"

import { createRouter, createWebHashHistory } from "vue-router";
const history = createWebHashHistory();

export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/list', component: List },
    { path: '/detail', component: Detail },
  ]
})
