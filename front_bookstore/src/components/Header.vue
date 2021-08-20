<template>
    <header>
        <h3>{{title}}</h3>
    </header>
</template>

<script>
    export default{
        data(){
            return{
                title:"Página de libros"
            }
        }
    }
</script>

<style scoped>
    header{
        background-color: orange;
        padding: 10px;
        height: 50 px;
        text-align: center;
        color: #000000;
    }
</style>
