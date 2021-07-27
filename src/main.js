// Vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap and BootstrapVue:
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

// Day.js
import dayjs from "dayjs"; // ES 2015
dayjs().format();

// Component files:
import Calendar from "./components/Calendar.vue";
import Heading from "./components/Heading.vue";
import CalendarDay from "./components/CalendarDay.vue";

// register components for App.vue
Vue.component("app-calendar", Calendar);
Vue.component("app-heading", Heading);
Vue.component("app-calendar-day", CalendarDay);

// Vue dev config
Vue.config.productionTip = false;

// mount new Vue app instance to DOM
new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
