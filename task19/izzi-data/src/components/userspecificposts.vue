<template>
  <div class="flex flex-col">
    <div v-for="post in this.posts" :key="post.id">
      <Post :post="post" :user="currentuserdata"></Post>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Post from "./post.vue";
export default {
  name: "UserSpecificPosts_",
  components: {
    Post,
  },
  data() {
    return {
      user: this.$route.params.id,
      posts: {},
      currentuserdata: {},
    };
  },
  async mounted() {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${this.user}`;
    try {
      this.posts = await axios.get(url).then((res) => res.data);
    } catch (error) {
      this.posts = null;
    }
    const urluser = `https://jsonplaceholder.typicode.com/users/${this.user}`;
    try {
      this.currentuserdata = await axios.get(urluser).then((res) => res.data);
    } catch (error) {
      this.currentuserdata = null;
    }
    console.log("====================================");
    console.log(this.posts);
    console.log("====================================");
  },
};
</script>

<style></style>
