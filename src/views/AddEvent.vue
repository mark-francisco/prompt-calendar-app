<template>
  <div>
    <h1>ADD EVENT TO {{ this.$route.params.date }}</h1>
    <button v-on:click="saveChanges()">Save changes</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [],
      event: "welcome event",
    };
  },
  methods: {
    saveChanges() {
      this.events.push(this.event);
      this.$router.push({ path: "/" });
    },
  },
};
</script>
