<template>
  <div class="grid grid-cols-2 gap-20 p-7">
    <Cart
      v-for="data in griddatecompute.data.taskers"
      :key="data.id"
      :data="data"
    />
  </div>
</template>

<script>
import Cart from "./Cart.vue";
export default {
  name: "CartGrid_",

  props: {
    griddata: {},
  },

  components: {
    Cart,
  },
  computed: {
    griddatecompute() {
      console.log(this.griddata);
      return this.griddata;
    },
  },
  watch: {
    griddatecompute: function () {
      console.log(this.griddata);
      console.log("griddd");
      return this.griddata;
    },
  },
};
</script>

<style>
div {
  display: grid;
  grid-template-columns: auto auto;
}
</style>
