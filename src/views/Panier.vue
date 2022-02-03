<template>
    <div class="panier descendre">

        <div class="titlePage__container">
            <p class="titlePage">Mon panier</p>
        </div>
        <div class="mainPanier">
            <h3>Ta paire a bien été enregistrée, elle sera envoyée lors du lancement officiel le 11/05 !</h3>
        <p>Tu sera notifié au moment de son envoie pour procéder au paiement.</p>
        <p>En attendant, continues a personnaliser des paires sur Agemo !</p>
        <router-link class="primaryBtn -fleche" to="/Personalisation">
          <span>Retournes à la personnalisation</span>
          <span class="icon-container"
            ><svg
              class="fleche"
              version="1.1"
              id="Calque_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 42 16.1"
              enable-background="new 0 0 42 16.1"
              xml:space="preserve"
            >
              <path
                class="fleche__line"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#170D42"
                d="M24.4,7.1H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h19.4"
              />
              <path
                class="fleche__pointe"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#170D42"
                d="M24.4,9.1l-5.9,5.3c-0.4,0.4-0.4,1-0.1,1.4s1,0.4,1.4,0.1l7.8-7
                        c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.6-0.3-0.7l-7.8-7.2c-0.4-0.4-1-0.3-1.4,0.1s-0.3,1,0.1,1.4l5.9,5.3"
              /></svg
          ></span>
        </router-link>
        </div>
                

    </div>
</template>

<script>


</script>

<style lang="scss">

@media screen and (min-width: 960px) {

    .mobile{
        display: none;
    }

    .mainPanier {
        margin-left: 10%;
        width: 60%;
        & h3{
            margin-top: 3%;
        }
        & p{
            margin-top: 1.5%;
        }
        & a {
            margin-top: 5%;
        }
    }

    
 
}

@media screen and (max-width: 960px) { 

    .desktop{
        display: none;
    }

    .mainPanier {
        margin-left: 5%;
        width: 90%;
        & h3{
            margin-top: 3%;
        }
        & p{
            margin-top: 1.5%;
        }
        & a {
            margin-top: 5%;
        }
    }

    

}



</style>