<template>
    <section class="contenedor-skill">
        <div class="contenedor-img-skill">
            <div class="img-skill"></div>
            <div class="txt-skill">
                <p>Use Javascript for develope frontend</p>
            </div>
        </div>
        <h3>Javascript</h3>
    </section>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_normalize.scss";
@import "@/scss/_globales.scss";
@import "@/scss/_mixins.scss";
.contenedor-skill{
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content: center;

    h3{
        font-size: 4rem;
        margin: 0;
        font-family: $fuente;
    }
}

.contenedor-img-skill{
    position:relative;
    height: 35rem;
    width: 35rem;

    .img-skill,
    .txt-skill{
        position:absolute;
        width: 30rem;
        height: 30rem;
        top:0;
        left: 0;
        transition: all .5s ease-in-out;
    }

    .img-skill{

        background-image: url('@/assets/js.png');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 2;
    }

    .txt-skill{
        background-color: $blanco;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        z-index: 1;

        p{
            padding: 0;
            text-align: center;
        }
    }

    &:hover{
        cursor: pointer;

        & .img-skill{
            top:-15rem;
        }

        & .txt-skill{
            top:10rem;
        }
    }

}
</style>