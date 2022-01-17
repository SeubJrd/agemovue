<template>
    <div class="galerie">

        <div class="titlePage">
            <h1 class="titlePage__1">Les paires de la </h1>
            <p class="titlePage__2">Les paires de la </p>
            <p class="titlePage__3">Les paires de la </p>
            <div class="titlePage2">
                <h1 class="titlePage2__1">communauté </h1>
                <p class="titlePage2__2">communauté </p>
                <p class="titlePage2__3">communauté </p>
            </div>
        </div>
        <p class="galerie__description">Retrouves ici les créations de tous nos utilisateurs. De quoi te donner quelques idées pour te lancer dans ta propre customisation. N’hésites pas à partager ton design à la fin de la personnalisation.</p>
        
        <div class="galerie__galerie">
            <div class="galerie__card galerie__col1">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <a href=""><img src="@/assets/Icones/coeur non cliqué (Stroke).svg" alt=""></a>   
            </div>
            <div class="galerie__card galerie__col2">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <a href=""><img src="@/assets/Icones/coeur non cliqué (Stroke).svg" alt=""></a>   
            </div>
            <div class="galerie__card galerie__col3">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <a href=""><img src="@/assets/Icones/coeur non cliqué (Stroke).svg" alt=""></a>   
            </div>
            <div class="galerie__card galerie__col1">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <a href=""><img src="@/assets/Icones/coeur non cliqué (Stroke).svg" alt=""></a>   
            </div>
            <div class="galerie__card galerie__col2">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <a href=""><img src="@/assets/Icones/coeur non cliqué (Stroke).svg" alt=""></a>   
            </div>
            <div class="galerie__card galerie__col3">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <a href=""><img src="@/assets/Icones/coeur non cliqué (Stroke).svg" alt=""></a>   
            </div>
            <div class="galerie__card galerie__col1">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <a href=""><img src="@/assets/Icones/coeur non cliqué (Stroke).svg" alt=""></a>   
            </div>
            <div class="galerie__card galerie__col2">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <a href=""><img src="@/assets/Icones/coeur non cliqué (Stroke).svg" alt=""></a>   
            </div>
            <div class="galerie__card galerie__col3">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <a href=""><img src="@/assets/Icones/coeur non cliqué (Stroke).svg" alt=""></a>   
            </div>
            <div class="galerie__card galerie__col1">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <a href=""><img src="@/assets/Icones/coeur non cliqué (Stroke).svg" alt=""></a>   
            </div>
            <div class="galerie__card galerie__col2">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <a href=""><img src="@/assets/Icones/coeur non cliqué (Stroke).svg" alt=""></a>   
            </div>
            <div class="galerie__card galerie__col3">
                <a href=""><img src="@/assets/Icones/info.svg" alt=""></a>
                <a href=""><img src="@/assets/Icones/coeur non cliqué (Stroke).svg" alt=""></a>   
            </div>

            <a class="galerie__plus" href="">Afficher plus de résultats</a>
        </div>

        
        
        <div class="ToiAussiPerso">
            <div class="galerieAussi__col1">
                <h1>Toi aussi personnalise tes sneakers</h1>
            <a class="primaryBtn -fleche" href="">Personnalises
                <span><svg class="fleche" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
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
                <img src="@/assets/img/galerie/Group.png" alt="">
            </div>
        </div>

    </div>
</template>

<script>

export default {

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



</style>