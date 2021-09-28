import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import { routes } from './router/index'
import SlideUpDown from 'vue-slide-up-down'



import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);


Vue.config.productionTip = false


// const SlideUpDown = require('vue-slide-up-down')

Vue.component('slide-up-down', SlideUpDown)


Vue.use(vueRouter);
export const router = new vueRouter({
  routes,
  mode: "history"
});




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
