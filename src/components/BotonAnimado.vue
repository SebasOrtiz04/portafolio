<template>
    <div class="contenedor-boton">
        <div class="contenido">
            <a :href="referencia">Boton</a>
        </div>
    </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';



@Options({
    data(){
        return{
            referencia:'#'
        }
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
export default class BotonAnimado extends Vue {
referencia: string | undefined;
}
</script>


<style lang="scss" scoped >
@import "@/scss/_variables.scss";
@import "@/scss/_normalize.scss";
@import "@/scss/_globales.scss";
@import "@/scss/_mixins.scss";

.contenedor-boton{
    position:relative;
    margin: 0 auto;
    width: 90%;
    height: 6rem;
    overflow:hidden;
    border-radius: 10px;

    @include telefono{
        width:25rem;
    }

    &:hover{

        &::after{
            animation: giroBoton 2s ease-in-out infinite;
            cursor:pointer;
        }

    }
}

.contenedor-boton::after{
    content:'';
    top:-15rem;
    left:-5rem;
    position:absolute;
    background-image:conic-gradient($azulClaro,$azulMedio,$azulClaro,$azulMedio);
    width:40rem;
    height: 40rem;
    transition: all 2s ease;
    transform: rotate(0deg);
}

.contenido{  
    position:absolute;
    top:3px;
    left:3px;
    padding:1.5rem;
    margin: 0;
    z-index:2;
    background-color: $blanco;
    width:98%;
    height: 91%;
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius: 10px;
    transition: all .4s linear;

    &:hover{
        background-color: $azulObscuro;

        & a{
            color:$azulClaro;
        }
    }
    a{
        text-decoration:none;
        font-size:3.5rem;
        color:$azulObscuro;
        text-transform:uppercase;
        font-weight: $bold;
        text-align: center;
        width:fit-content;
        height: fit-content;
    }
}


</style>