<template>
    <div class="home-content">
        <div class="container">
            <div class="mb-10">
                <h1>Nuestros Productos</h1>
                <h3></h3>
            </div>
            <div class="row justify-content-center">
                <div class="col-12 px-0">   
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-4 px-2">
                            <a href="/coffee">
                                <b-card
                                title="Café"
                                :img-src="baseURL+'images/producto-cafe/finca-zulia/A/zulia-a1.png'"
                                img-alt="La Romeral"
                                img-bottom
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2 border-0"
                                >
                                </b-card>
                            </a>

                        </div>
                        <div class="col-12 col-sm-6 col-md-4 px-2">
                            <a href="/equipment">    
                                <b-card
                                title="Equipos"
                                :img-src="baseURL+'images/grinders/vulcano/Vulcano-t.png'"
                                img-alt="La Zulia"
                                img-bottom
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2 border-0"
                                >
                                </b-card>
                            </a>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 px-2">
                            <a href="/related">    
                                <b-card
                                title="Derivados"
                                :img-src="baseURL+'images/merendar/Pan.jpg'"
                                img-alt="Sueño verde"
                                img-bottom
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2 border-0"
                                >
                                </b-card>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
//import baseUrl from '../shared/baseURL'
//import axios from 'axios';

/*export default {
    name: 'Home',
    data: function () {
        return {
            msg: 'Welcome to Your Vue.js App',
            baseURL:''
        }
    },
    created: function(){
        let baseURL= baseUrl.baseURL
        let self = this
        self.baseURL= baseURL
    }
}*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mb-10, .col-12{
    text-align: center;
}

.home-content{
    margin-top: 10px;
    margin-bottom: 4%;
}
.card-img-bottom{
    border-radius: 20px;
    margin-bottom: 10px;
    max-height: 214px;
    border: 1px solid rgba(0,0,0,.125);
    cursor: pointer;
}

.card-img-bottom:hover {
  color: #D70021;
  background-color: white;
  cursor: pointer;
  border: 2px solid  #D70021;
  width:99%;
}

.card{
    margin: auto;
}
h1, h2 {
  font-weight: bold;
  font-size: 2rem;
}
h3{
    font-weight: normal;
    font-size: 1.5rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: inherit;
  text-decoration: none; 

}

@media only screen and (max-width: 993px) {
  .card-img-bottom{
    max-height: 157px;
    width:100%;
  }
}
</style>
