<template>
  <div class="w-52 flex flex-col p-14 ml-20">
    <div class="flex flex-col">
      <form class="">
        <p class="text-2xl">Filters</p>
        <div class="gap-4 items-center">
          <input
            @change="filter"
            type="checkbox"
            id="toppro"
            name="filter"
            v-model="toppro"
            v-bind:true-value="true"
            v-bind:false-value="false"
            class="w-5 h-5 hover:cursor-pointer hover:bg-gray-200"
          />
          <label
            for="toppro"
            class="text-left w-20 hover:cursor-pointer hover:bg-slate-100"
            >Top pros</label
          >
        </div>

        <div class="gap-4 items-center">
          <input
            @change="filter"
            type="checkbox"
            id="newpro"
            name="filter"
            v-model="newpro"
            v-bind:true-value="true"
            v-bind:false-value="false"
            class="w-5 h-5 hover:cursor-pointer hover:bg-gray-200"
          />
          <label
            class="text-left w-20 hover:cursor-pointer hover:bg-gray-200"
            for="newpro"
            >New pros</label
          >
        </div>
        <div class="gap-4 items-center">
          <input
            @change="filter"
            type="checkbox"
            id="supervisor"
            name="filter"
            v-model="supervisor"
            v-bind:true-value="true"
            v-bind:false-value="false"
            class="w-5 h-5 hover:cursor-pointer hover:bg-gray-200"
          />
          <label
            class="text-left w-20 hover:cursor-pointer hover:bg-gray-200"
            for="supervisor"
            >Supervisors</label
          >
        </div>

        <div class="gap-4 items-center">
          <input
            @change="filter"
            type="checkbox"
            id="pro"
            name="filter"
            v-model="pro"
            v-bind:true-value="true"
            v-bind:false-value="false"
            class="w-5 h-5 hover:cursor-pointer hover:bg-gray-200"
          />
          <label
            class="text-left w-20 hover:cursor-pointer hover:bg-gray-200"
            for="pro"
            >pros</label
          >
        </div>
      </form>

      <div class="flex flex-col gap-3 mt-3">
        <p class="text-2xl">Sorting</p>
        <div class="flex flex-col align-middle">
          <label class="w-36" for="sortbyrating">By rating</label>
          <select
            v-model="selectedsortrating"
            name="sortbyrating"
            class="hover:bg-slate-100 w-52 h-10 border-2 border-solid border-gray-700 rounded-xl text-justify hover:cursor-pointer"
            id="sortbyrating"
            @change="ratesort()"
          >
            <option selected value="nothing">No Filter</option>
            <option value="descending">Descending</option>
            <option value="ascending">Ascending</option>
          </select>
        </div>
        <div class="flex flex-col align-middle">
          <label class="w-36">By Tasks Count</label>
          <select
            v-model="selectedsorttasks"
            for="sortbytasks"
            name="sortbytasks"
            class="hover:bg-slate-100 w-52 h-10 border-2 border-solid border-gray-700 rounded-xl hover:cursor-pointer"
            id="sortbytasks"
            @change="tasksort()"
          >
            <option selected value="nothing">No Filter</option>
            <option value="descending">Descending</option>
            <option value="ascending">Ascending</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Actions_",
  data() {
    return {
      data: this.getdata(),
      temp: this.gettempdata(),
      selectedsortrating: "",
      selectedsorttasks: "",
      toppro: false,
      newpro: false,
      supervisor: false,
      pro: false,
    };
  },
  methods: {
    filter() {
      const actions = [this.toppro, this.newpro, this.supervisor, this.pro];
      this.setdata();
      this.settempdataact(this.getdata());
      this.temp = this.gettempdata();
      if (this.selectedsortrating != "") {
        this.ratesort();
      }
      if (this.selectedsorttasks != "") {
        this.tasksort();
      }
      if (actions[0] == true) {
        this.topprofilter(this.temp);
        console.log("Topprochecked");
      }
      if (actions[1] == true) {
        this.newprofilter(this.temp);
        console.log("newprochecked");
      }
      if (actions[2] == true) {
        this.supervisorfilter(this.temp);
        console.log("supervisorchecked");
      }
      if (actions[3] == true) {
        this.profilter(this.temp);
        console.log("prochecked");
      }
    },
    topprofilter(tempdata) {
      const tempdatatofilter = tempdata;
      let filteredobjects = [];
      tempdatatofilter.data.taskers.forEach((element) => {
        if (element.eliteTasker === true) {
          console.log("picking");
          filteredobjects.push(element);
        }
      });
      tempdatatofilter.data.taskers = filteredobjects;
      this.settempdataact(tempdatatofilter);
      this.ratesort();
      this.tasksort();
    },
    newprofilter(tempdata) {
      const tempdatatofilter = tempdata;
      let filteredobjects = [];
      for (
        let index = 0;
        index < tempdatatofilter.data.taskers.length;
        index++
      ) {
        if (tempdatatofilter.data.taskers[index].startDate != null) {
          const date = new Date();
          const timedate =
            tempdatatofilter.data.taskers[index].startDate.split("-");
          if (
            date.getMonth() + 1 - parseInt(timedate[1]) < 3 &&
            date.getMonth() + 1 - parseInt(timedate[1]) >= 0 &&
            date.getFullYear() - parseInt(timedate[0]) < 1
          ) {
            filteredobjects.push(tempdatatofilter.data.taskers[index]);
          }
        }
      }
      tempdatatofilter.data.taskers = filteredobjects;
      this.settempdataact(tempdatatofilter);
    },
    supervisorfilter(tempdata) {
      const tempdatatofilter = tempdata;
      let filteredobjects = [];
      tempdatatofilter.data.taskers.forEach((element) => {
        if (element.supervisor === true) {
          console.log("picking");
          filteredobjects.push(element);
        }
      });
      tempdatatofilter.data.taskers = filteredobjects;
      this.settempdataact(tempdatatofilter);
    },
    profilter(tempdata) {
      const tempdatatofilter = tempdata;
      let filteredobjects = [];
      for (
        let index = 0;
        index < tempdatatofilter.data.taskers.length;
        index++
      ) {
        if (tempdatatofilter.data.taskers[index].startDate != null) {
          const date = new Date();
          const timedate =
            tempdatatofilter.data.taskers[index].startDate.split("-");
          console.log(date.getMonth() + 1);
          console.log(parseInt(timedate[1]));
          console.log(date.getMonth() + 1 - parseInt(timedate[1]));
          console.log(date.getFullYear() - parseInt(timedate[0]));
          if (
            date.getMonth() + 1 - parseInt(timedate[1]) > 3 ||
            date.getMonth() + 1 - parseInt(timedate[1]) < 0 ||
            date.getFullYear() - parseInt(timedate[0]) >= 1
          ) {
            console.log("====================================");
            console.log(tempdatatofilter.data.taskers[index]);
            console.log("====================================");
            filteredobjects.push(tempdatatofilter.data.taskers[index]);
          }
        } else {
          filteredobjects.push(tempdatatofilter.data.taskers[index]);
        }
      }
      tempdatatofilter.data.taskers = filteredobjects;
      this.settempdataact(tempdatatofilter);
    },
    ratesort() {
      let tempdataforsort = this.gettempdata();
      let sortedtaskers = tempdataforsort.data.taskers;
      if (this.selectedsortrating == "nothing") {
        console.log("wtf");
      } else if (this.selectedsortrating == "descending") {
        console.log("wtf1");
        sortedtaskers.sort(function (a, b) {
          return b.averageRating - a.averageRating;
        });
      } else if (this.selectedsortrating == "ascending") {
        console.log("wtf2");
        sortedtaskers.sort(function (a, b) {
          return a.averageRating - b.averageRating;
        });
      }
      tempdataforsort.data.taskers = sortedtaskers;
      this.settempdataact(tempdataforsort);
    },
    tasksort() {
      let tempdataforsort = this.gettempdata();
      let sortedtaskers = tempdataforsort.data.taskers;
      if (this.selectedsorttasks == "descending") {
        sortedtaskers.sort(function (a, b) {
          return b.completedTasks - a.completedTasks;
        });
      }
      if (this.selectedsorttasks == "ascending") {
        sortedtaskers.sort(function (a, b) {
          return a.completedTasks - b.completedTasks;
        });
      }
      tempdataforsort.data.taskers = sortedtaskers;
      this.settempdataact(tempdataforsort);
    },
    ...mapActions(["settempdataact"]),
    ...mapActions(["setdata"]),
    ...mapGetters(["getdata"]),
    ...mapGetters(["gettempdata"]),
  },
  created() {
    this.setdata();
    this.settempdataact(this.getdata());
  },
};
</script>

<style scoped>
.parent {
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 50px;
}
.filters {
  display: flex;
  flex-direction: column;
}
.sorting {
  display: flex;
  flex-direction: column;
}
</style>
