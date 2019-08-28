<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/paalpc0f.png">
    <h1>{{ title }} </h1>
    <Accueil msg="Nuclear Global World War "/>
        <p>
      <b-btn v-b-toggle.collapse1 variant="warning">Game</b-btn>
    </p>
        <b-collapse id="collapse1">
      <b-card>
        <router-view></router-view>
        <h3>Game Options</h3>
        <b-btn v-b-toggle.collapse2 size="sm">Afficher les options</b-btn>
        <b-collapse id=collapse2 class="mt-2">
          <b-card><a @click="onListClick">Jeux</a></b-card>
          <b-card><a @click="onMapClick">Affichage</a></b-card>
        </b-collapse>
      </b-card>
    </b-collapse>
    <div class="bouton-aligne">
      <router-link to="/" ><b-button variant="success" class="btn btn-primary btn-sm btn-block">Retour à l'accueil</b-button></router-link>
    </div>
  </div>
</template>

<script>
import Accueil from './components/Accueil.vue'
//import Plateau from './components/Plateau.vue'

export default {
  name: 'app',
  data: function() {
    return {
      title: 'Pacific Storm'
    }
  },
  components: {
    Accueil,
    //Plateau,
  },
    methods: {
        onListClick: function() {
        window.alert('UserClikerList !')
    },
        onMapClick: function(){
        window.alert('UserClikerMap !')
    },
        goBack () {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
