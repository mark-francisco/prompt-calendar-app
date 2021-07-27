<template>
  <div>
    <h1>{{ currentMonthYear }}</h1>

    <ol class="day-of-week-heading">
      <li v-for="day in daysOfWeek" v-bind:key="day">{{ day }}</li>
    </ol>
  </div>
</template>

<style scoped>
.day-of-week-heading {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: bold;
  list-style: none;
  padding-left: 0;
}
</style>

<script>
export default {
  props: {
    selectedDate: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  computed: {
    currentMonthYear() {
      return this.selectedDate.format("MMMM YYYY");
    },
  },
};
</script>
