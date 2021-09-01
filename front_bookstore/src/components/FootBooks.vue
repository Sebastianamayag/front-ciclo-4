<template>
   <footer class= "footer is primary">

     <div class="container-footer-all">
          <div class="container-body">
          
                <div class="column 1">
                  <h1> Mas información</h1>

                   <p> En nuestra librería conocemos la magia que podemos experimentar <br>
                     a través de un buen libro. Por esto, los invitamos a que ingresen a <br>
                     maravilloso mundo de la literatura y la poesía. </p>
                   
                  </div>

                <div class="column 2"> 
                  <h1> Redes Sociales </h1> 
                  <div class="row">
                    <img src="../assets/facebook.png" alt="Logo Facebook">
                    <label>Síguenos en Facebook</label>
                  </div>

                  <div class="row">
                    <img src="../assets/instagram.png" alt="logo instagram">
                    <label>Síguenos en Instagram</label>
                  </div>

                  <div class="row">
                    <img src="../assets/twitter.png" alt="logo twitter">
                    <label>Síguenos en Twitter</label>
                  </div>


                </div>
                
                <div class="column 3"> 
                  <h1>Contáctenos</h1>
                  <div class="row2">
                    <img src="../assets/tienda.png">
                    <label>Tienda Virtual y envíos a Domicilio</label>
                  </div>

                  <div class="row2">
                    <img src="../assets/lineas.png">
                    <label>+57 - 1245689 - 3102456987 </label>
                  </div>

                  <div class="row2">
                    <img src="../assets/libro.png">
                    <label>lalibreria@lalibreria.com.co </label>
                  </div>
                  

                </div>
                
       </div>

            

     </div>
        <div class="container-footer">
          <div class="copyright"> © 2021 Todos los Derechos Reservados | <a href="">Carrito</a> </div>
            <div class="information"> <a href="">Información de la tienda</a> | 
              <a href="">Conoce Nuestros Términos y Condiciones</a> 
          </div>
        </div>
      

   </footer>




</template>


<style scoped>

  footer{
   
    
    box-sizing: border-box;
    font-family: sans-serif;
    background: rgb(20, 20, 20);
    color: white;
    width: 100%;
    
    position:fixed;
    bottom:0;
    clear:both;
    height:300px;

    
   
     


  }
    
    .container-footer-all {
        
        max-width: 1800px;
        margin: 20px;
        padding: 15px;
        
        
        
        

    }

    .container-body {
        display: flex;
        justify-content: space-between;
    }

    .colum1 {
      max-width: 600px;
      font-size: 300px;
      
    }

    
    h1 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
      color: #c7c7c7;
      margin-top: 20px;
      text-align: justify;
      margin-left: 20px;
    }
   
   .colum2{
     max-width: 600px;
     font-size: 300px;
   }

  .row{
    margin-top: 20px;
    display: flex;
  }

 .row img{
   width: 25px;
   height:25px;
   margin-left: 50px;
 }
  
  .row label {
      margin-top: 5px;
      margin-left: 10px;
      
      color: #c7c7c7;
      font-size: 12px;
    }
  .colum3{
    max-width: 600px;
    font-size: 300px;


  }

 
  .row2 {
    margin-top: 20px;
    display: flex;
  }

  .row2 img {
     width: 25px;
     height: 25px;
     margin-left: 50px;
    
  }

  .row2 label {
      margin-top: auto;
      margin-left: 10px;
      
      color: #c7c7c7;
      font-size: 12px;
    }


  .container-footer{
    max-width: 1800px;
    background: #101010;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

 .copyright{
    color: #c7c7c7;
 }

 .copyright a{
   text-decoration: none;
   color: white;
   font-weight: bold;
 }

 .information a{
   text-decoration: none;
   color: #c7c7c7;
   margin-right: 5px;
 }


 @media screen and (max-width: 1700px) {
   .container-body{
     flex-wrap: wrap;
   }
    .colum1{
      max-width: 100%;
    }
    .colum2,
    .colum3{
      margin-top: 40px;
    }


 }

</style>
