<template>
    <div class="contenedor">
        <div class="contenedor-imagen">
            <div class="imagen"></div>
            <div class="contenedor-texto">
                <h3>Juan Sebastian Ortiz</h3>
            </div>
        </div>
        <div class="izquierdo"></div>
        <div class="derecho"></div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#C3E3EE" 
            fill-opacity="1" 
            d="M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,256C672,245,768,203,864,186.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
    </svg>


</template>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_normalize.scss";
@import "@/scss/_globales.scss";
@import "@/scss/_mixins.scss";

.contenedor{
    display: flex;
    justify-content: center;
    align-items:flex-start;
    position: relative;
    overflow: hidden;
    min-height: 70vh;
}

svg{
    position:absolute;
    z-index: 5;
    margin-top: -20rem;
    bottom: 0;
}
.contenedor-imagen{
    margin-top:5rem;
    position:relative;
    height: 70vw;
    width: 70vw;
    animation: entrada-imagen 2s ease-in-out;
    transition: all 0.5s ease-in-out;

    @include telefono{
        height: 40vw;
        width: 40vw;
    }

    @include desktop{
        height: 20vw;
        width: 20vw;
    }
}

.imagen,
.contenedor-texto,
.izquierdo,
.derecho{
    position:absolute;
    transition: all 0.5s ease-in-out;
}

.imagen,
.contenedor-texto{
    top:0;
    left:0;
    width:100%;
    height: 100%;
}

.imagen{
    background-size: 200%;
    background-position: center 20%;
    background-image: url('@/assets/perfil.jpg');

}

.izquierdo,
.derecho{
    height: 60rem;
    width: 60rem;
    display: none;
    @include desktop{
        display: block;
    }
 
}

.izquierdo{
    left:-90rem;
    background-color: $cafe;
}

.derecho{
    right:-90rem;
    background-color: $cafeClaro;
}

.contenedor:hover{

    .contenedor-imagen{
        transform:translate(-2.5rem,-2.5rem);
    }

    .contenedor-texto{
        transform: translate(5.5rem,5.5rem);
    }

    .izquierdo{
        left:-30rem;
        transform:rotate(55deg)
    }

    .derecho{
        right:-30rem;
        transform:rotate(-35deg)
    }
}
.contenedor-texto{
    background-color: $blanco;
    z-index: -1;
    display:flex;
    align-items: flex-end;
    justify-content: center;

    h3{
        color:$azulObscuro;
        font-size:2rem;
        font-weight: $regular;
        font-family:$fuente;
    }
}

@keyframes entrada-imagen{
    from{
        scale:0%;
    }
    to{
        scale:1;
    }
}
</style>