<template>
  <div id="app">
    <h2>{{titulo}}</h2>
    <h3>{{counter}}</h3>
    <input type="text" v-model="counter">
    <button v-on:click="sumaCounter()">Sumar!</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      titulo: "App de Vue ::",
      counter: 0
    }
  },
  methods: {
    sumaCounter: function (){
      this.counter++;
    }
  },
  mounted(){
    this.counter = 20
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
