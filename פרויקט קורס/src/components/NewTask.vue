<template>
  <div>
    <h1>Add a New Task</h1>
    <form  id="container" >
   <p><span>Time:</span><input type="text" v-model="task.time"></p> 
    
     <p>Content:</p>
     <textarea  cols="30" rows="10" v-model="task.content" placeholder="Write a message"></textarea>
    
   
  <input type="button" value="Add" @click.prevent="CreateNewTask"> 
</form>
  </div>
</template>

<script>
import { BusEmiter } from "../main";
export default {
  data() {
    return {
      task: {
        time: "",
        content: ""
      }
    };
  },
  methods: {
    CreateNewTask() {
      BusEmiter.$emit("AddNewTask", this.task);
      this.$router.push({
        name: "tasks"
      });
    }
  }
};
</script>

<style >
*:not(a) {
  font-family: "Arizonia", cursive;
  font-size: 24px;
  color: #6e6e6e;
}

#container {
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-orient: vertical;
}
input {
  display: block;
}
</style>
