<template>
  <div class="calendar">
    <app-heading v-bind:selectedDate="selectedDate" />

    <ol class="calendar-days-grid">
      <app-calendar-day
        v-for="day in daysArray"
        v-bind:key="day.formattedDate"
        v-bind:formattedDate="day.formattedDate"
        v-bind:dayOfMonth="day.dayOfMonth"
        v-bind:isCurrentMonth="day.currentMonth"
        v-bind:isToday="today.format('YYYY-MM-DD') === day.date"
        v-bind:event="
          events.find((event) => {
            return event.date === day.formattedDate;
          })
        "
        v-bind:events="events"
        v-on:eventAdded="events = $event"
      ></app-calendar-day>
    </ol>

    <div>{{ events }}</div>
  </div>

  <!-- next steps: -->
  <!-- complete AddEvent and EditEvent components -->
  <!-- add ability to change month / year -->
  <!-- add styles based on isToday -->
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
      today: dayjs(),
      selectedDate: dayjs().add(0, "month"),
      events: [{ title: "test welcome event", date: dayjs().format("YYYY-MM-DD") }],
    };
  },
  methods: {},
  computed: {
    // helper methods for generating the dayjs objects
    numDaysInMonth() {
      return dayjs(this.selectedDate).daysInMonth();
    },
    monthText() {
      return Number(this.selectedDate.format("M"));
    },
    yearText() {
      return Number(this.selectedDate.format("YYYY"));
    },

    daysArray() {
      // current month's cards
      // create spread array based on a constructed array of defined length
      let arr = [...new Array(this.numDaysInMonth)];

      // map each of the empty arrItems into dayjs objects by using helper methods
      arr = arr.map((_arrItem, index) => {
        return {
          date: dayjs(`${this.yearText}-${this.monthText}-${index + 1}`),
          formattedDate: dayjs(`${this.yearText}-${this.monthText}-${index + 1}`).format("YYYY-MM-DD"),
          dayOfMonth: dayjs(`${this.yearText}-${this.monthText}-${index + 1}`).date(),
          dayOfWeek: dayjs(`${this.yearText}-${this.monthText}-${index + 1}`).day(),
          currentMonth: true,
        };
      });

      // preceding month's empty cards
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
      // subsequent month's empty cards
      let lastDayOfMonth = arr[arr.length - 1];
      for (let i = 0; arr.length % 7 !== 0; i++) {
        arr.push({
          date: lastDayOfMonth.date.add(i + 1, "day"),
          formattedDate: lastDayOfMonth.date.add(i + 1, "day").format("YYYY-MM-DD"),
          dayOfMonth: lastDayOfMonth.date.add(i + 1, "day").date(),
          dayOfWeek: lastDayOfMonth.date.add(i + 1, "day").day(),
          currentMonth: false,
        });
      }
      return arr;
    },
  },
};
</script>
