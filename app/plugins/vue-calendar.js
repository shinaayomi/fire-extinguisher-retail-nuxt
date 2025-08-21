import VCalendar from "v-calendar";
import "v-calendar/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  // Use plugin with optional defaults
  nuxtApp.vueApp.use(VCalendar, {});
});
