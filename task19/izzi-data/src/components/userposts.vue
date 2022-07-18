<template>
  <div class="flex">
    <div class="flex" v-for="post in this.posts" :key="post.id">
      <Post :post="post" :user="userdatasender"></Post>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import Post from "./post.vue";
export default {
  name: "Userposts_",
  props: {
    user: {},
  },
  data() {
    return {
      posts: {},
      userdata: this.user,
    };
  },
  computed: {
    userdatasender() {
      return this.user;
    },
  },
  async mounted() {
    // console.log(this.user.id);
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${this.user.id}`;
    try {
      this.posts = await axios.get(url).then((res) => res.data);
    } catch (error) {
      this.posts = null;
    }
  },
  // components: { Post },
};
</script>

<style></style>
