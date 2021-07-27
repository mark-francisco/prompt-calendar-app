<template>
  <div class="calendar">
    <app-heading v-bind:selectedDate="selectedDate" />

    <ol class="calendar-days-grid">
      <app-calendar-day
        v-for="day in days"
        v-bind:key="day.date"
        v-bind:dayNumber="day.dayOfMonth"
        v-bind:isToday="today.format('YYYY-MM-DD') === day.date"
      ></app-calendar-day>
      <!-- v-bind:hasEvent="this.hasEvent"
        v-on:eventStatusUpdated="hasEvent = $event" -->
    </ol>

    <div>{{ daysArray }}</div>
  </div>

  <!-- next steps: -->
  <!-- offset arr to align the weekdays somehow -->
  <!-- add events properties to days -->
  <!-- complete CalendarDay component -->
  <!-- complete AddEvent and EditEvent components -->
  <!-- add ability to change month / year -->
  <!-- add styles based on isToday -->
</template>

<style scoped>
.calendar-days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  border: 1px solid black;
  padding: 5px;
}
</style>

<script>
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
dayjs.extend(weekday);

export default {
  data() {
    return {
      today: dayjs(),
      selectedDate: dayjs(),
    };
  },
  methods: {
    // getWeekday(date) {
    //   return dayjs(date).weekday();
    // },
  },
  computed: {
    days() {
      return this.daysArray;
    },
    numDaysInMonth() {
      return dayjs(this.selectedDate).daysInMonth();
    },

    month() {
      return Number(this.selectedDate.format("M"));
    },

    year() {
      return Number(this.selectedDate.format("YYYY"));
    },

    daysArray() {
      // construct new Array with defined length, but with empty values.
      // map each of the arrItems into objects
      return [...new Array(this.numDaysInMonth)].map((_arrItem, index) => {
        return {
          date: dayjs(`${this.year}-${this.month}-${index + 1}`).format("YYYY-MM-DD"),
          dayOfMonth: dayjs(`${this.year}-${this.month}-${index + 1}`).date(),
          dayOfWeek: dayjs(`${this.year}-${this.month}-${index + 1}`).day(),
        };
      });
    },
  },
};
</script>
