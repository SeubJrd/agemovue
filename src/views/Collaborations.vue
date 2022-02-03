<template>
  <div class="collabs descendre">
    <div class="titlePage__container">
      <p class="titlePage">Les Collaborations</p>
    </div>

    <div class="collab__ponce -col-gauche">
        <div class="mobile collab__illu">
          <div >
            <img v-bind:src="collab1.motifpreview" alt="" />
        <img v-bind:src="collab1.shoepreview" alt="" />
          </div>
      
      </div>
      <div class="collab__infos">
        <img v-bind:src="collab1.decotitre" alt="" />
        <h1>{{ collab1.titre }}</h1>
        <p>{{ collab1.texte }}</p>
        <router-link class="primaryBtn -fleche" to="/Personalisation">
          <span> Teste le motif </span>
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

      <div class="desktop collab__illu">

        <div class="preview">
          <img class="previewnormal" v-bind:src="collab1.motifpreview" alt="" />
        <img class="previewnormal previewnormal2" v-bind:src="collab1.shoepreview" alt="" />
        
        
          <img class="previewhover" v-bind:src="collab1.savoirplus" alt="" />
          <h2 class="previewhover">Ponce</h2>
          <p class="previewhover">Ponce aussi connu sous le nom de Poncefleur est un streamer de jeux vidéos. En septembre 2020 il lance sa boutique fleur, avec de nombreux articles aux couleurs florales.</p>

      </div>

      </div>
    </div>

    <div class="collab__OP -col-droite">
      <div class="mobile collab__illu">
        <img v-bind:src="collab2.motifpreview" alt="" />
        <img v-bind:src="collab2.shoepreview" alt="" />
      </div>

      <div class="desktop collab__illu">

        <div class="preview">
          <img class="previewnormal" v-bind:src="collab2.motifpreview" alt="" />
        <img class="previewnormal previewnormal2" v-bind:src="collab2.shoepreview" alt="" />
        
        
          <img class="previewhover" v-bind:src="collab2.savoirplus" alt="" />
          <h2 class="previewhover">One piece</h2>
          <p class="previewhover">One Piece est une série de manga shōnen . Adaptée en animé depuis 1999 au Japon, elle rencontre un franc succès en France. A travers plus de 1000 épisodes, on découvre les aventures de pirates à la recherche du trésor “One piece”.</p>

      </div>

      </div>

      <div class="collab__infos">
        <img v-bind:src="collab2.decotitre" alt="" />
        <h1>{{ collab2.titre }}</h1>
        <p>{{ collab2.texte }}</p>
        <router-link class="primaryBtn -fleche" to="/Personalisation">
          <span> Teste le motif </span>
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

    <div class="collab__nasa -col-gauche">
        <div class="mobile collab__illu">
        <img v-bind:src="collab3.motifpreview" alt="" />
        <img v-bind:src="collab3.shoepreview" alt="" />
      </div>
      <div class="collab__infos">
        <img v-bind:src="collab3.decotitre" alt="" />
        <h1>{{ collab3.titre }}</h1>
        <p>{{ collab3.texte }}</p>
        <router-link class="primaryBtn -fleche" to="/Personalisation">
          <span> Teste le motif </span>
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

      <div class="desktop collab__illu">

        <div class="preview">
          <img class="previewnormal" v-bind:src="collab3.motifpreview" alt="" />
        <img class="previewnormal previewnormal2" v-bind:src="collab3.shoepreview" alt="" />
        
        
          <img class="previewhover" v-bind:src="collab3.savoirplus" alt="" />
          <h2 class="previewhover">Nasa</h2>
          <p class="previewhover">Nasa, acronyme de “National Aeronautics and Space Administration” est une agence fédérale responsable du programme spatial civil des États-Unis. Ils sont à l’origine de plusieurs projets de vols spatiaux habités.</p>

      </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      collabsCards: null,
      collab1: null,
      collab2: null,
      collab3: null,
    };
  },
  mounted() {
    axios
      .get("https://agemovue.sebastienjourdain.com/wp-json/wp/v2/pages/28848")
      .then((response) => {
        // Appel des infos acf
        this.collabsCards = response.data.acf;
        // section1
        this.collab1 = response.data.acf.collab1;
        // section2
        this.collab2 = response.data.acf.collab2;
        // section3
        this.collab3 = response.data.acf.collab3;
      });
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 960px) {

    .mobile{
        display: none;
    }
  .-col-gauche {
    display: grid;
    grid-auto-columns: 25% 40%;
    grid-column-gap: 10%;
    margin-left: 20%;
    align-items: center;
    margin-top: 10%;
  }

  .-col-droite {
    display: grid;
    grid-template-columns: repeat(2);
    grid-auto-columns: 40% 25%;
    grid-column-gap: 10%;
    margin-left: 20%;
    align-items: center;
    margin-top: 10%;
  }

  .-col-gauche .collab__infos {
    grid-column: 1;
  }

  .-col-gauche .collab__illu {
    grid-column: 2;
    width: 100%;
    border: 1px solid $colorTitle;
    border-radius: 40px;
  }

  .-col-droite .collab__illu {
    grid-column: 1;
    width: 100%;
    border: 1px solid $colorTitle;
    border-radius: 40px;
  }

  .-col-droite .collab__infos {
    grid-column: 2;
  }

  .collab__illu img {
    width: 100%;
    border-radius: 40px;
    &:first-of-type {
      border-bottom-left-radius: initial;
      border-bottom-right-radius: initial;
    }
    &:first-of-type {
      border-bottom-left-radius: initial;
      border-bottom-right-radius: initial;
    }
    &:nth-of-type(2) {
      border-top-left-radius: initial;
      border-top-right-radius: initial;
    }
  }

  .collab__infos h1 {
    font-weight: 600;
    margin-bottom: 5%;
    margin-top: 7%;
  }

  .collab__infos p {
    margin-bottom: 5%;
    // width: 80%;
  }

  .collab__plus {
    color: $colorAction;
    display: block;
    font-size: 1vw;
  }

  .collab__infos .primaryBtn {
    margin-top: 5%;
  }

  .collab__infos img {
    width: 80%;
  }

 
  .previewhover{
    display: none;
  }


  .preview{
    &:hover {
    background-color: $bleuVert;
    border-radius: 40px;

      .previewhover{
        display: block;
      }
      
      .previewnormal:first-of-type{
        display: none;
        position: relative;

      }
      .previewnormal:nth-of-type(2){
        visibility: hidden;
        position: absolute;
      }
    }
  }

  .preview{
      & h2{
        width: 90%;
        margin-left: 5%;
        margin-top: 10%;
        color: white;
        text-align: center;
      }
      & p{
        width: 90%;
        margin-left: 5%;
        padding-bottom: 10%;
        color: white;
        text-align: center;
      }
  }

}

