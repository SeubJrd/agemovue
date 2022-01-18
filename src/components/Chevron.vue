<template>
    <div class="Chevron">
        <img class="chevronEtrange" src="@/assets/img/Accueil/chevron_etrange.svg" alt="">
        <img class="flecheChevron" src="@/assets/img/Accueil/fleche_chevron.svg" alt="">
    </div>
</template>

<script>
export default {
    name: 'Chevron',
}
</script>


<style lang="scss">


@media screen and (max-width: 960px) { 

    .chevronEtrange{
    position: absolute;
    width: 100%;
    bottom: 0.36vh;
    z-index: 5;
}

.flecheChevron{
    position: absolute;
    bottom: 2vh;
    left: 45.5%;
    width: 5%;
    z-index: 10;
}

}

@media screen and (min-width: 960px) { 

.chevronEtrange{
    position: absolute;
    width: 50%;
    bottom: 0.36vh;
    left : 26%;
    z-index: 5;
}

.flecheChevron{
    position: absolute;
    bottom: 3.5vh;
    left: 49%;
    width: 2%;
    z-index: 10;
}

}








</style>