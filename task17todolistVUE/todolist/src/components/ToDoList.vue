<template>
<div>
 <h1>ToDoList</h1>

  <ToDoListItem />
</div>
 
</template>

<script>
import ToDoListItem from "@/components/ToDoListItem.vue"

export default{
  components: {
    ToDoListItem
  }
  }
</script>


<style scoped>

</style>