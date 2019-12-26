<template>
  <div>
    <my-header></my-header>

        <student v-bind:myMsg = "msg" v-bind:stds = "students"></student>
        
        <my-content id="content" v-bind:myMsg = "msg" v-bind:stds = "students" tutorial-name="Vue JS" name="Ajay Magarde" v-bind:myplayList = "playList" ></my-content>

        <employee v-bind:myMsg2 = "msg2" v-on:updateParantVar="updateValueFn($event)"></employee> 
        <br>
        <user></user>

          <h2>{{ myFirstPage }}</h2>

    <my-footer></my-footer>
  </div>
</template>

<script>

    // component import as locally
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Content from './components/Content.vue'

export default {

  components : {
     // component define as locally "my-header" this is the name of new tag
    "my-header" : Header,
    'my-footer' : Footer,
    "my-content" : Content
  },

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
      ],
    students: ['kisan', 'pratik', 'himanshu', 'somitra', 'sameer'],
      msg: 'Welcome to Your My First Vue JS App',
      msg2 : "passing data from parant component to child component",
      Authorname : 'Ajay Magarde',
      c_name : "Lxyo Group",
      addr : "Mahalakshmi Nagar Indore",
      post : "Vue JS, Laravel and Yii2 Developer"
    }
  },
  methods : {
      sayHello : function(dayTime){
      return "Good "+ dayTime;
      },
      updateValueFn(updatedValue){
        this.msg2 = updatedValue;
      }
  },

  computed : {
      myFirstPage(){ // we are using ES6 so we don't need to write { : function } this
          return "This is "+this.Authorname+". I'm working in "+this.c_name+", address of "+ this.addr+" on the post of "+this.post;
      }
  }
}
</script>

<style scoped>
  h2{
    color: cyan;
  }

  h3{
    color: green;
  }
</style>
