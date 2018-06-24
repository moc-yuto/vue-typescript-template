import Vue from 'vue';
import App from './App.vue';
import router from './routes/index';

new Vue({
  router,
  el: '#app',
  render: h => h(App),
});
