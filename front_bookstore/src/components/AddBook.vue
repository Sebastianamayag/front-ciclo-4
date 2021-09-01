<template>
    <div>
        <div id="CreateFull" class="Login">        
        <div id="Create">
            <div class="Title"><h1></h1></div>
            <form >     
                <table class="adf">
                    <tr >           
                        <th><label class="coment" for="fuser">Título</label></th>
                        <th><input type="text" placeholder="100 años de soledad" id="fuser" name="fuser" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="fname">Autor</label></th>
                        <th><input type="text" placeholder="Gabriel García Marquez" id="fname" name="fname" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="flast">Género</label></th>
                        <th><input type="text" placeholder="Novela" id="flast" name="flast" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="femail">Año de publicación</label></th>
                        <th><input type="number" placeholder="1967" id="femail" name="femail" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="frol">Editorial</label></th>
                        <th><input type="text" placeholder="Oveja Negra" id="frol" name="frol" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="fcel">Sinopsis</label></th>
                        <th><input type="text" placeholder="[---]" id="fcel" name="fcel" class="Campos"><br></th>
                    </tr>
                    
                </table>
                <button class="invert" type="button" id="Volver" v-on:click="Volver">Añadir</button>
                <button class="invert" type="button" id="signIn" v-on:click="RegisterUser">Volver</button>
                
            </form>
            </div>         
        </div>    
        <div class="footer">  
            <h2>      
                
            </h2>
        </div>
    
</div>

</template>

<script>
/*import axios from "axios";
export default {
    name: "Create",
    data: function(){
        return{username: "none",
                password: "none",
                nombre: "none",
                apellido: "none",
                correo: "none",
                celular: 0,
                rol: "none"
                }
    },

    methods:{
        RegisterUser: function(){
            var datosJson = {
                username: document.getElementById("fuser").value,
                password: document.getElementById("fpass").value,
                nombre: document.getElementById("fname").value,
                apellido: document.getElementById("flast").value,
                correo: document.getElementById("femail").value,
                celular: document.getElementById("fcel").value,
                rol: document.getElementById("frol").value
            };
            console.log(datosJson)
            axios.post("https://expfiles-s3.herokuapp.com/user/createUser/",datosJson)
                .then(response=> {
                    alert("Creado con exito");
                    })
                .catch(error => {
                    alert("ERROR Servidor");
                    }); 
        },

        Volver: function(){
            this.$router.push({name:"login"})
        }
    }
}*/
</script>

<style>
button.invert {
        border-radius: 20px;
        border: 1px solid #082e55;
        background-color: orange;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
        padding: 10px 40px;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        transition: transform .1s ease-in;
        margin-top: 25px;
        margin-right: 25px;
        margin-left: 25px;
    }   

.adf{
        text-align: left;
        position: initial;
        margin: 2rem;
        align-content: center;
        align-items: center;
        margin-left: auto;
  margin-right: auto;
        
    }
.coment{
        font-family: sans-serif;
        color: #000000;
        font-size: ;
       
        display: block;
        align-items: center;
        align-self: center;
        align-content: center;
        margin-bottom: 1rem ;
        
    }

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

input[type=number] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  width: 500px;
  font-family: sans-serif;
}
</style>