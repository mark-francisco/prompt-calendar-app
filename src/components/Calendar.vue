<template>
  <div class="calendar">
    <app-heading v-bind:today="today" />

    <ol class="calendar-days-grid">
      <app-calendar-day v-for="day in listOfDays" v-bind:key="day.date" v-bind:dayNumber="1"></app-calendar-day>
    </ol>

    <!-- <app-calendar-day
      v-bind:dayNumber="1"
      v-bind:hasEvent="this.hasEvent"
      v-on:eventStatusUpdated="hasEvent = $event"
    ></app-calendar-day>
     -->
  </div>
</template>

<style scoped>
.calendar-days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid black;
  padding: 5px;
}
</style>

<script>
import dayjs from "dayjs";

export default {
  data() {
    return {
      listOfDays: ["day1", "day2", "day3"],
      today: dayjs(),
    };
  },
  methods: {
    // today() {
    //   return dayjs().format("YYYY-MM-DD");
    // },
  },
  computed: {
    days() {
      return this.currentMonthDays;
    },
  },
};
</script>
