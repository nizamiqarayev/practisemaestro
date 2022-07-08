/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);


export default new Vuex.Store({
  plugins:[createPersistedState({

  })],
  state: {
    completed: true,
    ttodos: [],
    todos: [],
  },
  getters: {
    allTTodos: (state) => state.ttodos,
    allTodos: (state) => state.todos,
    completed: (state) => state.completed,
  },
  actions: {
    changeCompleted({ commit }) {
      commit("change_complete");
    },
    addTodo({ commit }, todo) {
      commit("add_todo", todo);
    },
    deleteTodo({ commit }, id) {
      commit("delete_todo", id);
    },
    updateTodo({ commit }, todo) {
      commit("update_todo", todo);
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      state.ttodos = state.todos;
      console.log(todo.subtitle)
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
      state.ttodos = state.todos;
      
    },
    update_todo(state, todo) {
      console.log(todo)
      let index = state.todos.findIndex((t) => t.id == todo.id);
      if (index != -1) {
        state.todos[index] = todo;
      }
    },
    change_complete(state) {
      state.ttodos = state.todos;
      state.completed = state.completed == true ? false : true;
      state.ttodos = state.ttodos.filter((t) => t.complete == state.completed);
    },
  },
  modules: {},
});