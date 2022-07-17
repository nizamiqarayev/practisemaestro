<template>
  <div>
    <div v-for="user in this.users" :key="user.id">
      <!-- <Post v-for="ids in post.length" -->
      <UserPosts :user="user"></UserPosts>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Post from "./post.vue";
import UserPosts from "./userposts.vue";
export default {
  name: "Posts_",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Post,
    UserPosts,
  },
  data() {
    return {
      users: {},
      posts: {},
      albums: {},
    };
  },
  computed: {
    postsdisplay() {
      return this.posts;
    },
  },
  async mounted() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      this.users = await axios.get(url).then((res) => res.data);
    } catch (error) {
      this.user = null;
    }
    console.log("====================================");
    console.log(this.users);
    console.log("====================================");
  },
};
</script>

<style scoped></style>
