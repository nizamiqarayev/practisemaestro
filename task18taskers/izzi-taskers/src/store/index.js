/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
    tempdata:{}
  },
  getters: { getdata: (state) => state.data,
  gettempdata:(state)=> state.tempdata},
  mutations: {
    set_temp_data(state, tempdata) {
      state.tempdata = tempdata;
    },
    set_data(state){
      state.data=
      {
        "data": {
          "taskers": [
            {
              "id": "ckzeae06f4218o8slk9oh6dph",
              "startDate": "2022-07-9T20:00:00.000Z",
              "averageRating": 0,
              "completedTasks": 0,
              "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
              "supervisor": false,
              "eliteTasker": false,
              "user": {
                "name": "Israfuil",
                "surname": "Mammadov",
                "profile_picture": null
              }
            },
            {
              "id": "ckzeafteh4871o8slhwcu4s28",
              "startDate": "2021-11-03T20:00:00.000Z",
              "averageRating": 3,
              "completedTasks": 24,
              "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
              "supervisor": false,
              "eliteTasker": false,
              "user": {
                "name": "Ruslan",
                "surname": "Malikov",
                "profile_picture": null
              }
            },
            {
              "id": "ckzeaew7t4540o8slh2qdxd8d",
              "startDate": "2022-01-31T20:00:00.000Z",
              "averageRating": 4,
              "completedTasks": 0,
              "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
              "supervisor": false,
              "eliteTasker": true,
              "user": {
                "name": "Vasif",
                "surname": "Abdullayev",
                "profile_picture": null
              }
            },
            {
              "id": "ckzsf7ese416140mt91qu25tgn",
              "startDate": null,
              "averageRating": 0,
              "completedTasks": 0,
              "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
              "supervisor": false,
              "eliteTasker": false,
              "user": {
                "name": "Ruhid yeni",
                "surname": "Shukurlu",
                "profile_picture": null
              }
            },
            {
              "id": "ckzo92okt349260myr9mmo2aih",
              "startDate": null,
              "averageRating": 4,
              "completedTasks": 0,
              "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
              "supervisor": false,
              "eliteTasker": false,
              "user": {
                "name": "Ruhid",
                "surname": "Shukurlu",
                "profile_picture": null
              }
            },
            {
              "id": "cl046uyq5183710mxgmtxso4nx",
              "startDate": "2022-05-03T20:00:00.000Z",
              "averageRating": 5,
              "completedTasks": 3,
              "bio": "The first supervisor. Anything you need purchased I can do for you. Live in Baku, know the city pretty well.",
              "supervisor": true,
              "eliteTasker": false,
              "user": {
                "name": "Helena",
                "surname": "Parker",
                "profile_picture": {
                  "publicUrl": "https://res.cloudinary.com/dtokoknba/image/upload/v1645900581/profile-photos/cl046pk6u00010mxg33hodire.jpg"
                }
              }
            },
            {
              "id": "cl3n3akon0024dburf07av6cq",
              "startDate": null,
              "averageRating": 0,
              "completedTasks": 0,
              "bio": "lorem ipsum dolor sit",
              "supervisor": false,
              "eliteTasker": false,
              "user": {
                "name": "Azer Tasker",
                "surname": "Tasker",
                "profile_picture": {
                  "publicUrl": "https://res.cloudinary.com/dtokoknba/image/upload/v1653574257/profile-photos/cl3n3f22v00000mpxauhtar07.jpg"
                }
              }
            },
            {
              "id": "cl45e16dr621600mtk65a1m13s",
              "startDate": null,
              "averageRating": 0,
              "completedTasks": 0,
              "bio": "test",
              "supervisor": false,
              "eliteTasker": false,
              "user": {
                "name": "Ayshan",
                "surname": "Hasanova",
                "profile_picture": null
              }
            },
            {
              "id": "cl0rvkjxl94440mzr96obykhs",
              "startDate": null,
              "averageRating": 0,
              "completedTasks": 0,
              "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
              "supervisor": false,
              "eliteTasker": false,
              "user": {
                "name": "Elburus",
                "surname": "Shukurov",
                "profile_picture": null
              }
            },
            {
              "id": "ckz4dkjas20880mvz1vpvz12q",
              "startDate": "2022-02-01T20:00:00.000Z",
              "averageRating": 4,
              "completedTasks": 4,
              "bio": "dedede",
              "supervisor": true,
              "eliteTasker": true,
              "user": {
                "name": "Asg",
                "surname": "Asgarova",
                "profile_picture": {
                  "publicUrl": "https://res.cloudinary.com/dtokoknba/image/upload/v1648729156/profile-photos/cl1eyrpoj00003aw1gclb88hs.png"
                }
              }
            }
          ]
        }
      }
    }
  },
  actions: {
    settempdataact({ commit },tempdata) {
      commit("set_temp_data",tempdata)
    },
    setdata({commit}){
      commit("set_data")
    }},

  modules: {},
});
