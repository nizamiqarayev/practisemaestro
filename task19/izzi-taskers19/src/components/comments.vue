<template>
  <div>
    <router-link to="/">Return</router-link>
    <div class="flex flex-col gap-5">
      <div v-for="comment in comments" :key="comment.id">
        <div>{{ comment.name }}: {{ comment.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Comments_",
  data() {
    return {
      postid: this.$route.params.id,
      comments: {},
    };
  },
  async mounted() {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${this.postid}`;
    try {
      this.comments = await axios.get(url).then((res) => res.data);
      console.log("====================================");
      console.log(this.comments);
      console.log("====================================");
    } catch (error) {
      this.comments = null;
    }
  },
};
</script>

<style scoped></style>
