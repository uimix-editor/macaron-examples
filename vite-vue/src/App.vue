<script setup>
import "./components.macaron";
</script>

<template>
  <h1>Macaron + Vue example</h1>
  <div id="buttons">
    <my-button>Button 1</my-button>
    <my-button type="secondary">Button 2</my-button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#buttons {
  display: flex;
  gap: 24px;
  justify-content: center;
}
</style>
