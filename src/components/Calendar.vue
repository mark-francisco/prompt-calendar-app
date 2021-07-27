<template>
  <div class="calendar">
    <app-heading v-bind:selectedDate="selectedDate" />

    <ol class="calendar-days-grid">
      <app-calendar-day
        v-for="day in daysArray"
        v-bind:key="day.formattedDate"
        v-bind:dayNumber="day.dayOfMonth"
        v-bind:isToday="today.format('YYYY-MM-DD') === day.date"
        v-bind:currentMonth="day.currentMonth"
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
      selectedDate: dayjs().add(2, "month"),
    };
  },
  methods: {
    // addOffsetToDaysArray() {
    //   for (let i = 0; i < this.weekdayOffset; i++) {
    //     this.daysArray.unshift(1);
    //   }
    // },
  },
  computed: {
    numDaysInMonth() {
      return dayjs(this.selectedDate).daysInMonth();
    },

    // helper methods for generating the dayjs objects
    month() {
      return Number(this.selectedDate.format("M"));
    },

    year() {
      return Number(this.selectedDate.format("YYYY"));
    },

    daysArray() {
      // create spread array based on a constructed array of defined length
      let arr = [...new Array(this.numDaysInMonth)];

      // map each of the empty arrItems into dayjs objects by using helper methods
      arr = arr.map((_arrItem, index) => {
        return {
          date: dayjs(`${this.year}-${this.month}-${index + 1}`),
          formattedDate: dayjs(`${this.year}-${this.month}-${index + 1}`).format("YYYY-MM-DD"),
          dayOfMonth: dayjs(`${this.year}-${this.month}-${index + 1}`).date(),
          dayOfWeek: dayjs(`${this.year}-${this.month}-${index + 1}`).day(),
          currentMonth: true,
        };
      });
      let firstDayOfMonth = arr[0];
      for (let i = 0; i < firstDayOfMonth.dayOfWeek; i++) {
        arr.unshift({
          date: firstDayOfMonth.date.subtract(i + 1, "day"),
          formattedDate: firstDayOfMonth.date.subtract(i + 1, "day").format("YYYY-MM-DD"),
          dayOfMonth: firstDayOfMonth.date.subtract(i + 1, "day").date(),
          dayOfWeek: firstDayOfMonth.date.subtract(i + 1, "day").day(),
          currentMonth: false,
        });
      }
      return arr;
    },
    // weekdayOffset() {
    //   const firstOfTheMonthWeekday = this.daysArray[0].dayOfWeek;
    //   return firstOfTheMonthWeekday;
    // },
  },
};
</script>
