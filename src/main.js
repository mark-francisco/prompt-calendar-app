import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Component files:
import Calendar from "./components/Calendar.vue";
import CalendarDay from "./components/CalendarDay.vue";

// register components for App.vue
Vue.component("app-calendar", Calendar);
Vue.component("app-calendar-day", CalendarDay);

Vue.config.productionTip = false;

// mount new Vue app instance to DOM
new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
