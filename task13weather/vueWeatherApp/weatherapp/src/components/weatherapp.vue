<!-- eslint-disable vue/return-in-computed-property -->
<!-- eslint-disable no-unused-vars -->
<template>
  <div class="flex items-center justify-center h-screen w-full">
    <div v-show="this.searchpage" class="flex items-center justify-center">
      <i class="fa-solid fa-magnifying-glass relative left-6"></i>
      <input
        class="h-10 w-10 text-center border-solid border-2 border-gray-400 outline-slate-500 rounded-full focus:w-60 transition-all text-black"
        v-on:keyup.enter="citycoordsfetcher()"
        type="text"
        v-model="city"
        placeholder=""
      />
    </div>

    <div v-show="!this.searchpage" class="flex items-center transition-all">
      <div
        class="bg-weather-bg w-60 h-80 bg-no-repeat bg-cover pr-16 pt-0 flex flex-col justify-evenly rounded-3xl"
        @mouseover="changeHumidityAndWind(data.current)"
      >
        <div>
          <h1 class="text-2xl text-white">{{ todaysday }}</h1>
          <p class="text-white">{{ date }}</p>
          <p class="text-white">{{ this.citydata.name }}, {{ this.country }}</p>
        </div>
        <div class="flex flex-col items-center text-3xl">
          <img :src="this.currenticon" class="w-20 h-20" />
          <h1 class="text-white">{{ this.todaystemp }}°C</h1>
          <p class="text-white">{{ this.todaysweather }}</p>
        </div>
      </div>
      <div class="flex flex-col bg-black h-72 rounded-xl text-white">
        <div class="flex flex-col items-start w-full p-10">
          <div class="flex justify-between w-full">
            <p class="pl-10">Humidity</p>
            <p class="pr-10">{{ this.humidity }}%</p>
          </div>
          <div class="flex justify-between w-full">
            <p class="pl-10">Wind</p>
            <p class="pr-10">{{ this.wind }}km/h</p>
          </div>
        </div>
        <div class="flex">
          <div
            @mouseover="changeHumidityAndWind(day)"
            class="flex flex-col p-2 w-24 hover:bg-white hover:py-2 transition-all rounded-3xl hover:text-black"
            v-for="day in forecasts"
            :key="day.dt"
          >
            <img class="w-16 h-16" :src="iconurls[day.weather[0].icon]" />
            <p>{{ weekday() }}</p>
            <h1>{{ day.temp.max }}°C</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weatherapp_",
  data() {
    return {
      searchpage: true,
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
    weekday() {
      let dateObj = new Date();
      let weekdayNumber = dateObj.getDay() - 1;
      let weekdayName;
      if (weekdayNumber + this.todaysdaymultiplier >= 7) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        weekdayName =
          this.arrayOfWeekdays[(weekdayNumber + this.todaysdaymultiplier) % 7];
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.todaysdaymultiplier++;
      } else {
        weekdayName =
          this.arrayOfWeekdays[weekdayNumber + this.todaysdaymultiplier];
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.todaysdaymultiplier++;
      }
      if (this.todaysdaymultiplier >= 8) {
        this.todaysdaymultiplier = 0;
      }
      if (weekdayNumber + this.todaysdaymultiplier >= 14) {
        return null;
      }
      return weekdayName;
    },
    async citycoordsfetcher() {
      const axios = require("axios");
      // eslint-disable-next-line no-unused-vars
      let currentcitylon = this.citylon;
      // eslint-disable-next-line no-unused-vars
      let currentcitylat = this.citylat;
      // eslint-disable-next-line no-unused-vars
      let temppage = true;
      let tempcitydata = this.citydata;
      let tempcountry = this.country;
      let temptodaysicon = this.currenticon;
      let temporarytemp = this.todaystemp;
      let temptodaysweather = this.todaysweather;
      await axios
        .request(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=abfc99ca74ebd73b71778a4b48b3b468&units=metric`
        )
        .then(function (response) {
          temppage = false;

          console.log(response.data);
          tempcitydata = response.data;
          tempcountry = response.data.sys.country;
          temptodaysicon = response.data.weather[0].icon;
          temptodaysweather = response.data.weather[0].main;
          temporarytemp = response.data.main.temp;
          console.log(response.data.weather["icon"]);
          console.log(response.data.coord.lon);
          console.log(response.data.coord.lat);

          currentcitylon = response.data.coord.lon;
          currentcitylat = response.data.coord.lat;
        })
        .catch(function () {
          temppage = true;
        });
      this.citydata = tempcitydata;
      this.country = tempcountry;
      this.currenticon = this.iconurls[temptodaysicon];
      this.todaystemp = temporarytemp;
      this.todaysweather = temptodaysweather;
      console.log(this.todaystemp);

      this.citylon = currentcitylon;
      this.citylat = currentcitylat;
      this.searchpage = temppage;
      console.log(this.citylon);
      console.log(this.citylat);
      this.weatherdatafetcher();
    },
    async weatherdatafetcher() {
      const axios = require("axios");
      let tempdata = this.data;
      await axios
        .request(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${this.citylat}&lon=${this.citylon}&exclude=alerts&appid=abfc99ca74ebd73b71778a4b48b3b468&units=metric
`
        )
        .then(function (response) {
          tempdata = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
      this.data = tempdata;
      this.humidity = this.data.current.humidity;
      this.currentday = this.data.current;
      this.wind = this.data.current.wind_speed;
      this.forecasts = this.data.daily;
      console.log(this.data);
      console.log(this.forecasts);
    },
    changeHumidityAndWind(day) {
      this.humidity = day.humidity;
      this.wind = day.wind_speed;
    },
  },
};
</script>

<style></style>
