import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



Vue.config.productionTip = false;

window.$apiURI = "http://localhost:4890/api";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
