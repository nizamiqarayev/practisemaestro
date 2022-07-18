<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex items-start gap-80">
      <router-link
        to="/"
        class="flex items-center font-extrabold text-xl relative left-40"
        ><img
          class="w-7 h-7"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAIAAABcXF3BwcHAwMDExMRaWltcXFxfX2CRkZHLy8uwsLDa2tpLS0zv7+9oaGmHh4dGRkd4eHjj4+PU1NU7Ozy3t7ciIiInJyioqKllZWY2NjigoKDx8fKAgIERERKXl5gaGhxRUVEuLi56enstJyrpAAAD0ElEQVR4nO2d0XbaMBBEsWgClAIBSpNAIYS2//+LNRACHCR7DnbOetZzn/K4NyOtbGPJnY4QQgghhBBCCCGEEEIIIUp4ns9estfx9NG6kK9hMg9nvltX8wUsc6/sRP63uxxXF35HR2cxdq/9DopT66LqpHcjuFf8YV1WfQwignvFiXVhddGPCuaKT9aV1UQ8wUOIP61rq4WkYK7oop/edtELw9/W1dVAag5+DFPr8qpTKJgr0k/Egjl4NFxYV1iRkgT5DcsSpB+lpQmyd5ryBLMwsy6yCuUJ5oZr6yorELubuB2kG+sy76foSuZs+GZd5v1ggsR9Bmgye8GhdZ13AybIe4sPJsgriCwT1ILgEH22rvNulCC7oPsmowTZBcEm476L8goit0u54IN1nXcDNhleQbDJ8A5RJcieINhFeROUILug+ybj/koG7KK8CbpfJtzPQfeC4N0E75Nt94/uwWWCV1AJsgsqQXZB98uE+wTBKxleQfdNRgmyC6rJHAVH1nXeDZggr6D7BMEmw/tesxJkF3SfoHtB8HaJVxBLcMu7dwJqMln4teo2jf7T2xL4v0MJHkZpM9kta0mwwYSwLdz7jybYZELRtgf6BI+k91RPfQimN68sghfDLHEOx8yNYBZeYoJDPxHmirEXd+eOBPMrkohh5skwi5zCMXElmEXeJ1g4M3yPNBrromolcuKPf8ORM8PIQSqelsP4gujokiYn9pBl7ckwuq9642mYxs8zcnPzlD5YbOtGMbLeH3Bzgxi97j7wzYdi2KVP4HChGF6LjhihVwwhzAv8ch5RRetHvynGpT/agimGRir21sjPKViK1OeRPmCKxAfqgAOVWrEFKYJzsQWKzMfKgnORWbEFKYLthllRKXpQbEGKUpQiBVr6PShq0fCgCM7FlXWdFQBT7FnXWQEwxb51nRUAFZViowEXDeYUwXbTta6zAi0YqFo0PCgqxZMi81xswUBVih5SBNvN2LrOCoApMiu2IEXwMpxZsQUpgnPxj3WdFVC78ZBiC+ZiCxS1aHhQBFNsQbtpgWLy9XkCQEXmr5CCiiVvmDca6AIuJI4B4ABKMeysy6wCtGhQhwilGAbWVVYCmIvMn5PdA6RI/ulxIEXuidgBUiT+uMcHZSkSf/ziRIki8YG8nxQO1NT+Yy6KUgx/raurhYIU45vk+Uin6GKQ7kmlSH37dE08xRCKtliTEVNkPrs9wq0i86ePowzDlWNg/pZXgs3g7LjfRu6ljV4yWn1ukx/wHt1ewnA5/Tddu+owQgghhBBCCCGEEEIIIYQd/wFdqEBuv7+AygAAAABJRU5ErkJggg=="
        />Return</router-link
      >
      <div class="flex flex-col gap-5 w-1/2">
        <div v-for="comment in comments" :key="comment.id">
          <div class="text-xl">
            <span class="font-bold flex items-center gap-2"
              ><img
                class="w-14 h-14 rounded-full"
                src="https://this-person-does-not-exist.com/img/avatar-7e7a1d7ab94ca3bc31a7c1722d971903.jpg"
              />{{ comment.name }}</span
            >
            <p class="">{{ comment.body }}</p>
          </div>
        </div>
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
