import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import Tabs from '@/components/Tabs.vue';
import Chart from '@/components/Chart.vue';

Vue.config.productionTip = false

Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)
Vue.component('Tabs',Tabs)
Vue.component('Chart',Chart)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
