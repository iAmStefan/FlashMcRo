import Vue from 'vue'
import App from './App.vue'
import Index from './components/index.vue'
import VueRouter from 'vue-router'
import SocialMedia from './components/socialMedia.vue'
import Routes from './routes.js'
import VueHeadful from 'vue-headful'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'

Vue.component('vue-headful', VueHeadful);
Vue.component('socialMedia', SocialMedia);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuelidate)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
