// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import store from './vuex/store'
import router from './router'
import Vuerify from 'vuerify'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import {py_remote} from './business/'
import './css/style.css'


//import {py_login} from './js/loginFun'

//import {Tooltip} from 'element-ui'
Vue.use(ElementUI)
Vue.use(VueResource);
Vue.use(Vuerify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
