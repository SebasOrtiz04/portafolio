<template>
    <section class="contenedor-skills" ref="contenedor">
        <h1 ref="titulo">Some of my Skills</h1>

        <div class="grid-skills">
            <Skill/>
            <Skill/>
            <Skill/>
        </div>

    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Skill from '@/components/SkillTemplate.vue';
// import {ref} from 'vue';


@Options({
    components:{
        Skill
    },
    mounted(){
        this.scroll(this.$refs.titulo);
    },
    methods:{
        scroll(element:HTMLElement){
            const contenedor:HTMLElement = this.$refs.contenedor;
            window.addEventListener('scroll', function(){
                if(contenedor.getBoundingClientRect().top < 100){
                    element.style.opacity = '1';
                } else{
                    element.style.opacity = '0';
                }
                
            })
        }
    }
})
export default class MySkills extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_normalize.scss";
@import "@/scss/_globales.scss";
@import "@/scss/_mixins.scss";
.contenedor-skills{
    height: 100vh;
    width:100%;
    background-color: $azulClaro;
    padding:5rem 0 10rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1{
        margin:1rem 0 0 3rem;
        color:$blanco;
        font-family: $fuente;
        font-weight: $regular;
        font-size:8rem;
        transition: all 2s ease;
    }
}

.grid-skills{
    @include grid(3,2rem);
    width:80%;
    height: 40rem;
}
</style>