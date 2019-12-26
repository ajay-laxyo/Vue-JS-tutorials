import Vue from 'vue'
import App from './App.vue'

import Student from './Student.vue'  //called import 
import Employee from './components/Employee.vue'	//component define as globaly
import User from './components/User.vue'

export const EventBus = new Vue();

Vue.component("student", Student); //called define
Vue.component("employee", Employee);
Vue.component("user", User);


new Vue({
  el: '#app',
  render: h => h(App)
})
