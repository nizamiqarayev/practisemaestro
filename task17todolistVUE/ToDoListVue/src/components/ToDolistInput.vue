<template>
<div class="parentinput">
  <div>
  <label for="titleinput">Title</label>
    <input name="titleinput" @change="titlesetter" v-bind:toDoTask="toDoTask"/>
  </div>
  

  <div>
     <label for="priorityselect"></label>
    <select name="priorityselect" v-bind:toDoTaskPriority="toDoTaskPriority" @change="prioritysetter" >
    <option v-for="priority in priorities" :key="priority">{{priority}}</option>    </select>
  </div>

  <div>
    <button @click="addtaskwithid"> Add New +</button>

  </div>
</div>
  
</template>

<script>
import { useStore } from 'vuex'
import { v1 } from "uuid";
import store from '../store';
 
export default{
  setup(){
    const store= useStore()

  }
  ,

  data() {
    return {
      taskModel:{
        toDoTask: "",
        toDoTaskPriority: ""
      },
     priorities:['high','medium','low']}
    },
  methods: {

    prioritysetter(value){
      this.toDoTaskPriority=value.target.value
  },
  titlesetter(value){
    this.toDoTask=value.target.value

  },
  addtaskwithid(){
    const newtask={
        id: v1(),
        title: this.toDoTask,
        priority: this.toDoTaskPriority,
    }
      store.actions.addToDo(newtask)
      this.toDoTask=""
  }

  },
  }
</script>


<style scoped>
.parentinput{
  display: flex;
}
</style>