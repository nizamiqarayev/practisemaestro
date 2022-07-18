<template>
  <div class="flex flex-col gap-5 items-center p-5">
    <div class="flex flex-col" v-for="user in this.users" :key="user.id">
      <!-- <Post v-for="ids in post.length" -->
      <!-- <UserPosts :user="user"></UserPosts> -->
      <div class="flex items-center space-x-4">
        <img
          class="w-16 h-16 rounded-full"
          src="https://this-person-does-not-exist.com/img/avatar-7e7a1d7ab94ca3bc31a7c1722d971903.jpg"
        />
        <div class="flex gap-4 items-center">
          <div class="w-40">{{ user.username }}</div>
          <router-link
            class="py-2 px-4 rounded bg-purple-600"
            :to="{ name: 'userposts', params: { id: user.id } }"
          >
            Posts
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Post from "./post.vue";
// import UserPosts from "./userposts.vue";
export default {
  name: "Posts_",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Post,
    // UserPosts,
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
