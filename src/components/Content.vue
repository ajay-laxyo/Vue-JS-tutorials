<template>
  <div>
  	<h3>Play List</h3>
  	{{ name }} <p> {{ tutorialName }} </p>
  		<ul>
  			<li v-for="links in myplayList">
  				<a v-bind:href="links.gitHubLink" v-bind:title="links.title" target="_blank">
  					{{ links.name }}
  				</a>
  			</li>
  		</ul>
  		<h2>Student list</h2>
	    <ul>
	      <li v-for="std in stds"> {{ std }} </li>
	    </ul>
	    <button v-on:click="deleteStds">Delete Student</button>
	    <h2> my message : {{ myMsg }} </h2>
  </div>
</template>

<script>
export default {
	// props : ['myplayList', "name", 'tutorialName'], 
	//"tutorial-name" is changed into camal case like "tutorialName"
	props:{
		myMsg:{
	      type : String
	    },
		stds:{
			type : Array
		},
		name:{
			type : String,
			//required : true,
			//default : "default name"
		},
		myplayList:{
			type : Array 
		},
		tutorialName:{
			type : String
		}
	},
  data () {
    return {
      
      }
  },
  methods : {
      deleteStds(){
      	this.stds.pop();
      }
  },

  computed : {
      
  }
}
</script>

<style scoped>
  #content{
  	text-align: center;
  }

  #content ul{
  	list-style: none;
  }

  #content ul li{
  	font-size: 20px;
  	padding: 6px;
  	color: #38190e;
  }

  #content h3{
  	text-align: center;
  	color: red;
  }
</style>