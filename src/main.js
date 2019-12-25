import Vue from 'vue'
import App from './App.vue'

import Student from './Student.vue' // called import 

Vue.component("student", Student); // called define


new Vue({
  el: '#app',
  render: h => h(App)
})
