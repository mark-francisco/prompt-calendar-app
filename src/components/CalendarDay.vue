<template>
  <div>
    <p>{{ dayNumber }}</p>
    <!-- <button v-on:click="addEvent()">Add Event</button>
    <label>Title</label>
    <input type="text" />
    <p>{{ hasEvent }}</p>
    <p>{{ newEventStatus }}</p> -->
  </div>
</template>

<style></style>

<script>
export default {
  props: ["dayNumber", "hasEvent"],
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
