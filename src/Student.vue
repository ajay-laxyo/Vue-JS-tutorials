<template>
  <div>
  	<h3> {{ information }} </h3>
  	<ul>
      <li v-for="std in stds">
        {{ std }}
      </li>
    </ul>

    <h2> my message : {{ myMsg }} </h2>

    <button v-on:click="updateMsg"> Update message</button>
  </div>
</template>

<script>
export default {
  //props:['myStudents'],
  props:{
    myMsg:{
      type : String
    },
    stds:{
      type : Array
    }
  },
  data () {
    return {
      information : 'Welcome to My First Vue JS App',
      }
  },
  methods : {
      updateMsg(){
        this.myMsg = " message has been updated";
      }
  },

  computed : {
      
  }
}
</script>

<style scoped>
  h3{
    color: blue;
  }
</style>