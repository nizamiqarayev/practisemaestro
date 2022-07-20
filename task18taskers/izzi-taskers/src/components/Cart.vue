<template>
  <div
    class="w-96 flex flex-col gap-2 border-2 border-solid border-custombgcolor rounded-md p-4"
  >
    <div class="flex items-center p-3 gap-2">
      <div><img src="../assets/images/pfp.png" /></div>
      <div class="flex flex-col">
        <div class="text-3xl flex gap-2">
          <p>{{ data.user.name }} {{ data.user.surname }}</p>
        </div>
        <div v-html="ratingdisplay" class="flex"></div>
      </div>
    </div>

    <div class="flex justify-evenly">
      <div v-html="tasksdisplayer"></div>
      <div v-html="topprodisplayer"></div>
      <div v-html="protypedisplayer"></div>
    </div>
    <div class="w-full h-40 flex items-center">
      <p>{{ this.data.bio }}</p>
    </div>
    <div class="flex justify-between items-center">
      <a href="" class="text-headerurgentbutton pl-2">view profile</a>
      <div class="flex gap-4 pr-5 items-center">
        <h2 class="text-headerurgentbutton bg-gray-100 py-2 px-3 rounded-md">
          $35
        </h2>
        <button
          class="py-2 px-5 border-2 border-solid text-headerurgentbutton border-custombgcolor rounded-md"
          href="#"
        >
          Book now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart_",
  props: ["data"],
  data() {
    return {
      ratingdisplay: "",
      tasksdisplay: "",
      topprodisplay: "",
      protypedisplay: "",
    };
  },
  computed: {
    computeddata() {
      return this.data;
    },
    tasksdisplayer() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.tasksdisplay = `
        <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-headerurgentbutton"></i>
        <p>${this.data.completedTasks}</p></div>
        `;
      return this.tasksdisplay;
    },
    topprodisplayer() {
      if (this.data.eliteTasker) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.topprodisplay = `  
            <div class="flex items-center gap-2"><i class="fa-solid fa-hashtag text-headerurgentbutton"></i>
            <p>TopPro</p></div>`;
      }
      return this.topprodisplay;
    },
    protypedisplayer() {
      let newpro;
      if (this.data.startDate != null) {
        const timedate = this.data.startDate.split("-");
        const date = new Date();
        if (
          date.getMonth() + 1 - parseInt(timedate[1]) < 3 &&
          date.getMonth() + 1 - parseInt(timedate[1]) >= 0 &&
          date.getFullYear() - parseInt(timedate[0]) < 1
        ) {
          newpro = true;
        } else {
          newpro = false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.protypedisplay = newpro
        ? `  
            <div class="flex items-center gap-2"><i class="fa-solid fa-heart text-headerurgentbutton"></i>
            <p>NewPro</p></div>`
        : `  
            <div class="flex items-center gap-2"><i class="fa-solid fa-heart text-headerurgentbutton"></i>
            <p>Pro</p></div>`;
      return this.protypedisplay;
    },
  },
  methods: {
    rating() {
      for (let i = 0; i < 5; i++) {
        if (i <= parseInt(this.data.averageRating)) {
          this.ratingdisplay +=
            '<span class="fa fa-star" style="color:yellow;"></span>';
        } else {
          this.ratingdisplay += '<span class="fa fa-star unchecked"></span>';
        }
      }
    },
  },
  created() {
    console.log("====================================");
    console.log(this.data);
    console.log("====================================");
    this.rating();
    // console.log(this.ratingdisplay);
  },
};
</script>

<style scoped></style>