@media screen and (max-width: 960px) {

    .desktop{
        display: none;
    }

    .collabs{
        margin-bottom: 15%;
    }

  .-col-gauche {
    margin-top: 20%;
    width: 90%;
    margin-left: 5%;
  }

  .-col-droite {
    margin-top: 20%;
    width: 90%;
    margin-left: 5%;
  }

    .collab__illu {
    width: 100%;
    border: 1px solid $colorTitle;
    border-radius: 40px;
  }

  .collab__illu img {
    width: 100%;
    border-radius: inherit;
    &:first-of-type {
      border-bottom-left-radius: initial;
      border-bottom-right-radius: initial;
    }
    &:nth-of-type(2) {
      border-top-left-radius: initial;
      border-top-right-radius: initial;
    }
  }

  .collab__infos h1 {
    font-weight: 600;
    margin-bottom: 5%;
    margin-top: 7%;
    text-align: center;
    width: 80%;
    margin-left: 10%;
  }

  .collab__infos p {
    margin-bottom: 5%;
    text-align: center;
  }

  .collab__plus {
    color: $colorAction;
    margin: auto;
    padding: 5%;
  }

  .collab__infos{
    display: flex;
    flex-direction: column;
  }

  .collab__infos .primaryBtn {
    margin-top: 5%;
    margin: auto;
  }

  .collab__infos img {
    width: 80%;
    margin: 10%;
  }
}
</style>