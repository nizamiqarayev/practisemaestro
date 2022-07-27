<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/return-in-computed-property -->
<!-- eslint-disable no-unused-vars -->
<template>
  <div class="flex items-center justify-center h-screen w-full">
    <transition name="fade">
      <div
        v-if="this.searchpage == true"
        class="flex items-center justify-center transition-all"
      >
        <i class="fa-solid fa-magnifying-glass relative left-7"></i>
        <input
          class="
            h-10
            w-10
            text-center
            border-solid border-2 border-gray-400
            outline-slate-500
            rounded-full
            focus:w-60
            transition-all
            text-black
          "
          v-on:keyup.enter="citycoordsfetcher()"
          type="text"
          v-model="city"
          placeholder=""
        />
      </div>
    </transition>
    <transition name="fade">
      <div
        v-if="this.weatherpage == true"
        class="flex items-center transition-all"
      >
        <div
          class="
            bg-weather-bg
            w-60
            h-80
            bg-no-repeat bg-cover
            pr-16
            pt-0
            flex flex-col
            justify-evenly
            rounded-3xl
            hover:w-72 hover:h-96 hover:transition-all
          "
          @mouseover="changeHumidityAndWind(data.current)"
        >
          <div>
            <h1 class="text-2xl text-white">{{ todaysday }}</h1>
            <p class="text-white">{{ date }}</p>
            <p class="text-white">
              {{ this.citydata.name }}, {{ this.citydata.sys.country }}
            </p>
          </div>
          <div class="flex flex-col items-center text-3xl">
            <img
              :src="this.iconurls[this.citydata.weather[0].icon]"
              class="w-20 h-20"
            />
            <h1 class="text-white">{{ this.citydata.main.temp }}°C</h1>
            <p class="text-white">{{ this.citydata.weather[0].main }}</p>
          </div>
        </div>
        <div class="flex flex-col bg-black h-72 rounded-xl text-white">
          <div class="flex flex-col items-start w-full px-10 py-1">
            <div class="flex justify-between w-full py-2">
              <p class="pl-10">Humidity</p>
              <p class="pr-10">{{ this.humidity }}%</p>
            </div>
            <div class="flex justify-between w-full py-2">
              <p class="pl-10">Wind</p>
              <p class="pr-10">{{ this.wind }}km/h</p>
            </div>
          </div>
          <div class="flex">
            <div
              @mouseover="changeHumidityAndWind(day)"
              class="
                flex flex-col
                p-2
                w-24
                hover:bg-white hover:py-2
                transition-all
                rounded-3xl
                hover:text-black
              "
              v-for="(day, index) in forecasts"
              :key="day.dt"
            >
              <input v-show="false" />
              <img class="w-16 h-16" :src="iconurls[day.weather[0].icon]" />
              <p>{{ weekday(index) }}</p>
              <h1>{{ day.temp.max }}°C</h1>
            </div>
          </div>
          <div class="pt-5">
            <a
              href="searchagain()"
              class="
                py-4
                px-72
                rounded-full
                text-black text-xl
                bg-weather-bg bg-cover bg-no-repeat
              "
              >Change Location</a
            >
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Weatherapp_",
  data() {
    return {
      searchpage: true,
      weatherpage: false,
      city: "",
      citydata: {},
      country: "",
      citylon: 0,
      citylat: 0,
      data: {},
      currenticon: "",
      todaystemp: 0,
      todaysweather: "",
      humidity: 0,
      wind: 0,
      currentday: {},
      forecasts: [],
      dayindex: 0,
      iconurls: {
        "01d": "http://openweathermap.org/img/wn/01d@2x.png",
        "02d": "http://openweathermap.org/img/wn/02d@2x.png",
        "03d": "http://openweathermap.org/img/wn/03d@2x.png",
        "04d": "http://openweathermap.org/img/wn/04d@2x.png",
        "09d": "http://openweathermap.org/img/wn/09d@2x.png",
        "10d": "http://openweathermap.org/img/wn/10d@2x.png",
        "11d": "http://openweathermap.org/img/wn/11d@2x.png",
        "13d": "http://openweathermap.org/img/wn/13d@2x.png",
        "50d": "http://openweathermap.org/img/wn/50d@2x.png",
        "01n": "http://openweathermap.org/img/wn/01n@2x.png",
        "02n": "http://openweathermap.org/img/wn/02n@2x.png",
        "03n": "http://openweathermap.org/img/wn/03n@2x.png",
        "04n": "http://openweathermap.org/img/wn/04n@2x.png",
        "09n": "http://openweathermap.org/img/wn/09n@2x.png",
        "10n": "http://openweathermap.org/img/wn/10n@2x.png",
        "11n": "http://openweathermap.org/img/wn/11n@2x.png",
        "13n": "http://openweathermap.org/img/wn/13n@2x.png",
        "50n": "http://openweathermap.org/img/wn/50n@2x.png",
      },
      arrayOfWeekdays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      todaysdaymultiplier: 0,
      testData: {},
    };
  },
  computed: {
    citylogger() {
      console.log(this.city);
      return this.city;
    },
    todaysday() {
      let dateObj = new Date();
      let weekdayNumber = dateObj.getDay();
      let weekdayName = this.arrayOfWeekdays[weekdayNumber];
      return weekdayName;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    todayiconpicker() {},
    date() {
      const today = new Date();
      return (
        today.toLocaleString("en-GB", { month: "short" }) +
        " " +
        today.getDate() +
        ", " +
        today.getFullYear()
      );
    },
  },
  methods: {
    searchagain() {
      this.searchpage = !this.searchpage;
      this.weatherpage = !this.weatherpage;
      this.citydata = {};
      this.data = {};
    },
    weekday(index) {
      let dateObj = new Date();
      let weekdayNumber = dateObj.getDay();
      let weekdayName;
      if (weekdayNumber + index >= 7) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        weekdayName = this.arrayOfWeekdays[(weekdayNumber + index) % 7];
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      } else {
        weekdayName = this.arrayOfWeekdays[weekdayNumber + index];
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      }
      return weekdayName;
    },
    async citycoordsfetcher() {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=abfc99ca74ebd73b71778a4b48b3b468&units=metric`
      )
        .then((response) => response.json())
        .then((commits) => (this.citydata = commits));
      console.log("currentcitydata: ", this.citydata);
      this.citylon = this.citydata.coord.lon;
      this.citylat = this.citydata.coord.lat;
      console.log(this.citydata.sys);

      this.weatherdatafetcher();
    },
    async weatherdatafetcher() {
      try {
        await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${this.citylat}&lon=${this.citylon}&exclude=alerts&appid=abfc99ca74ebd73b71778a4b48b3b468&units=metric
`
        )
          .then((response) => response.json())
          .then((commits) => (this.data = commits))
          .then(() => (this.searchpage = !this.searchpage))
          .then(() =>
            setTimeout(() => {
              this.weatherpage = !this.weatherpage;
            }, "1500")
          );
      } catch (error) {
        console.log("Data doesnt exist");
      }

      this.humidity = this.data.current.humidity;
      this.currentday = this.data.current;
      this.wind = this.data.current.wind_speed;
      this.forecasts = this.data.daily;
      console.log(this.data);
      console.log("amogus:", this.forecasts);
    },
    changeHumidityAndWind(day) {
      this.humidity = day.humidity;
      this.wind = day.wind_speed;
    },
    async tempfunction() {
      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${this.citylat}&lon=${this.citylon}&exclude=alerts&appid=abfc99ca74ebd73b71778a4b48b3b468&units=metric`
      )
        .then((response) => response.json())
        .then((commits) => (this.testData = commits));
    },
  },
};
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.5s;
}
.fade-leave-active {
  transition: all 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
