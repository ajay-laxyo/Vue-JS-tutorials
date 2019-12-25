<template>
  <div>
  	<footer>
  		{{ statement }}
  	</footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      statement : 'Copyright by @ajay-laxyo, 2019'
      }
  },
  methods : {
      
  },

  computed : {
      
  }
}
</script>

<style scoped>
  footer{
  	background: #3f51b5f2;
  	padding: 7px;
  	color: white;
  	text-align: center;
  }
</style>