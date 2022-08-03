<template>
  <div class="">
    <div>
      <div class="bg-[#27262A] flex justify-between items-center">
        <div class="flex items-center ">
          <img class="h-full pl-4 py-8 md:py-4 lg:py-8" src="../assets/logo.svg" />
          <h1 class="hidden md:inline-block text-[#8D81AC] ml-4 font-bold text-2xl hover:text-white transition-all">ForkIO</h1>
        </div>
        <div class="flex gap-11 text-[#8D81AC] font-bold justify-center items-center lg:mr-4">
          <a href="#" class="hidden lg:inline hover:text-white transition-colors">Overview</a>
          <a href="#" class="hidden lg:inline hover:text-white transition-colors">About Fork</a>
          <a href="#" class="hidden lg:inline hover:text-white transition-colors">Buying Options</a>
          <a href="#" class="hidden lg:inline hover:text-white transition-colors">Support</a>
          <a href="#" class="
          h-9
          flex
          items-center
          px-8
          md:mx-4
          lg:mx-0
          rounded-[40px]
          font-bold
          text-sm text-white
          hover:bg-white hover:text-[#8D81AC]
          transition-colors
          bg-[#8D81AC]
        ">Buy Now</a>
        </div>
        
        <i v-show="showbar == false" @click="showbar = !showbar"
          class="fa-solid fa-bars text-gray-100 mr-4 w-5 md:hidden"></i>
        <i v-show="showbar == true" @click="showbar = !showbar"
          class="fa-solid fa-x text-gray-100 mr-4 w-5 md:hidden"></i>
      </div>
      <div class="hidden md:flex lg:hidden bg-[#27262A] gap-12 pb-4 text-[#8D81AC] justify-center items-center">
        <p class="hover:text-white transition-colors">Overview</p>
        <p class="hover:text-white transition-colors">About Fork</p>
        <p class="hover:text-white transition-colors">Buying Options</p>
        <p class="hover:text-white transition-colors">Support</p>

      </div>
    </div>
    <div v-show="showbar" class="absolute z-10 w-11/12 left-0 right-0 m-auto">
      <ul>
        <li class="
            hover:pl-0
            text-2xl
            pt-7
            pb-4
            text-left text-white
            font-normal
            flex
            items-center
            bg-[#333333]
            hover:text-[#8D81AC]
            group
          ">
          <div class="
              h-11/12
              pb-2
              pt-2
              group-hover:border-l-8
              border-[#8D81AC] border-solid
            ">
            <p class="pl-9">Overview</p>
          </div>
        </li>
        <li class="
            hover:pl-0
            pt-7
            pb-4
            text-left text-white
            font-normal
            text-2xl
            flex
            items-center
            bg-[#333333]
            group
            hover:text-[#8D81AC]
          ">
          <div class="
              h-11/12
              pb-2
              pt-2
              group-hover:border-l-8
              border-[#8D81AC] border-solid
            ">
            <p class="pl-9">Buying Fork</p>
          </div>
        </li>
        <li class="
            hover:pl-0
            pt-7
            pb-4
            text-left text-white
            font-normal
            text-2xl
            flex
            items-center
            bg-[#333333]
            group
            hover:text-[#8D81AC]
          ">
          <div class="
              h-11/12
              pb-2
              pt-2
              group-hover:border-l-8
              border-[#8D81AC] border-solid
            ">
            <p class="pl-9">About Fork</p>
          </div>
        </li>
        <li class="
            hover:pl-0
            pt-7
            pb-4
            text-left text-white
            font-normal
            text-2xl
            flex
            group
            items-center
            bg-[#333333]
            hover:text-[#8D81AC]
          ">
          <div class="
              h-11/12
              pb-2
              pt-2
              group-hover:border-l-8
              border-[#8D81AC] border-solid
            ">
            <p class="pl-9">Support</p>
          </div>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      showbar: false,
    };
  },
};
</script>

<style>
</style>