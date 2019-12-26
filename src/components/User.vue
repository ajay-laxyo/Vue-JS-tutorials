<template>
  <div>
    <button v-on:click="passData()"> click here to send data from User Comp.</button>
  	 <h2> {{ information }} </h2>
  </div>
</template>

<script>

  import {EventBus} from '../main'

export default {
  
  data () {
    return {
      information : 'data comes from user components',
      }
  },
  methods : {
      passData(){
        //console.log("this is simple message passed");
        EventBus.$emit("emittedData","this is simple message passed by the Event Bus");
      }
  },
  computed : {
      
  }
}
</script>

<style scoped>
  h2{
    color: blue;
  }
</style>