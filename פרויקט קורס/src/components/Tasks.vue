<template>
  <div>
    <h1>My Task</h1>
   <div v-if="taskArr" class="container">
    <task v-for="task in taskArr" :task="task"></task>
   </div>
   
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  // props: ["taskArr"],
  data() {
    return {
      taskArr: []
    };
  },
  created() {
    this.taskArr = JSON.parse(localStorage.getItem("taskArr"));
    console.log(this.taskArr);
  },
  components: {
    Task
  }
};
</script>

<style >
.container {
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-orient: vertical;
}
</style>
