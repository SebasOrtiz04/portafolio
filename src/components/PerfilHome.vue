<template>
    <section class="contenedor" ref="contenedor">

        <div class="contenido">
            <h1 ref="titulo">HI!</h1>
            <p ref="saludoTexto">I´m fullstack developer and i love create simply and util plataforms,
                i desing and develope user interfaces, back end, data bases and i can too 
                conect robot and houses to internet, the future is Iot and Indusrtry 4.0 and it is now.
            </p>
        </div>

        <Boton />

    </section>


</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Boton from '@/components/BotonAnimado.vue';
// import {ref} from 'vue';


@Options({
    components:{
        Boton
    },
    mounted(){
        this.scroll(this.$refs.titulo);
        this.scroll(this.$refs.saludoTexto);
    },
    methods:{
        scroll(element:HTMLElement){
            const contenedor = this.$refs.contenedor;
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
export default class PerfilHome extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_normalize.scss";
@import "@/scss/_globales.scss";
@import "@/scss/_mixins.scss";

.contenedor{
    margin-top:1rem;
    background-color: $blanco;
    padding: 5rem;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;

    @include desktop{
        margin-top:7rem;
        height: 100vh;
    }
}

.contenido{
    width: 95%;
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    @include tablet{
        width: 85%;
    }

    h1{
        font-size: 25rem;
        margin:0;
        background: linear-gradient( to bottom,$azulMedio, $azulClaro, $azulObscuro ,$azulMedio);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        padding: 0;
        width: fit-content;
        transition: all 2s ease;
        opacity: 0;

        &:hover{
            animation: textoHover 1s ease ;
            cursor: pointer;
        }
        
    }

    p{
        opacity: 0;
        transition: all 2s ease;
    }
}

</style>