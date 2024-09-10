/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import axios from 'axios';
import VueAxios from "vue-axios";
import vuetify from "./plugins/vuetify";
// import { toast, type ToastOptions } from "vue3-toastify";
import moment from "moment";
import CountryFlag from "vue-country-flag-next";

const app = createApp(App);

axios.defaults.baseURL = "https://api.openbox.mn/api";

registerPlugins(app);

app.use(VueAxios, axios);

app.mount("#app");
