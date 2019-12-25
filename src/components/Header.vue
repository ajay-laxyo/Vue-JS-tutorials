<template>
  <div>
  	<header>
  		<h2>{{ statement }}</h2>
  		<p> {{ repoUrl }} </p>
  	</header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      statement : 'Welcome to my portal',
      repoUrl : 'https://github.com/ajay-laxyo/Vue-JS-tutorial-with-example'
      }
  },
  methods : {
      
  },

  computed : {
      
  }
}
</script>

<style scoped>
  header{
  	background: #3f51b5f2;
  	color: white;
  	padding: 3px;
  	text-align: center;
  }
</style>