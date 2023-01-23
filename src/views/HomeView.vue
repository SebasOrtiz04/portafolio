<template>
  <Foto/>
  <Perfil/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Foto from '@/components/ImagenPerfil.vue';
import Perfil from '@/components/PerfilHome.vue';

@Options({
  components: {
    Foto,
    Perfil
  },
})
export default class HomeView extends Vue {}
</script>
