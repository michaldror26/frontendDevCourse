<template>
  <div id="app">
    <div id="nav">
      <router-link to="/tasks"  >My Tasks</router-link> |
      <router-link to="/newTask">Add Task</router-link>
    </div>
    <router-view/>
  </div>
</template>

 <script>
import Tasks from "./components/Tasks.vue";
import NewTask from "./components/NewTask.vue";
import { BusEmiter } from "./main";

export default {
  name: "app",
  data() {
    return {
      taskArr:[]
    };
  },
  watch: {
    taskArr(value) {
      localStorage.setItem("taskArr", JSON.stringify(this.taskArr));
    }
  },
  components: {
    NewTask,
    Tasks
  },
  created() {
    this.taskArr = JSON.parse(localStorage.getItem("taskArr"));
    if (!this.taskArr) 
    this.taskArr = [];
   BusEmiter.$on("AddNewTask",(newTask)=>{this.AddNewTaskTolist(newTask);});

  }
  ,
  methods: {
    AddNewTaskTolist(newTask) {
      this.taskArr.push(newTask);
    }
 }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
