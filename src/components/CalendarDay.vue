<template>
  <div>
    <li class="calendar-day">{{ dayNumber }}</li>
    <!-- <button v-on:click="addEvent()">Add Event</button>
    <label>Title</label>
    <input type="text" />
    <p>{{ hasEvent }}</p>
    <p>{{ newEventStatus }}</p> -->
  </div>
</template>

<style>
.calendar-day {
  list-style: none;
  border: 1px solid black;
  padding: 15px 5px;
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
