<template>
  <div>
    <p>{{ dayOfWeek }}</p>
    <p>{{ dayNumber }}</p>
    <button v-on:click="addEvent()">Add Event</button>
    <label>Title</label>
    <input type="text" />
    <p>{{ hasEvent }}</p>
    <p>{{ newEventStatus }}</p>
  </div>
</template>

<style></style>

<script>
export default {
  props: ["dayOfWeek", "dayNumber", "hasEvent"],
  data() {
    return {
      newEventStatus: this.hasEvent,
    };
  },
  methods: {
    addEvent() {
      this.newEventStatus = !this.hasEvent;
      this.$emit("eventStatusUpdated", this.newEventStatus);
    },
  },
};
</script>
