import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate, { Validator } from "vee-validate";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";

import ja from 'vee-validate/dist/locale/ja'

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Validator.localize('ja', ja)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
