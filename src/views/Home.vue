<template>
    <div class="main">

        <div  class="accueil__section1">
        <video class="section1__video" autoplay loop muted>
            <source src="@/assets/video/test youtube.mp4" type=video/mp4>
        </video>

        <Chevron />
        </div>

        <div class="accueil__section -accueil-colDroite">
            <div class="accueil__infos">
                <h1>Personnalises tes chaussures</h1>
                <p>Laisse parler ta créativité ! Couleurs, textures et même des motifs réalisés par des artistes, tu peux tout changer pour créer le modèle de tes rêves.</p>
                <router-link class="primaryBtn -fleche" to="/Personalisation">
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
                </router-link>
            </div>
            <div class="accueil__infos-illus">
                <img src="@/assets/img/Accueil/illu_perso.svg" alt="">
            </div>
        </div>

        <div class="accueil__section -accueil-colGauche">
            <div class="accueil__infos-illus">
                <img src="@/assets/img/Accueil/illu_colaboration.svg" alt="">
            </div>
            <div class="accueil__infos">
                <h1>Découvres nos collaborations</h1>
                <p>Des motifs fleuris de Ponce, à l’aventure One Piece en partant pour l’espace avec la NASA, viens découvrir des designs originaux et éphémères pour personnaliser te s chaussures.</p>
                <router-link class="primaryBtn -fleche" to="/Collaborations">
                    <span>Découvres</span>
                    <span class="icon-container"><svg class="fleche" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42 16.1"
                            enable-background="new 0 0 42 16.1" xml:space="preserve">
                             <path class="fleche__line" fill-rule="evenodd" clip-rule="evenodd" fill="#170D42"
                                d="M24.4,7.1H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h19.4" />
                            <path class="fleche__pointe" fill-rule="evenodd" clip-rule="evenodd" fill="#170D42"
                                d="M24.4,9.1l-5.9,5.3c-0.4,0.4-0.4,1-0.1,1.4s1,0.4,1.4,0.1l7.8-7
                        c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.6-0.3-0.7l-7.8-7.2c-0.4-0.4-1-0.3-1.4,0.1s-0.3,1,0.1,1.4l5.9,5.3" />
                        </svg></span>
                </router-link>
            </div>
        </div>

        <div class="accueil__section -accueil-colDroite">
            <div class="accueil__infos">
                <h1>Partages tes créations</h1>
                <p>Besoin d’inspiration pour faire ta customisation ? Penses à regarder les modèles réalisés par les créatifs. N’hésites pas à y partager ta propre création.</p>
                <router-link class="primaryBtn -fleche" to="/Galerie">
                    <span>Accèdes à la galerie</span>
                    <span class="icon-container"><svg class="fleche" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42 16.1"
                            enable-background="new 0 0 42 16.1" xml:space="preserve">
                             <path class="fleche__line" fill-rule="evenodd" clip-rule="evenodd" fill="#170D42"
                                d="M24.4,7.1H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h19.4" />
                            <path class="fleche__pointe" fill-rule="evenodd" clip-rule="evenodd" fill="#170D42"
                                d="M24.4,9.1l-5.9,5.3c-0.4,0.4-0.4,1-0.1,1.4s1,0.4,1.4,0.1l7.8-7
                        c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.6-0.3-0.7l-7.8-7.2c-0.4-0.4-1-0.3-1.4,0.1s-0.3,1,0.1,1.4l5.9,5.3" />
                        </svg></span>
                </router-link>
            </div>
            <div class="accueil__infos-illus">
                <img src="@/assets/img/Accueil/illu_partagez.svg" alt="">
            </div>
        </div>

        <div class="accueil__section -accueil-colGauche">
            <div class="accueil__infos-illus">
                <img src="@/assets/img/Accueil/illu_engagements.svg" alt="">
            </div>
            <div class="accueil__infos">
                <h1>Découvres nos engagements</h1>
                <p>Notre planète est importante, pour limiter notre impact environnemental, Agemo s’engage sur ses méthodes de production et choix de matériaux.</p>
                <router-link class="primaryBtn -fleche" to="/">
                    <span>Découvres</span>
                    <span class="icon-container"><svg class="fleche" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42 16.1"
                            enable-background="new 0 0 42 16.1" xml:space="preserve">
                             <path class="fleche__line" fill-rule="evenodd" clip-rule="evenodd" fill="#170D42"
                                d="M24.4,7.1H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h19.4" />
                            <path class="fleche__pointe" fill-rule="evenodd" clip-rule="evenodd" fill="#170D42"
                                d="M24.4,9.1l-5.9,5.3c-0.4,0.4-0.4,1-0.1,1.4s1,0.4,1.4,0.1l7.8-7
                        c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.6-0.3-0.7l-7.8-7.2c-0.4-0.4-1-0.3-1.4,0.1s-0.3,1,0.1,1.4l5.9,5.3" />
                        </svg></span>
                </router-link>
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

.accueil__section{
    display: grid;
    grid-template-columns: repeat(2);
    margin-left: 12.5%;
    margin-top: 15%;
}

.accueil__infos h1{
    margin-bottom: 10%;
    font-weight: 600;
    width: 80%;
}

.accueil__infos p{
    margin-bottom: 15%;
    width: 90%;
}

.accueil__infos-illus{
    justify-content: center;
    align-items: center;
    display: flex;
    img {
        width: 85%;
    }
}

.-accueil-colDroite{
    grid-auto-columns: 25% 50%;
    grid-column-gap: 10%;
}

.-accueil-colGauche{
    grid-auto-columns: 50% 25%;
    grid-column-gap: 10%;
}

.-accueil-colDroite .accueil__infos{
    grid-column: 1;
}

.-accueil-colDroite .accueil__infos-illus{
    grid-column: 2;
}

.-accueil-colGauche .accueil__infos-illus{
    grid-column: 1;
}

.-accueil-colGauche .accueil__infos{
    grid-column: 2;
}

.section1__video {
    width: 100%;
    height: 100vh;
    border: none;
    object-fit: cover;

}

.accueil__section1{
    position: relative;
}

</style>
