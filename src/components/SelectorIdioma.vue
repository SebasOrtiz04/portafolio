<template>
    <div class="contenedor-selector">
        <select name="idioma" id="idioma">
            <option value="ingles">En</option>
            <option value="espanol">Es</option>
        </select>
    </div>

</template>

<style lang="scss">
@import "@/scss/_variables.scss";
.contenedor-selector{
    display: flex;
    justify-content: right;
    padding: 2rem 4rem 0 0;

    select{
        background:transparent;
        padding:.5rem;
        font-size:1.5rem;
        border:none;
        color:$blanco;
    }
}
</style>