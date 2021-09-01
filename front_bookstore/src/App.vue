<template>
  
  <div class="header">
      <!--Titulo Aplicativo-->
      <div class="OCR">
        <img src="./assets/Lib_logo.png" alt="1">
      </div>
  </div>

  <div id= "nav"> 
      
  </div>

  <div class="main-component">
    <Login/>
  </div> 
  <FootBooks/>
</template>

<script>


//import HeadBooks from './components/HeadBooks.vue'
//import FootBooks from './components/FootBooks.vue'
import Login from './components/AddBook.vue'
export default {
  
  name: 'App',
  components: {
    Login
   // FootBooks    
  },
/*
  data: function(){
      
    },

  //Crea un llamado al router para iniciar en login apenas inicie
  beforeCreate: function(){
      this.$router.push({name: "Bienvenido"})
    } */
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -10px;
  margin-left:-10px;
}
.OCR{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  align-content: center;
}
.header{
  font: 1em OCR A Extended;
  margin: 0%;
  padding: 0;
  width: 100%;
  min-height: 100px;
  background-color: orange ;
  color: #f5c313 ;
  display: flex;
  justify-content: space-between; 
  align-items: initial;
  align-content: initial;
  text-align: center;
 
  
}

</style>
