<template>
  <div id="app" class="container">
    <div class="displayer">
      <div v-show="isInputVisible">
        <div class="addtodochanger" @click="changeviewheader">Add To Do</div>
        <TodoInput v-show="isInputVisible" />
      </div>
      <TodoStatus v-show="!isInputVisible" />
    </div>
    <TodoList v-show="!isInputVisible" />
    <div v-show="!isInputVisible" class="adder" @click="changeview">
      <i class="fa-duotone fa-plus fa-2xl"></i>
    </div>
    <div v-show="isInputVisible" class="addtodobutton" @click="changeview">
      <div>Add TODO</div>
    </div>
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import TodoStatus from "@/components/TodoStatus";

export default {
  name: "App",
  components: {
    TodoInput,
    TodoList,
    TodoStatus,
  },
  data() {
    return {
      isInputVisible: false,
    };
  },
  methods: {
    changeviewheader() {
      this.isInputVisible = !this.isInputVisible;
    },
    changeview() {
      if (this.isInputVisible == true) {
        this.isInputVisible = false;
        this.$root.$emit("addnewtodo");
      } else {
        this.isInputVisible = true;
      }
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.adder {
  align-self: center;
  display: flex;
  justify-content: center;
  position: relative;
  left: 120px;
  align-items: center;
  width: 50px;
  height: 50px;
  /* border: 1px solid lightgray; */
  background: #b3b7ee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
}
.adder i {
  color: white;
}

.addtodochanger {
  background: #9395d3;
  padding: 20px;
  background: #9395d3;
  border-radius: 0px 0px 30px 30px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background-color: #e5e5e5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.addtodobutton {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  padding: 15px 50px 15px 50px;
  /* border: 1px solid lightgray; */
  background: #ffffff;
  outline-color: #b3b7ee;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  border-radius: 15px;
}
</style>
