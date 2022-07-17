<template>
  <header class="flex justify-between bg-white">
    <div class="flex gap-4 py-5 pl-36 items-center">
      <div class="">
        <img
          class="w-14 h-14"
          src="https://www.izzidone.com/_nuxt/img/logo.cb8a558.svg"
        />
        <!-- <img class="" src="../assets/images/izzi.png" /> -->
        <!-- <img class="" src="../assets/images/izzipart2.png" /> -->
      </div>

      <!-- <div>
          <img class="belowimg" src="../assets/images/Ellipse 1.png" />
        </div> -->
      <a class="ml-4 w-20 h-7 rounded text-center hover:bg-slate-400" href="#"
        ><p class="text-black font-sans">My Orders</p></a
      >
      <a class="w-20 h-7 rounded text-center hover:bg-slate-400" href="#"
        ><p class="text-black font-sans">Help</p></a
      >
      <a class="w-20 h-7 rounded text-center hover:bg-slate-400" href="#"
        ><p class="text-black font-sans">Services</p></a
      >
    </div>
    <div class="flex items-center pr-1 gap-9">
      <div class="">
        <a
          class="flex items-center bg-headerurgentbutton py-2 px-10 rounded-md gap-2"
          ><i class="fa-solid fa-bolt text-white"></i>
          <h1 class="text-white text-xl">Urgent</h1></a
        >
      </div>
      <div class="gap-2 items-center flex">
        <img class="h-11 w-11" src="../assets/images/pfp.png" />
        <h2 class="pr-10">Elona Musket</h2>
        <img class="w-5 h-5" src="../assets/images/united-kingdom.png" />
      </div>
      <div></div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HeaderVue_",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  actions: {
    ...mapGetters["getdata"],
  },
  methods: {
    datacheck() {
      console.log(this.$store.getters.getdata);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
