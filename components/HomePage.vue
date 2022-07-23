
<template>
  <div class="container">
    <Login class="login"/>
    <ImageWallpaper class="image"/>
  </div>
</template>

<script src="./scripts/script.js">
import Login from './login.vue.js';

</script>
<style>
html, body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

   /* FONT */
    
  font-size: 9pt;
  font-weight: 800;
  text-decoration: none;
  color: rgb(203, 203, 203)
}

.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 100vh;
  grid-template-areas: "l i";
}

.login {
  background-color: rgb(242, 242, 242);
  grid-area: l;
}

.image {
  background-color: rgb(5, 0, 41);
  grid-area: i;
}

@media only screen and (max-width: 1400px) {
    .container {
        grid-template-columns: 1fr 2fr;
    }
}

@media only screen and (max-width: 800px) {
    .container {
        grid-template-columns: 1fr;
    }
}
</style>
