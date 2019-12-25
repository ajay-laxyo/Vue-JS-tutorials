<template>
  <div>
  	<h3> {{ information }} </h3>
  	<ul>
      <li v-for="std in students">
        {{ std }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      information : 'Welcome to My First Vue JS App',
      students: ['kisan', 'pratik', 'himanshu', 'somitra', 'sameer']
      }
  },
  methods : {
      
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