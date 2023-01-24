<template>
  <Foto/>
  <Perfil/>
  <Skills/>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Foto from '@/components/ImagenPerfil.vue';
import Perfil from '@/components/PerfilHome.vue';
import Skills from '@/components/MySkills.vue';

@Options({
  components: {
    Foto,
    Perfil,
    Skills
  },
})
export default class HomeView extends Vue {}
</script>
