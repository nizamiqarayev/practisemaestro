<template>
  <div class="flex flex-col w-full">
    <HeaderVue />
    <secondaryheaderVue />
    <div class="flex gap-28">
      <ActionsVue />
      <CartGridVue :griddata="computeddata" />
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderVue from "./components/Header.vue";
import ActionsVue from "./components/Actions.vue";
import CartGridVue from "./components/CartGrid.vue";
import secondaryheaderVue from "./components/secondaryheader.vue";
import { mapActions, mapGetters } from "vuex";
import Footer from "./components/footer.vue";

export default {
  components: {
    HeaderVue,
    CartGridVue,
    ActionsVue,
    secondaryheaderVue,
    Footer,
  },
  data() {
    return {
      data: this.getdata(),
      tempdata: this.gettempdata(),
    };
  },
  computed: {
    computeddata() {
      return this.gettempdata();
    },
  },
  watch: {
    computeddata() {
      console.log(this.computeddata);
    },
  },
  methods: {
    ...mapGetters(["getdata"]),
    ...mapGetters(["gettempdata"]),
    ...mapActions(["getalldata"]),
    ...mapActions(["setdata"]),
    ...mapActions(["settempdataact"]),
    test() {
      console.log(this.tempdata);
    },
  },
  created() {
    this.setdata();
    this.settempdataact(this.getdata());
    console.log("=================");
    console.log(this.gettempdata());
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
