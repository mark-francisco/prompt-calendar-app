<template>
  <div>
    <h1>Add event to: {{ updatedEvent.date }}</h1>

    <b-form-input v-model="updatedEvent.title" placeholder="Enter Event Title"></b-form-input>
    <b-form-datepicker v-model="updatedEvent.date" placeholder="Enter date"></b-form-datepicker>

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
      updatedEvent: { title: null, date: this.$route.params.date },
      updatedEvents: this.$route.params.events,
    };
  },
  methods: {
    saveChanges() {
      // emit back to Calendar.vue
      this.updatedEvents.push(this.updatedEvent);
      console.log(this.updatedEvents);
      this.$emit("eventAdded", this.updatedEvent);
      this.$router.push({ path: "/" });
    },
  },
};
</script>
