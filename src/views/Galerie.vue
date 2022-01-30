<template>
    <div class="galerie">

        <div class="titlePage__container">
            <p class="titlePage">Les paires de la communauté</p>
        </div>
        <p class="galerie__description">Retrouves ici les créations de tous nos utilisateurs. De quoi te donner quelques idées pour te lancer dans ta propre customisation. N’hésites pas à partager ton design à la fin de la personnalisation.</p>
        
        <div class="galerie__galerie">
            <div class="galerie__card galerie__col1">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <div class="galerie__fav"></div>   
            </div>
            <div class="galerie__card galerie__col2">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <div class="galerie__fav"></div>    
            </div>
            <div class="galerie__card galerie__col3">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <div class="galerie__fav"></div>     
            </div>
            <div class="galerie__card galerie__col1">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <div class="galerie__fav"></div>     
            </div>
            <div class="galerie__card galerie__col2">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <div class="galerie__fav"></div>     
            </div>
            <div class="galerie__card galerie__col3">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <div class="galerie__fav"></div>     
            </div>
            <div class="galerie__card galerie__col1">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <div class="galerie__fav"></div>      
            </div>
            <div class="galerie__card galerie__col2">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <div class="galerie__fav"></div>      
            </div>
            <div class="galerie__card galerie__col3">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <div class="galerie__fav"></div>      
            </div>
            <div class="galerie__card galerie__col1">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <div class="galerie__fav"></div>      
            </div>
            <div class="galerie__card galerie__col2">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <div class="galerie__fav"></div>      
            </div>
            <div class="galerie__card galerie__col3">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <div class="galerie__fav"></div>      
            </div>

            <a class="galerie__plus" href="">Afficher plus de résultats</a>
        </div>

        
        
        <div class="ToiAussiPerso">
            <div class="galerieAussi__col1">
                <h1>{{section1.titre}}</h1>
            <a class="primaryBtn -fleche" href="">
                <span>Personnalises</span>
                <span class="icon-container"><svg class="fleche" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42 16.1"
                        enable-background="new 0 0 42 16.1" xml:space="preserve">
                        <path class="fleche__line" fill-rule="evenodd" clip-rule="evenodd" fill="#170D42"
                            d="M24.4,7.1H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h19.4" />
                        <path class="fleche__pointe" fill-rule="evenodd" clip-rule="evenodd" fill="#170D42"
                            d="M24.4,9.1l-5.9,5.3c-0.4,0.4-0.4,1-0.1,1.4s1,0.4,1.4,0.1l7.8-7
                   c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.6-0.3-0.7l-7.8-7.2c-0.4-0.4-1-0.3-1.4,0.1s-0.3,1,0.1,1.4l5.9,5.3" />
                    </svg></span>
            </a>
            </div>

            <div class="galerieAussi__col2">
                <img v-bind:src="section1.illustration" alt="">
            </div>
        </div>

    </div>
</template>

<script>

import axios from "axios";

export default {
    data() {
    return {
      encartGalerie: null,
      section1: null,
    };
  },
  mounted() {

    axios
      .get("https://agemovue.sebastienjourdain.com/wp-json/wp/v2/pages/28851")
      .then((response) => {
        // Appel des infos acf
        this.encartGalerie = response.data.acf;
        // section1
        this.section1 = response.data.acf.section1;
      });
  },

}

</script>

<style lang="scss">

.galerie__card{
    background-image: url(../assets/img/galerie/IMGCOMU.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    width: 20vw;
    height: 18vw;
    margin-bottom: 10%;
    position: relative;
}

.galerie__card a{
    &:first-of-type{
        float: right;
        margin-right: 5%;
        margin-top: 5%;
    
    }
    &:nth-of-type(2){
        float: right;
        margin-top: 75%;
        margin-right: -7%;
        margin-bottom: 5%;
    }
}

.galerie__description{
    width: 30%;
    margin-left: 12.5%;
}

.galerie__galerie{
    display: grid;
    grid-template-columns: repeat(3);
    grid-auto-columns: 20%;
    grid-column-gap: 12.5%;
    margin-left: 12.5%;
    margin-top: 10%;
}

.galerie__col1{
    grid-column: 1;
    position: relative;
}

.galerie__col2{
    grid-column: 2;
}

.galerie__col3{
    grid-column: 3;
}

.galerie__plus{
    color: $colorAction;
    text-decoration: none;
}

.ToiAussiPerso{
    display: grid;
    grid-template-columns: repeat(2);
    grid-auto-columns: 20% 50%;
    grid-column-gap: 10%;
    margin-left: 12.5%;
    margin-top: 10%;
}

.galerieAussi__col1{
    grid-column: 1;
    justify-content: center;
    align-items: center;
    padding-top: 40%;
}

.galerieAussi__col1 h1{
    font-weight: 600;
    margin-bottom: 5%;
}

.galerieAussi__col1 img{
    width: 100%;
}

.galerieAussi__col2{
    grid-column: 2;
}

.galerie__fav {
    @include aspect-ratio(1,1);
    width : 35px;
    background: url("@/../../assets/Icones/coeur non cliqué (Stroke).svg") no-repeat ;
    position: absolute;
    bottom: 25px;
    right: 25px;
    transition: 0.15s ease-in;
    overflow: hidden;
    clip-path: path('M27.8879 3.35425C27.1798 2.61299 26.3391 2.02497 25.4137 1.62379C24.4884 1.2226 23.4965 1.01611 22.4949 1.01611C21.4932 1.01611 20.5014 1.2226 19.576 1.62379C18.6506 2.02497 17.8099 2.61299 17.1018 3.35425L15.6322 4.8919L14.1626 3.35425C12.7323 1.85766 10.7923 1.01689 8.76955 1.01689C6.74675 1.01689 4.8068 1.85766 3.37647 3.35425C1.94613 4.85084 1.14258 6.88064 1.14258 8.99714C1.14258 11.1136 1.94613 13.1434 3.37647 14.64L4.84604 16.1777L15.6322 27.4635L26.4184 16.1777L27.8879 14.64C28.5964 13.8991 29.1584 13.0194 29.5418 12.0512C29.9252 11.083 30.1226 10.0452 30.1226 8.99714C30.1226 7.94909 29.9252 6.91131 29.5418 5.94308C29.1584 4.97485 28.5964 4.09516 27.8879 3.35425Z');
}

.galerie__fav:hover {
    fill: $linearGradient;
    transition: 0.3s ease-out;
    clip-path: path('M31.5777 3.6767C30.7719 2.83317 29.8152 2.16403 28.7622 1.7075C27.7091 1.25097 26.5805 1.01599 25.4406 1.01599C24.3008 1.01599 23.1721 1.25097 22.1191 1.7075C21.0661 2.16403 20.1093 2.83317 19.3035 3.6767L17.6312 5.42648L15.9589 3.6767C14.3312 1.97364 12.1236 1.01687 9.82176 1.01687C7.5199 1.01687 5.31231 1.97364 3.68465 3.6767C2.05699 5.37975 1.14258 7.68959 1.14258 10.0981C1.14258 12.5066 2.05699 14.8164 3.68465 16.5195L5.35697 18.2692L17.6312 31.112L29.9054 18.2692L31.5777 16.5195C32.3839 15.6763 33.0234 14.6753 33.4597 13.5735C33.8961 12.4717 34.1206 11.2907 34.1206 10.0981C34.1206 8.90543 33.8961 7.72448 33.4597 6.62268C33.0234 5.52088 32.3839 4.51982 31.5777 3.6767Z');
    background-image: none;
    background-color: blue;
}


</style>