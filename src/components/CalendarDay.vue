<template>
  <div class="calendar-day">
    <li>{{ dayNumber }}</li>
    <button v-if="currentMonth" v-on:click="addEvent()">Add Event</button>
    <!-- <p>{{ hasEvent }}</p>
    <p>{{ newEventStatus }}</p> -->
  </div>
</template>

<style>
.calendar-day {
  list-style: none;
  border: 1px solid black;
  padding: 5px;
}
</style>

<script>
export default {
  props: {
    dayNumber: {
      type: Number,
      required: true,
    },
    hasEvent: {
      type: Boolean,
      default: false,
    },
    currentMonth: {
      type: Boolean,
    },
  },
  data() {
    return {
      newEventStatus: this.hasEvent,
    };
  },
  methods: {
    addEvent() {
      this.$router.push({ name: "addEvent", params: { date: "DDMMYYYY" } });
      this.newEventStatus = !this.hasEvent;
      this.$emit("eventStatusUpdated", this.newEventStatus);
    },
  },
};
</script>
