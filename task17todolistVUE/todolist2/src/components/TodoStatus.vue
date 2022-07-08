<template>
  <div>
    
        <button @click="changeTab" :class="{active:completed}">Completed</button>
     
        <button @click="changeTab" :class="{active:!completed}">Not Completed</button>
      
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["completed"])
  },
  methods: {
    ...mapActions(["changeCompleted"]),
    changeTab() {
      this.changeCompleted();
    }
  }
};
</script>

<style scoped>
div{
  background: #9395D3;
  padding: 20px;
  background: #9395D3;
border-radius: 0px 0px 30px 30px;
  border: 1px solid transparent;

}
ul {
  list-style-type: none;
  display: flex;
}
button {
  outline: none;
  border: none;
  padding: 10px 20px;
  color: #000;
  background-color: transparent;
}
button:hover {
  outline: none;
  color: black;
  border-bottom: 1px solid black;
  /* background-color: rgb(194, 243, 227); */
}
.active {
  outline: none;
  color: white;
    border-bottom: 1px solid black;

  /* background-color: rgb(0, 202, 135); */
}
.active:hover {
  outline: none;
  border: none;
  padding: 10px 20px;
  color: white;
  /* background-color: rgb(0, 202, 135); */
}
</style>