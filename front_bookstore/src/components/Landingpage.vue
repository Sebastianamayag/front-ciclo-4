<template>
  <div >
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <link rel="stylesheet">
        <div class="row no-gutters">
          <div class="col-md-6 no-gutters">
            <div class="leftside">          
            </div>
          </div>
          <div class="col-md-6 no-gutters">
            <div class="rightside">   
               <div class="Title"><h1>Bienvenido</h1></div>         
              <div class="contenedor">
                <div >
                  <button class="invert2" type="button" id="signIn" v-on:click="SignUser">Consultar</button>
                </div>
                <div >
                  <button class="invert2" type="button" id="signIn" v-on:click="RegisterUser">Registrar</button></div>
              </div>
            </div>
          </div>
        </div>
          
        

  </div>
</template>

<script>

</script>
<style >
  .Title{
        font-family: 'Times New Roman';
        color: #000000;
        font-size: 2rem;
        font-weight: bold;
        display: block;
        margin-top: 40%;
  }
  .leftside,.rightside{
    height: 80vh;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    .leftside,.rightside{
      height: 100vh;
    }
  }
  .leftside{
    background-color:  #f5c313 ;
    align-self: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: 500px 500px;
    background-position: center;
  }

  .rightside{
    background-color: #ffffff;
    align-items: center;
    align-self: center;
    justify-content: center;
    position: center;
    object-position: center;
    
  }
  .contenedor{
    height: 80%;
    width: 100%;
  position: center;
  justify-content: center;
    
  }
  .contenedor2{
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  align-self: center;
  align-items: center;
  text-align: center;
  }

  button.invert2 {
        border-radius: 20px;
        border: 1px solid #082e55;
        background-color: #082e55;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
        padding: 10px 40px;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        transition: transform .1s ease-in;
        margin-bottom: 5%;
        margin-top: 5%;
    }
</style>
