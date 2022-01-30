<template>
  <div class="main">
    <div class="accueil__section1">
      <video class="section1__video" loop muted>
        <source src="@/assets/video/test youtube.mp4" type=video/mp4>
      </video>

      <Chevron />
    </div>

    

    <div class="accueil__section -accueil-colDroite">
      <div class="mobile accueil__infos-illus">
        <img v-bind:src="section1.illustration" alt="" />
      </div>
      <div class="accueil__infos">
        <h1>{{section1.titre}}</h1>
        <p>
          {{section1.texte}}
        </p>
        <router-link class="primaryBtn -fleche" to="/Personalisation">
          <span>Personnalise</span>
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
      <div class="desktop accueil__infos-illus">
        <img v-bind:src="section1.illustration" alt="" />
      </div>
    </div>

    <div class="accueil__section -accueil-colGauche">
      <div class="accueil__infos-illus">
        <img v-bind:src="section2.illustration" alt="" />
      </div>
      <div class="accueil__infos">
        <h1>{{section2.titre}}</h1>
        <p>
          {{section2.texte}}
        </p>
        <router-link class="primaryBtn -fleche" to="/Collaborations">
          <span>Découvre</span>
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

    <div class="accueil__section -accueil-colDroite">
      <div class="mobile accueil__infos-illus">
        <img v-bind:src="section3.illustration" alt="" />
      </div>
      <div class="accueil__infos">
        <div class="centreVert">
          <h1>{{section3.titre}}</h1>
          <p>
            {{section3.texte}}
          </p>
          <router-link class="primaryBtn -fleche" to="/Galerie">
            <span>Accède à la galerie</span>
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
      <div class="desktop accueil__infos-illus">
        <img v-bind:src="section3.illustration" alt="" />
      </div>
    </div>

    <div class="accueil__section -accueil-colGauche">
      <div class="accueil__infos-illus">
        <img v-bind:src="section4.illustration" alt="" />
      </div>
      <div class="accueil__infos">
        <h1>{{section4.titre}}</h1>
        <p>
          {{section4.texte}}
        </p>
        <router-link class="primaryBtn -fleche" to="/">
          <span>Découvre</span>
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
  </div>
</template>

<script>
import axios from "axios";
import Chevron from "@/components/Chevron.vue";

export default {
  components: { Chevron },

  data() {
    return {
      homeCards: null,
      section1: null,
      section2: null,
      section3: null,
      section4: null,
    };
  },
  mounted() {
    axios
      .get("https://agemovue.sebastienjourdain.com/wp-json/wp/v2/pages/36")
      .then((response) => {
        // Appel des infos acf
        this.homeCards = response.data.acf;
        // section1
        this.section1 = response.data.acf.section1;
        // section2
        this.section2 = response.data.acf.section2;
        // section3
        this.section3 = response.data.acf.section3;
        // section4
        this.section4 = response.data.acf.section4;
      });
  },
};
</script>

<style lang="scss">


@media screen and (min-width: 960px) {

  .mobile{
    display: none!important;
  }

  .accueil__section {
    display: grid;
    grid-template-columns: repeat(2);
    margin-left: 12.5%;
    margin-top: 15%;
  }

  .accueil__infos {
    padding-top: 7%;
  }

  .accueil__infos h1 {
    margin-bottom: 10%;
    font-weight: 600;
    width: 80%;
  }

  .accueil__infos p {
    margin-bottom: 15%;
    width: 90%;
  }

  .accueil__infos-illus {
    justify-content: center;
    align-items: center;
    display: flex;
    img {
      width: 85%;
    }
  }

  .-accueil-colDroite {
    grid-auto-columns: 25% 50%;
    grid-column-gap: 10%;
  }

  .-accueil-colGauche {
    grid-auto-columns: 50% 25%;
    grid-column-gap: 10%;
  }

  .-accueil-colDroite .accueil__infos {
    grid-column: 1;
  }

  .-accueil-colDroite .accueil__infos-illus {
    grid-column: 2;
  }

  .-accueil-colGauche .accueil__infos-illus {
    grid-column: 1;
  }

  .-accueil-colGauche .accueil__infos {
    grid-column: 2;
  }

  .section1__video {
    width: 100%;
    height: 100vh;
    border: none;
    object-fit: cover;
  }

  .accueil__section1 {
    position: relative;
  }
}

@media screen and (max-width: 960px) {

  .desktop{
    display: none!important;
  }

  .accueil__section {
    margin-top: 15%;
    margin-bottom: 25%;
  }

  .accueil__infos {
    padding-top: 7%;
    width: 90%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    & a{
     margin: auto;
    }
    
  }

  .centreVert{
    display: flex;
    flex-direction: column;
  }

  .accueil__infos h1 {
    margin-bottom: 10%;
    font-weight: 600;
    width: 80%;
    text-align: center;
    margin: 10%;
  }

  .accueil__infos p {
    margin-bottom: 15%;
    width: 90%;
    margin: 5%;
    text-align: center;
  }

  .accueil__infos-illus {
    justify-content: center;
    align-items: center;
    display: flex;
    img {
      width: 75%;
    }
  }

  .section1__video {
    width: 100%;
    height: inherit;
    border: none;
    object-fit: cover;
  }

  .accueil__section1 {
    position: relative;
  }



}
</style>
