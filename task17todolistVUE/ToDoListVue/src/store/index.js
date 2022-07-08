import { createStore } from 'vuex'
import App from "../App.vue";

export default createStore({
  state:{
    todos:['value','value']
  },
  getters:{
    allToDos: (state)=>state.todos
  },
  actions:{
    addToDO({commit},todo){
      console.log(todo)
      commit("add_new_todo",todo)
    },
    updateToDO({commit}, todo){
      commit("update_task",todo)
    },
    deleteToDo({commit},todo){
      commit("delete_task")
    }
  },
  mutations:{
    add_new_todo(state,todo){
      state.todos.push(todo)
      console.log(state)
    },
    update_task(state,todo){
      const temp=state.todos.findIndex((e)=> e.id==todo.id)
      if(temp!=-1){
        temp.todos[temp]=todos
}

    },
    delete_task(state,id){
      state.todos = state.todos.filter((todo) => todo.id != id);
      state.ttodos = state.todos;
    }
  },
  modules: {},

})

