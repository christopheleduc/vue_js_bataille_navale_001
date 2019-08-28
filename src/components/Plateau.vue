<template>
  <div id="app">
    <h1>{{ titre }} </h1>
    <input v-model="title">
    <h2>Pacific Sea</h2>
     <ul id="coordonees-cibles">
       <li v-for = "cible in coordonees">
            <span v-if="cible.position == 'SSN'" style="color:red;" v-show="cible.display == true">
                {{ cible.position }}
            </span>
            <span v-else v-show="cible.display == true">
                {{ cible.position }}
            </span>
       </li>
     </ul>
  </div>
</template>

<script>
module.exports = {
  data: function() {
       return {
          titre: 'Operational theatre',
          coordonees: [
            { position: 'empty', display:false },
            { position: 'empty', display:false },
            { position: 'SSN', display:true },
            { position: 'Cuirassé', display:true }
          ]
        }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>