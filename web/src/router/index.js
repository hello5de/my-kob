import { createRouter, createWebHistory } from 'vue-router'
import PkIndex from "@/views/pk/PkIndexView";
import GameRecord from "@/views/record/GameRecordView";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/",
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndex,
  },
  {
    path: "/record/",
    name: "game_record",
    component: GameRecord,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
