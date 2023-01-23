<template>
    <section class="contenedor" ref="contenedor">

        <div class="contenido">
            <h1 ref="titulo">HI!</h1>
            <p ref="saludoTexto">I´m fullstack developer and i love create simply and util plataforms,
                i desing and develope user interfaces, back end, data bases and i can too 
                conect robot and houses to internet, the future is Iot and Indusrtry 4.0 and it is now.
            </p>
        </div>

    </section>


</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import {ref} from 'vue';


@Options({
    mounted(){
        this.scroll(this.$refs.titulo);
        this.scroll(this.$refs.saludoTexto);
    },
    methods:{
        scroll(element:HTMLElement){
            const contenedor = this.$refs.contenedor;
            window.addEventListener('scroll', function(){
                if(contenedor.getBoundingClientRect().top < 0){
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

    @include telefono{
        margin-top:7rem;
    }
}

.contenido{
    width: 95%;
    margin: 0 auto;
    padding-top: 10rem;
    min-height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    @include telefono{
        width: 70%;
    }

    h1{
        font-size: 30rem;
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