<template>
  <div class=" inline-block">
    <Header />
    <Hero />
   <div class="flex flex-col items-center absolute  top-[50rem] md:top-[50.5rem] lg:top-[50rem] left-0 right-0 mx-auto gap-3 ">
      <a href="#" class="py-3 px-7 bg-[#8D81AC] w-72 text-white rounded-[40px] transition-colors hover:border-[#8D81AC] border-2 border-transparent hover:bg-white hover:text-[#8D81AC]">Download For Free Now</a>
      <a href="#" class="decoration-0">Unlimited 30-Days Trial Period</a>
    </div>
    <div class="">
      <Body/>
    <Footer />
    </div>

  </div>

</template>

<script>
import Header from "./Header.vue";
import Hero from "./Hero.vue";
import Body from "./Body.vue";
import Footer from "./Footer.vue";
export default {
  components: { Header, Hero, Body, Footer, Footer },
};
</script>

<style>
</style>