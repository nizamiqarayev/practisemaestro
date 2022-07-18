<template>
  <div class="flex flex-col gap-5 items-center p-5">
    <div class="flex flex-col" v-for="user in this.users" :key="user.id">
      <!-- <Post v-for="ids in post.length" -->
      <!-- <UserPosts :user="user"></UserPosts> -->
      <div class="flex items-center space-x-4">
        <img
          class="w-16 h-16 rounded-full"
          src="data:image/jpeg;base64,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"
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
