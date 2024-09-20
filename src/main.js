import Vue from 'vue'
import App from './App.vue'
import ant from 'ant-design-vue'
import './style/index.less'
Vue.use(ant)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
