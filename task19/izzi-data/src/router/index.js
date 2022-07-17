import Vue from "vue";
import VueRouter from "vue-router";
import Posts from "../components/posts.vue";
import Comments from "../components/comments.vue";
import UserSpecificPosts from "../components/userspecificposts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Posts,
  },
  {
    path: "/comments/:id",
    name: "comments",
    component: Comments,
  },
  {
    path: "/user/:id",
    name: "userposts",
    component: UserSpecificPosts,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
