<template>
 <div class="login">
    <img src="../assets/login.png" alt="login">
    <h1 class="title">Login</h1>
    
      <form action class="form">
      <input class="form-input" type="usuario" id="usuario" required placeholder="Usuario">
      <input class="form-input" type="password" id="password" placeholder="Password">
      
    </form>
    <form action="submit">
    <input class="form-submit" type="submit" value="Login">
    </form>
  </div>
</template>

<script>

</script>

<style scoped>

.login {
  padding: 2rem;
}
.title {
  text-align: center;
  font-size: 35px;
  color: oran;
  margin: 0;
}

.img {
    margin: 0;
}
.form {
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33.3%;
  min-width: 350px;
  max-width: 100%;
  background: none;
  padding: 0;
  
  
}

.form-label {
  margin-top: 2rem;
  color: orange;
  margin-bottom: 0.5rem;
  
}

.form-input {
  padding: 10px 10px;
  background: #EBEBEB;
  background-image: none;
  border: 1px solid white;
  color: #3d2602;
  margin: 5px;
  font-size: 15px;

  
}
.form-submit {
  background: orange;
  border: none;
  color: white;
  margin-top: 10px;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  align-items: center;
  width: 15%;
  font-size: 15px;

  
 
}

 
</style>
