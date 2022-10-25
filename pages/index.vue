<template>
  <HomePage/>
</template>

<script>
import HomePage from '../components/HomePage.vue'
export default {
    name: 'IndexPage',
    components: {
      HomePage
    }
}
</script>

<style>
@font-face {
  font-family: FF;
  src: url(../static/FF.Mark.Medium.otf)
}

html, body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: FF, Arial, Helvetica, sans-serif;
}
</style>
