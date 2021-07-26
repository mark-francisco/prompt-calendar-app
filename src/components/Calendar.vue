<template>
  <div class="calendar">
    <h1>Testing this message here!</h1>
    <!-- <h1>{{ title }}</h1>
    <h2>{{ computedTitle }}</h2> -->
    <!-- <app-calendar-day></app-calendar-day> -->
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "hello world. this is a calendar.",
    };
  },
  // methods: {
  //   // changeTitle() {
  //   // }
  // },
  // created: function () {
  //   // methods: {
  //   // }
  // },
  // computed: {
  //   computedTitle() {
  //     return this.title + "yo";
  //   },
  // },
  // filters: {
  //   lowercase: function (value) {
  //     return value.toLowerCase();
  //   },
  // },
  // //to register local components from another file into this file:
  // import ___ from "./components/__.vue";
  // components: {
  //   "app-calendar-day": {
  //     data: function () {
  //       return { days: ["mon", "tue", "wed"] };
  //     },
  //     template: "<div>days go here.</div>",
  //   },
  // },
};
</script>
