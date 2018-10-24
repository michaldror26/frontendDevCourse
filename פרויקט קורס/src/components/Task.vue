<template>
    <div class="container task" >
        
      <p>Time: {{task.time}} </p>
      <p>{{task.content}} </p>
          
    </div>
    
</template>

<script>
export default {
  props: ["task"]
};
</script>

<style>
.task{
  border: 3px solid black;
  border-radius: 25%;
  display:inline-block;
  padding: 0px 50px ;
  margin: 10px;
}
</style>
