import Vue from 'vue'
import Router from 'vue-router'

import Tasks from "./components/Tasks.vue";
import NewTask from "./components/NewTask.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/newTask',
      name: 'newTask',
      component: NewTask
    }
  ]
})
