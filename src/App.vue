<template>
  <div class="header">
    <SelectorIdioma/>
    <div class="contenedor-nav">
      <router-link to="/">Home</router-link>
      <nav>
        <router-link to="/about">About</router-link>
        <router-link to="/devs">My work</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>

  </div>
  <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SelectorIdioma from '@/components/SelectorIdioma.vue';

@Options({
  components: {
    SelectorIdioma
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

@import "@/scss/_variables.scss";
@import "@/scss/_normalize.scss";
@import "@/scss/_globales.scss";

.contenedor-nav{
  padding:2rem 3rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  animation: entradaDifuminado 2s ease-in-out;

  a {
    font-weight: $regular;
    color: $blanco;
    font-size: 2.5rem;
    margin: 0 .5rem;
    text-decoration: none;
    transition: all .3s linear;

    &.router-link-exact-active {
      color: $azulClaro;
    }

    &:hover{
      color:aqua;
    }
  }

  nav {
  padding: 0 2rem;

  }
}


</style>
