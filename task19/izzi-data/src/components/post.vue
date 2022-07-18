<template>
  <div class="flex gap-2 w-96 flex-col w-full shadow-2xl p-4">
    <!-- <div
      class="w-full top-0 left-0 h-screen fixed flex justify-center items-center bg-opacity-80 bg-black"
      v-if="isEnlarged"
      @click="isEnlarged = !isEnlarged"
    >
      <img :src="this.enlargedimagedisplayer" />
    </div> -->
    <div class="flex w-full gap-2 items-center">
      <img
        class="w-16 h-16 rounded-full"
        src="https://this-person-does-not-exist.com/img/avatar-7e7a1d7ab94ca3bc31a7c1722d971903.jpg"
      />
      <router-link
        class="font-bold text-lg"
        :to="{ name: 'userposts', params: { id: this.user.id } }"
      >
        {{ this.user.username }}
      </router-link>
    </div>
    <div class="h-32">{{ this.post.body }}</div>
    <router-link
      class="w-24 py-2 bg-purple-600 rounded text-custombgcolor text-center"
      :to="{ name: 'comments', params: { id: this.post.id } }"
    >
      Comments
    </router-link>
    <!-- <router-view /> -->

    <!-- <div>{{ useablephotodisplay }}</div> -->
    <!-- <div class="grid grid-cols-10">
      <div class="" v-for="photo in this.useablephotos" :key="photo.id">
        {{ photo.id }}
        <img
          :id="photo.id"
          :src="photo.thumbnailUrl"
          @click="imageEnlarger(photo.id)"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "Post_",
  props: {
    user: {},
    post: {},
  },
  data() {
    return {
      currentPost: this.post,
      // photos: {},
      // useablephotos: [],
      // enlargedimagedisplayer: "",
      // isEnlarged: false,
      // allPhotos: {},
    };
  },
  computed: {
    useablephotodisplay() {
      return this.useablephotos;
    },
  },
  methods: {
    imageEnlarger(id) {
      //   console.log("====================================");
      //   console.log(this.allPhotos[id - 1].url);
      //   console.log("====================================");
      this.enlargedimagedisplayer = this.allPhotos[id - 1].url;
      console.log("bura : ", this.allPhotos[id - 1].url);
      this.isEnlarged = !this.isEnlarged;
    },
  },
  async mounted() {
    // const url = `https://jsonplaceholder.typicode.com/photos?albumId=${this.post.id}`;
    // try {
    //   this.photos = await axios.get(url).then((res) => res.data);
    //   for (let index = 0; index < 10; index++) {
    //     this.useablephotos.push(this.photos[index]);
    //   }
    // } catch (error) {
    //   this.useablephotos = null;
    // }
    // const forEnlarged = `https://jsonplaceholder.typicode.com/photos`;
    // try {
    //   this.allPhotos = await axios.get(forEnlarged).then((res) => res.data);
    // } catch (error) {
    //   this.allPhotos = null;
    // }
    // console.log("====================================");
    // console.log(this.post);
    // console.log(this.user);
    // console.log("====================================");
  },
};
</script>

<style></style>
