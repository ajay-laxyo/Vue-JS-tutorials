<template>
  <div>
  	<header>
  		<h2>{{ myMsg2 }}</h2>

  		<button v-on:click="updateMsg">update msg from child</button>
  	</header>
  	<hr>
  	<h1> event bus </h1>
  	<h3> {{ statement }} </h3>
  </div>
</template>

<script>

import {EventBus} from '../main'

export default {
	props : {
		myMsg2 : {
			type: String
		}
	},
  data () {
    return {
      statement : 'We want to update this data via emit() on() by EventBus, this msg comes from employee Comp.',
      repoUrl : 'https://github.com/ajay-laxyo/Vue-JS-tutorial-with-example'
      }
  },
  methods : {
      updateMsg(){
      	//return this.myMsg2 = "Value updated successfully who comes from parant component";
      	this.$emit("updateParantVar", "Value updated successfully who comes from parant component");
      }
  },
  computed : {
      
  },
  mounted(){
  	EventBus.$on("emittedData", data=>{
  		this.statement = data;
  	});
  }
}
</script>

<!-- <style scoped>
  header{
  	background: #3f51b5f2;
  	color: white;
  	padding: 3px;
  	text-align: center;
  }
</style> -->