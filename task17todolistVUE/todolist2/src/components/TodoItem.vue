<template>
  <div id="maindiv">
    <div >
      <div class="titleandsub" v-if="!editing">
        <h3 >{{todo.title}}</h3>
        <p>{{todo.subtitle}}</p>
      </div>
      <div v-else >
        <input
          v-bind:value="todoText"
          @change="todoTextChange"
          type="text"
          class="col-7 form-control"
        />
        <input
          v-bind:value="todosubtitletext"
          @change="todosubTextChange"
          type="text"
          class="col-7 form-control"
        />

      </div>
       <div class="actions">
        <div v-show="showcheckbox">
          <input class="checker" :checked="!editshowcheck"  @change="onCompleted(todo)" type="checkbox" />
        </div>
      <div class="buttons">
        <button @click="updateTodoI(todo)" class="btn btn-primary mx-2">{{editing?'Update':'Edit'}}</button>
        <button v-show="showcheckbox" @click="deleteTodo(todo.id)" class="btn btn-danger">Delete</button>
      </div>
       </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: {}
  },
  data() {
    return {
      todoText: "",
      todosubtitletext: "",
      editing: false,
      completed: false,
      editshowcheck: !this.todo.complete,
      showcheckbox:true
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo", "changeCompleted"]),
    onCompleted(todo) {
      this.completed = this.completed == true ? false : true;
      todo.complete=this.completed
      this.changeCompleted()
    },
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    todosubTextChange(e) {
      this.todosubtitletext = e.target.value;
    },
    updateTodoI(todo) {
      this.editing = this.editing == true ? false : true;
      this.editshowcheck= !this.editshowcheck
      if (this.editing) {
        this.todoText = todo.title;
        this.todosubtitletext=todo.subtitle
        this.updateTodo(todo);
        this.showcheckbox= !this.showcheckbox
      } else {
        todo.title = this.todoText;
        todo.subtitle=this.todosubtitletext
        todo.complete = this.completed;
        this.changeCompleted();
        this.showcheckbox= !this.showcheckbox

      }
    }
  }
};
</script>

<style scoped>
template{
  border:1px solid lightblue
}
div{
  display: flex;
  align-items: center;
  justify-content: center;
}
.titleandsub{
display: flex;
flex-direction: column;
width: 200px;
  align-items: flex-start;
  /* background-color: yellow ; */
  
}
.checker{
  width: 30px;
  height: 30px;
  margin: 10px;
  /* background-color: #a77e2d !important; */

  /* visibility: hidden; */
  /* border: 1px solid white; */
  /* outline: 1px solid white; */
}


.titleandsub h3{
  padding: 0px 0px 0px 10px;
}
.titleandsub p{
  padding: 0px 0px 0px 10px;
}

#maindiv{
  border:1px solid lightblue;
  padding:10px;
  margin: 20px;
  background-color: #B3B7EE;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
color: white;
}
.buttons{
  display: flex;
  flex-direction: column;
}
.buttons button{
  width: 70px;
  margin: 5px;
  padding: 5px;
    background-color: #B3B7EE;
box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
border: none;
  border-radius: 20px;
}
</style>