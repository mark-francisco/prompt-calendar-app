<template>
  <div>
    <h1>Add event to: {{ currentlySelectedDate }}</h1>

    <b-form-input v-model="title" placeholder="Enter Event Title"></b-form-input>
    <b-form-datepicker v-model="currentlySelectedDate" placeholder="Enter date"></b-form-datepicker>

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
export default {
  data() {
    return {
      updatedEvent: { title: null, date: null },
      title: "",
      currentlySelectedDate: this.$route.params.date,
    };
  },
  methods: {
    saveChanges() {
      //use destructuring once this is confirmed working
      this.updatedEvent["title"] = this.title;
      this.updatedEvent["date"] = this.currentlySelectedDate;
      this.$router.push({ path: "/" });
    },
  },
};
</script>
