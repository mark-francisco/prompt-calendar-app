<template>
  <div class="calendar-day">
    <div v-if="isCurrentMonth" class="calendar-day-content">
      <h2>{{ dayOfMonth }}</h2>

      <button v-if="!event" v-on:click="addEvent()">Add Event</button>
      <button v-else v-on:click="editEvent()">Edit Event</button>
    </div>
  </div>
</template>

<style>
.calendar-day {
  list-style: none;
  padding: 5px;
  margin: 15px;
  background-color: #eeeeee;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);
}
</style>

<script>
export default {
  props: {
    formattedDate: {
      type: String,
      required: true,
    },
    dayOfMonth: {
      type: Number,
      required: true,
    },
    isCurrentMonth: {
      type: Boolean,
    },
    isToday: {
      type: Boolean,
    },
    event: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    addEvent() {
      this.$router.push({ name: "addEvent", params: { date: this.formattedDate } });
    },
    editEvent() {
      this.$router.push({ name: "editEvent", params: { event: this.event } });
    },
  },
};
</script>
