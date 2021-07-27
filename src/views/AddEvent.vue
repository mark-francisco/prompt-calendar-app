<template>
  <div>
    <h1>Add event to: {{ currentlySelectedDate }}</h1>

    <b-form-input v-model="title" placeholder="Enter Event Title"></b-form-input>
    <b-form-input v-model="currentlySelectedDate" placeholder="Enter date"></b-form-input>

    <button>
      <router-link class="m-4 calendar-event-button" to="/">Go Back</router-link>
    </button>

    <button class="m-4" v-on:click="saveChanges()">Save Changes</button>
  </div>
</template>
<style>
.calendar-event-button,
.calendar-event-button:hover {
  color: black;
  text-decoration: none;
}
</style>
<script>
// import dayjs from "dayjs";
export default {
  data() {
    return {
      updatedEventsList: this.events,
      title: "",
      currentlySelectedDate: this.$route.params.date,
    };
  },
  methods: {
    saveChanges() {
      // this.events.push(this.text);
      this.$router.push({ path: "/" });
    },
  },
};
</script>
