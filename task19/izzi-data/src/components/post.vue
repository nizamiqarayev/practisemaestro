<template>
  <div class="flex flex-col">
    <div
      class="w-full top-0 left-0 h-screen fixed flex justify-center items-center bg-opacity-80 bg-black"
      v-if="isEnlarged"
      @click="isEnlarged = !isEnlarged"
    >
      <img :src="this.enlargedimagedisplayer" />
    </div>
    <div class="">
      <router-link :to="{ name: 'userposts', params: { id: this.user.id } }">
        {{ this.user.username }}
      </router-link>
    </div>
    <div>{{ this.post.body }}</div>
    <router-link :to="{ name: 'comments', params: { id: this.post.id } }">
      Comments
    </router-link>
    <!-- <router-view /> -->

    <!-- <div>{{ useablephotodisplay }}</div> -->
    <div class="grid grid-cols-10">
      <div class="" v-for="photo in this.useablephotos" :key="photo.id">
        {{ photo.id }}
        <img
          :id="photo.id"
          :src="photo.thumbnailUrl"
          @click="imageEnlarger(photo.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Post_",
  props: {
    user: {},
    post: {},
  },
  data() {
    return {
      currentPost: this.post,
      photos: {},
      useablephotos: [],
      enlargedimagedisplayer: "",
      isEnlarged: false,
      allPhotos: {},
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
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${this.post.id}`;
    try {
      this.photos = await axios.get(url).then((res) => res.data);
      for (let index = 0; index < 10; index++) {
        this.useablephotos.push(this.photos[index]);
      }
    } catch (error) {
      this.useablephotos = null;
    }

    const forEnlarged = `https://jsonplaceholder.typicode.com/photos`;
    try {
      this.allPhotos = await axios.get(forEnlarged).then((res) => res.data);
    } catch (error) {
      this.allPhotos = null;
    }
    // console.log("====================================");
    // console.log(this.post);
    // console.log(this.user);
    // console.log("====================================");
  },
};
</script>

<style></style>
