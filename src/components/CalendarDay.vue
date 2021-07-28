<template>
  <div class="calendar-day">
    <div v-if="dayObject.currentMonth" class="calendar-day-content">
      <h2>{{ dayObject.dayOfMonth }}</h2>

      <button v-if="!event" v-on:eventAdded="saveEvent($event)" v-on:click="addEvent()">Add Event</button>

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
    dayObject: {
      type: Object,
      required: true,
    },
    event: {
      type: Object,
    },
    events: {
      type: Array,
    },
  },
  data() {
    return {
      newEvent: {},
    };
  },
  methods: {
    addEvent() {
      this.$router.push({
        name: "addEvent",
        params: { date: this.dayObject.formattedDate, event: this.event, events: this.events },
      });
    },
    editEvent() {
      this.$router.push({ name: "editEvent", params: { event: this.event, events: this.events } });
    },
    saveEvent(event) {
      this.newEvent = event;
      this.$emit("eventAdded", this.newEvent);
    },
  },
};
</script>
