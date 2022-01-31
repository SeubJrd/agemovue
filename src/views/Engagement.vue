<template>
    <div class="main">

        <div  class="engage__section1">
            <img v-bind:src="background" alt="Photo paysage" class="section1__photo">

            <div class="titlePage__container titlePage__containerWhite">
                <h1 class="titlePage titlePage__white">Nos engagements pour l'environnement</h1>
            </div>
            
            <Chevron />
        </div>

        <div class="engage__main">
            <div class="main__materiaux">
                <h2 class="engage__h2">{{ section1.numetape }}</h2>
                <h3 class="engage__h3">{{ section1.titre }}</h3>
                <p class="engage__p">Lors de la personnalisation de votre chaussure, vous avez la possibilité de choisir entre plusieurs matériaux. Découvrez les tous, leurs impacts sur l’environnement et leurs caractéristiques.</p>

                <div class="mate__card">
                    <img v-bind:src="section1.imagemat1" alt="img présentation daim" class="imgRond">
                    <h3>Daim</h3>
                    <img src="@/assets/img/engage/flecheCard.svg" alt="flèche carte">
                </div>
                <div class="mate__card">
                    <img v-bind:src="section1.imagemat2" alt="img présentation daim" class="imgRond">
                    <h3>Daim</h3>
                    <img src="@/assets/img/engage/flecheCard.svg" alt="flèche carte">
                </div>
            </div>

            <div class="main__materiaux">
                <h2 class="engage__h2">{{ section2.numetape }}</h2>
                <h3 class="engage__h3">{{ section2.titre }}</h3>
                <p class="engage__p">Lors de la personnalisation de votre chaussure, vous avez la possibilité de choisir entre plusieurs matériaux. Découvrez les tous, leurs impacts sur l’environnement et leurs caractéristiques.</p>

                <div class="mate__card">
                    <img v-bind:src="section2.imagetrans1" alt="img présentation daim" class="imgRond">
                    <h3>Daim</h3>
                    <img src="@/assets/img/engage/flecheCard.svg" alt="flèche carte">
                </div>
                <div class="mate__card">
                    <img v-bind:src="section2.imagetrans2" alt="img présentation daim" class="imgRond">
                    <h3>Daim</h3>
                    <img src="@/assets/img/engage/flecheCard.svg" alt="flèche carte">
                </div>
            </div>

            <div class="main__fabrication">
                <h2 class="engage__h2">{{ section3.numetape }}</h2>
                <h3 class="engage__h3">{{ section3.titre }}</h3>
                <p class="engage__p">
                    {{ section3.texte1 }}
                </p>

                <img v-bind:src="section3.illu" alt="">

                <p class="engage__p">
                    {{ section3.texte2 }}
                </p>

               
            </div>

            <div class="main__recyclage">
                <h2 class="engage__h2">{{ section4.numetape }}</h2>
                <h3 class="engage__h3">{{ section4.titre }}</h3>
                <p class="engage__p">
                    {{ section4.texte1 }}
                </p>

                <img v-bind:src="section4.illu" alt="">

                <p class="engage__p">
                    {{ section4.texte2 }}
                </p>

               
            </div>

        </div>
        
    </div>
</template>

<script>
import Chevron from '@/components/Chevron.vue'
import axios from "axios"

export default {
  components: { Chevron },

  data() {
    return {
      MainEngage: null,
      section1: null,
      section2: null,
      section3: null,
      section4: null,
      background: null,
    };
  },
  mounted() {
    axios
      .get("https://agemovue.sebastienjourdain.com/wp-json/wp/v2/pages/28972")
      .then((response) => {
        // Appel des infos acf
        this.MainEngage = response.data.acf;
        // section1
        this.section1 = response.data.acf.materiaux;
        // section2
        this.section2 = response.data.acf.transports;
        // section3
        this.section3 = response.data.acf.fabrication_;
        // section4
        this.section4 = response.data.acf.recyclage;
        // background
        this.background = response.data.acf.background;
      });
  },

};

</script>

<style lang="scss">

@media screen and (min-width: 960px) {

    .main__fabrication{
        & img{
            width: 75%;
            margin-left: 131px;
            margin-top: 10%;
            margin-bottom: 10%;
        }
    }

     .main__recyclage{
        & img{
            width: 60%;
            margin-left: 131px;
            margin-top: 10%;
            margin-bottom: 10%;
        }
    }

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
 
}

@media screen and (max-width: 960px) { 

    .main__fabrication{
        & img{
            width: 80%;
            margin-left: 10%;
            margin-top: 10%;
            margin-bottom: 10%;
        }
    }

     .main__recyclage{
         margin-bottom: 25%;
        & img{
            width: 80%;
            margin-left: 10%;
            margin-top: 10%;
            margin-bottom: 10%;
        }
    }

    .section1__photo {
    width: 100%;
    height: 90vh;
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
    top: 45%!important;
    left: 5%!important;
    z-index: 4;
}

.titlePage__1, .titlePage__3 {
    color: $bleuFluo!important;
}

.titlePage__2 {
    color: $colorActionSecond!important;
}

.engage__main {
    margin-top: 128px;

}

.engage__h2, .engage__h3 {
    display: inline;
    font-weight: 900;
}

.engage__h2 {
    font-size: 80px;
    margin-right: 21px;
    margin-left: 30px;
}

.engage__h3 {
    font-size: 30px;
}

.engage__p {
    color: $colorText;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 32px;
}

.mate__card {
    width: 80%;
    height: 10vh;
    background-color: $colorTitle;
    border-radius: 15px;
    color: $colorBackground;
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin-left: 10%;
    margin-bottom: 5%;
}

.mate__card h3 {
    color: $colorBackground;
    font-size: 36px;
    font-weight: 600;
}

.imgRond {
    margin-left: -25px;
    height: 80%;
}

.main__materiaux {
    margin-bottom: 128px;
}

}



</style>