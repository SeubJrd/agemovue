<template>
  <div class="modeles">
    <div class="titlePage__container">
      <p class="titlePage">Choisis ton modèle</p>
    </div>

    <div class="choix-modele">
      <div
        v-bind:style="{ backgroundImage: 'url(' + modele1.background + ')' }"
        class="modele__card modele__col1"
      >
        <div class="modele__infos">
          <h1>{{ modele1.titre }}</h1>
          <P>{{ modele1.prix }}</P>
        </div>
        <div class="modele__infos-hover -1">
          <p>
            {{ modele1.description }}
          </p>
          <router-link class="BtnVariant-modeles -fleche" to="/Personalisation"
            >Personnalise
            <span
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

      <div
        v-bind:style="{ backgroundImage: 'url(' + modele2.background + ')' }"
        class="modele__card modele__col2"
      >
        <div class="modele__infos">
          <h1>{{ modele2.titre }}</h1>
          <P>{{ modele2.prix }}</P>
        </div>
        <div class="modele__infos-hover -2">
          <p>
            {{ modele2.description }}
          </p>
          <router-link class="BtnVariant-modeles -fleche" to="/Personalisation"
            >Personnalise
            <span
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

      <div
        v-bind:style="{ backgroundImage: 'url(' + modele3.background + ')' }"
        class="modele__card modele__col3"
      >
        <div class="modele__infos">
          <h1>{{ modele3.titre }}</h1>
          <P>{{ modele3.prix }}</P>
        </div>
        <div class="modele__infos-hover -3">
          <p>
            {{ modele3.description }}
          </p>
          <router-link class="BtnVariant-modeles -fleche" to="/Personalisation"
            >Personnalise
            <span
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

      <div
        v-bind:style="{ backgroundImage: 'url(' + modele4.background + ')' }"
        class="modele__card modele__col4"
      >
        <div class="modele__infos">
          <h1>{{ modele4.titre }}</h1>
          <P>{{ modele4.prix }}</P>
        </div>
        <div class="modele__infos-hover -4">
          <p>
            {{ modele4.description }}
          </p>
          <router-link class="BtnVariant-modeles -fleche" to="/Personalisation"
            >Personnalises
            <span
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Modeles: null,
      modele1: null,
      modele2: null,
      modele3: null,
      modele4: null,
    };
  },
  mounted() {
    axios
      .get("https://agemovue.sebastienjourdain.com/wp-json/wp/v2/pages/28853")
      .then((response) => {
        // Appel des infos acf
        this.Modeles = response.data.acf;
        // section1
        this.modele1 = response.data.acf.modele1;
        // section2
        this.modele2 = response.data.acf.modele2;
        // section3
        this.modele3 = response.data.acf.modele3;
        // section4
        this.modele4 = response.data.acf.modele4;
      });
  },
};
</script>

<style lang="scss">

@media screen and (min-width: 960px) {
  .modele__card {
    width: 25vw;
    height: 30vw;
    background-repeat: no-repeat;
    background-size: 100%;
    border: 1px solid $bleuVert;
    border-radius: 5%;
    background-color: #f7f7f7;
  }

  .modele__card h1 {
    font-weight: 600;
  }

  .modele__infos-hover {
    margin: 8%;
    visibility: hidden;
  }

  .modele__infos-hover p {
    color: white;
    margin-bottom: 15%;
  }

  .modele__col1:hover {
    .modele__infos-hover {
      visibility: visible;
    }
    h1, p{
      color: white;
    }
    background-color: $bleuVert;
    background-image: none !important;
  }

  .modele__col2:hover {
    .modele__infos-hover {
      visibility: visible;
    }
    h1, p{
      color: white;
    }
    background-color: $bleuVert;
    background-image: none !important;
  }

  .modele__col3:hover {
    .modele__infos-hover {
      visibility: visible;
    }
    h1, p{
      color: white;
    }
    background-color: $bleuVert;
    background-image: none !important;
  }

  .modele__col4:hover {
    .modele__infos-hover {
      visibility: visible;
    }
    h1, p{
      color: white;
    }
    background-color: $bleuVert;
    background-image: none !important;
  }

  .modele__infos {
    margin-left: 8%;
    margin-top: 8%;
  }

  .choix-modele {
    display: grid;
    grid-template-columns: repeat(2);
    grid-auto-columns: 45%;
    grid-column-gap: 5%;
    grid-row-gap: 5%;
    margin-left: 2.5%;
    margin-top: 5%;
    margin-bottom: 15%;
  }

  .modele__col1 {
    grid-column: 1;
    float: right;
    margin-left: 43%;
  }

  .modele__col2 {
    grid-column: 2;
  }

  .modele__col3 {
    grid-column: 1;
    float: right;
    margin-left: 43%;
  }

  .modele__col4 {
    grid-column: 2;
  }
}

@media screen and (max-width: 960px) {

  .modele__card {
      width: 90%;
      margin: 5%;
      height: fit-content;
      background-color: #f5f5f5;
    background-repeat: no-repeat;
    background-size: 100%;
    border: 1px solid $bleuVert;
    border-radius: 5%;
  }

  .modele__card h1 {
    font-weight: 600;
  }

  .modele__infos {
    margin-left: 8%;
    margin-top: 15%;
    &-hover{
        margin-top: 30vh;
        padding-bottom: 10%;
        width: 90%;
        margin-left: 5%;
        & p{
            margin-top: 5%;
            margin-bottom: 10%;

        }
    }
  }

  .choix-modele {
    margin-top: 5%;
    margin-bottom: 15%;
  }
}
</style>