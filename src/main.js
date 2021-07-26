import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Calendar from "./components/Calendar.vue";
import CalendarDay from "./components/CalendarDay.vue";

// register components for App.vue
Vue.component("app-calendar", Calendar);
Vue.component("app-calendar-day", CalendarDay);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
