<template>
  <div id="app">
    <h1>{{ titre }} </h1>
    <input v-model="title">
    <h2>Pacific Sea</h2>
     <table id="coordonees-cibles" style="border : 1px solid #000000;" >
       <tr v-for = "cible in coordonees" v-bind:key="cible.id" style="border : 1px solid #000000;">
            <td v-if="cible.position == 'SSN'" style="color:red;" v-show="cible.display == true" >
                {{ cible.position }}
            </td>
            <td v-else v-show="cible.display == true">
                {{ cible.position }}
            </td>
       </tr>
     </table>
  </div>
</template>

<script>
module.exports = {
  data: function() {
       return {
          titre: 'Operational theatre',
          coordonees: [
            { id: 1, position: 'empty', display:false },
            { id: 2, position: 'empty', display:false },
            { id: 3, position: 'SSN', display:true },
            { id: 4, position: 'Cuirassé', display:true }
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

.coordonees-cibles, .caseBrun{
height : 35px;
width : 35px;
border : 1px solid #000000;
}
</style>