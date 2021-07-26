<template>
  <div class="calendar">
    <h1>{{ title }}</h1>
    <!-- <h2>{{ computedTitle }}</h2> -->
    <app-calendar-day
      v-bind:dayOfWeek="days[0]"
      v-bind:dayNumber="1"
      v-bind:hasEvent="this.hasEvent"
      v-on:eventStatusUpdated="hasEvent = $event"
    ></app-calendar-day>
    <hr />
    <app-calendar-day
      v-bind:dayOfWeek="days[1]"
      v-bind:dayNumber="2"
      v-bind:hasEvent="this.hasEvent"
      v-on:eventStatusUpdated="hasEvent = $event"
    ></app-calendar-day>
  </div>
</template>

<style></style>

<script>
// import ___ from "./components/__.vue";
export default {
  data() {
    return {
      title: "hello world. this is a calendar.",
      days: ["Mon", "Tue", "Wed"],
      hasEvent: false,
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
};
</script>
