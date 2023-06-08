import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/theme.css";

import "/node_modules/primeflex/primeflex.css";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import ToastService from "primevue/toastservice";

import "./assets/css/main.css";

const app = createApp(App);

app.use(PrimeVue);

app.use(ToastService);

app.use(router);

app.mount("#app");
