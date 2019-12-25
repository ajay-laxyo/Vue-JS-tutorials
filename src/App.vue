<template>
  <div>
    <my-header></my-header>

        <br>
        <student></student>
        <hr>

    <my-content id="content"></my-content>

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
    students: ['kisan', 'pratik', 'himanshu', 'somitra', 'sameer'],
      msg: 'Welcome to Your My First Vue JS App',
      Authorname : 'Ajay Magarde',
      c_name : "Lxyo Group",
      addr : "Mahalakshmi Nagar Indore",
      post : "Vue JS, Laravel and Yii2 Developer"
    }
  },
  methods : {
      sayHello : function(dayTime){
      return "Good "+ dayTime;
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
