<template>
  <div class="calendar-day">
    <div v-if="currentMonth" class="calendar-day-content">
      <h2>{{ dayNumber }}</h2>
      <button v-on:click="addEvent()">Add Event</button>
    </div>
    <!-- <p>{{ hasEvent }}</p>
    <p>{{ newEventStatus }}</p> -->
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
