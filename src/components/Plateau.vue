<template>
  <div id="app">
    <h1>{{ titre }} </h1>
    <input v-model="title">
    <h2>Pacific Sea</h2>
     <table class="table table-bordered table-primary" >
         <!-- <tr><td></td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td></tr> -->
        <tr class="grille" >
            <th class="grille" ></th><th v-for = "lettre in lettres" v-bind:key="lettre.id" class="grille" >{{ lettre.l }}</th>
        </tr>
        <tr v-for = "chiffre in chiffres" v-bind:key="chiffre.id" class="grille" >
            <td class="grille" >{{ chiffre.c }}</td>
            <td v-for = "chiffre in chiffres" v-bind:key="chiffre.id" class="grille" ></td>
            <!-- <td v-if="cible.position == 'SSN'" style="color:red;" v-show="cible.display == true" >
                {{ cible.position }}
            </td>
            <td v-else v-show="cible.display == true">
                {{ cible.position }}
            </td> -->
        </tr>
    </table>
    <p>

    </p>
  </div>
</template>

<script>
module.exports = {
  data: function() {
       return {
          titre: 'Operational theatre',
          coordonees: [
            { id: 1, position: 'A5', type: 'SNLE', display:true },
            { id: 2, position: 'B3', type: 'SNLE', display:true },
            { id: 3, position: 'C8', type: 'Porte-Avions', display:true },
            { id: 4, position: 'D4', type: 'Porte-Avions', display:true },
            { id: 5, position: 'E1', type: 'Cuirassé', display:true },
            { id: 6, position: 'F7', type: 'Destroyer', display:true },
            { id: 7, position: 'G1', type: 'Destroyer', display:true },
            { id: 8, position: 'H9', type: 'Frégate', display:true },
            { id: 9, position: 'I2', type: 'Frégate', display:true },
            { id: 10, position: 'J6', type: 'Corvette', display:true }
          ],
          lettres: [
              { id: 1, l: 'A' },
              { id: 2, l: 'B' },
              { id: 3, l: 'C' },
              { id: 4, l: 'D' },
              { id: 5, l: 'E' },
              { id: 6, l: 'F' },
              { id: 7, l: 'G' },
              { id: 8, l: 'H' },
              { id: 9, l: 'I' },
              { id: 10, l: 'J' }
              ],
            chiffres: [
              { id: 1, c: '1' },
              { id: 2, c: '2' },
              { id: 3, c: '3' },
              { id: 4, c: '4' },
              { id: 5, c: '5' },
              { id: 6, c: '6' },
              { id: 7, c: '7' },
              { id: 8, c: '8' },
              { id: 9, c: '9' },
              { id: 10, c: '10' }
              ],
            title: ''
        }
  },
  mounted() {
      if (localStorage.title) {
          this.title = localStorage.title;
      }
  },
  watch: {
      title(newTitle) {
          localStorage.title = newTitle;
      }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c504b;
  margin-top: 60px; 
}

.grille {
height : 35px;
width : 35px;
border : 1px solid #10cab1;
text-align: center;
border-collapse: separate;
}
</style>