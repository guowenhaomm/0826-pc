import Vue from 'vue'
import App from './App.vue'

import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router //注册路由对象
}).$mount('#app')
