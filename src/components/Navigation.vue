<template>
    <div>
        <h1>Menu</h1>
        <br>
        <div class="bouton-aligne">
          <router-link to="/Game" ><button type="button" class="btn btn-primary btn-lg btn-block">War theater</button></router-link>
        </div>
        <!-- <div class="bouton-aligne">
          <router-link to="/Carte"><button type="button" class="btn btn-primary btn-lg btn-block">Carte</button></router-link>
        </div> -->
        <!-- <ul>
            <router-link tag="li" to="/Liste" ><a>List</a></router-link>
            <router-link tag="li" to="/Carte"><a>Map</a></router-link>
        </ul> -->
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.bouton-aligne{
	display:inline-block;
	width:10%;
	margin:10px 0.5% 20px 0.5%;
	text-align:center;
}
</style>