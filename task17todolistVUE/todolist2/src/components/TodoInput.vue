<template>
  <div>
    <div class="inputs">
      <input
        v-model="todoText"
        class="col form-control mr-2"
        type="text"
      >
       <input
        v-model="todoTextsubTitle"
        :class="isShown ? 'block' : 'hidden'"
        class="col form-control mr-2"
        type="text"
      />

      <!-- <button @click="addTodoI" class="btn btn-primary">Add</button> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  data() {
    return {
      todoText: "",
      todoTextsubTitle: "",
      isShown:true
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    // todoTextChange(e) {
    //   this.todoText = e.target.value;
    // },
    //   todoSubTitleTextChange(e) {
    //   this.todoTextsubTitle = e.target.value;
    // },

    addTodoI() {
      this.addTodo({
        id: v1(),
        title: this.todoText,
        subtitle:this.todoTextsubTitle,
        complete: false
      });
      this.todoText = "";
      this.todoTextsubTitle=""
    }
  },
  mounted(){
    const thisInstance = this
    this.$root.$on('addnewtodo', function(){
      thisInstance.addTodoI()
    })
  }
};
</script>

<style scoped>
.inputs{
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}

.hidden{
  display: none;
}
.inputs input{
  padding: 10px;
  text-decoration: underline;
  color: white;
  text-decoration-color: white;
  background: #B3B7EE;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
  border: none;
}
.inputs input:focus{
  outline: none;
}
</style>