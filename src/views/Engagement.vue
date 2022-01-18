<template>
    <div class="main">

        <div  class="engage__section1">
            <img src="@/assets/img/engage/photoBG.png" alt="Photo paysage" class="section1__photo">

            <div class="titlePage__container titlePage__containerWhite">
                <h1 class="titlePage titlePage__white">Nos engagements pour l'environnement</h1>
            </div>
            
            <Chevron />
        </div>

        <div class="engage__main">
            <div class="main__materiaux">
                <h2 class="engage__h2">01</h2>
                <h3 class="engage__h3">Nos matériaux</h3>
                <p class="engage__p">Lors de la personnalisation de votre chaussure, vous avez la possibilité de choisir entre plusieurs matériaux. Découvrez les tous, leurs impacts sur l’environnement et leurs caractéristiques.</p>

                <div class="mate__card">
                    <img src="@/assets/img/engage/imgMate.svg" alt="img présentation daim" class="imgRond">
                    <h3>Daim</h3>
                    <img src="@/assets/img/engage/flecheCard.svg" alt="flèche carte">
                </div>
                <div class="mate__card">
                    <img src="@/assets/img/engage/imgMate.svg" alt="img présentation daim" class="imgRond">
                    <h3>Daim</h3>
                    <img src="@/assets/img/engage/flecheCard.svg" alt="flèche carte">
                </div>
            </div>
            <div class="main__materiaux">
                <h2 class="engage__h2">01</h2>
                <h3 class="engage__h3">Nos matériaux</h3>
                <p class="engage__p">Lors de la personnalisation de votre chaussure, vous avez la possibilité de choisir entre plusieurs matériaux. Découvrez les tous, leurs impacts sur l’environnement et leurs caractéristiques.</p>

                <div class="mate__card">
                    <img src="@/assets/img/engage/imgMate.svg" alt="img présentation daim" class="imgRond">
                    <h3>Daim</h3>
                    <img src="@/assets/img/engage/flecheCard.svg" alt="flèche carte">
                </div>
                <div class="mate__card">
                    <img src="@/assets/img/engage/imgMate.svg" alt="img présentation daim" class="imgRond">
                    <h3>Daim</h3>
                    <img src="@/assets/img/engage/flecheCard.svg" alt="flèche carte">
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Chevron from '@/components/Chevron.vue'

export default {
  components: { Chevron },

}

</script>

<style lang="scss">

.section1__photo {
    width: 100%;
    height: 100vh;
    border: none;
    object-fit: cover;
}

.engage__section1{
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 99%;
        background-color: rgba($color: #000000, $alpha: 0.1);
        z-index: 1;
    }
}

.titlePage {
    position: absolute;
    top: 10%;
    left: 5%;
    z-index: 4;
}

.titlePage__1, .titlePage__3 {
    color: $bleuFluo!important;
}

.titlePage__2 {
    color: $colorActionSecond!important;
}

.engage__main {
    width: 37%;
    margin: auto;
    margin-top: 128px;

}

.engage__h2, .engage__h3 {
    display: inline;
    font-weight: 900;
}

.engage__h2 {
    font-size: 100px;
    margin-right: 21px;
}

.engage__h3 {
    font-size: 45px;
}

.engage__p {
    color: $colorText;
    margin-left: 131px;
    margin-bottom: 32px;
}

.mate__card {
    width: 79%;
    height: 12vh;
    background-color: $colorTitle;
    border-radius: 15px;
    color: $colorBackground;
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 0 0 32px 131px;
}

.mate__card h3 {
    color: $colorBackground;
    font-size: 36px;
    font-weight: 600;
}

.imgRond {
    margin-left: -40px;
    height: 80%;
}

.main__materiaux {
    margin-bottom: 128px;
}

</style>