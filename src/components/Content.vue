<template>
  <div>
  	<h3>Play List</h3>
  		<ul>
  			<li v-for="links in playList">
  				<a v-bind:href="links.gitHubLink" v-bind:title="links.title" target="_blank">
  					{{ links.name }}
  				</a>
  			</li>
  		</ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playList : [
      	{
      		name : "Laravel RESTful API CRUD development", 
      		gitHubLink : "https://github.com/ajay-laxyo/RESTful-API-CRUD-On-Laravel-6", 
      		title : "Laravel RESTful API CRUD development"
      	},
      	{
      		name : "Yii2 CRUD development", 
      		gitHubLink : "https://github.com/ajay-laxyo/Yii2-company-branch-dept-CRUD-file-upload-With-Gii", 
      		title : "Yii2-company-branch-dept-CRUD-file-upload-With-Gii"
      	},
      	{
      		name : "Yii2 CRUD development Without Gii", 
      		gitHubLink : "https://github.com/ajay-laxyo/Yii2-CRUD-without-Gii", 
      		title : "Yii2-CRUD-without-Gii"
      	},
      	{
      		name : "Laravel Roles and Permissions development", 
      		gitHubLink : "https://github.com/ajay-laxyo/Laravel-Roles-and-Permissions", 
      		title : "Laravel-Roles-and-Permissions"
      	},
      	{
      		name : "Laravel RESTful API Login and Register CRUD development", 
      		gitHubLink : "https://github.com/ajay-laxyo/RESTful-API-Login-Register-and-CRUD-With-Resource-in-laravel-6", 
      		title : "RESTful-API-Login-Register-and-CRUD-With-Resource-in-laravel-6"
      	}
      ]
      }
  },
  methods : {
      
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