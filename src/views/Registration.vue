<template>
  <div class="inscription">
    <div class="titlePage__container">
      <p class="titlePage">Inscription</p>
    </div>

    <div class="zoneInscription">
      <p>*Les champs marqués d’une étoile sont obligatoires</p>

      <form>
        <div class="formulaire">
          <label class="formulaire__label || pseudo__label" for="username"
            >Pseudo *</label
          >
          <br />
          <input
            class="formulaire__input || pseudo__input"
            id="username"
            type="text"
            placeholder="Pseudo..."
            v-model="form.username"
          />
        </div>
        <div class="formulaire">
          <label class="formulaire__label || email__label" for="email"
            >Email *</label
          >
          <br />
          <input
            class="formulaire__input || email__input"
            type="email"
            id="email"
            placeholder="nom@mail.fr"
            v-model="form.email"
          />
        </div>
        <div class="formulaire">
          <label class="formulaire__label || mdp__label" for="password"
            >Mot de passe *</label
          ><br />
          <input
            class="formulaire__input || mdp__input"
            type="password"
            id="password"
            placeholder="Mot de passe"
            v-model="form.password"
          />
        </div>
        <div class="check">
          <label class="main-check"
            >Je souhaite m’inscrire à la newsletter
            <input type="checkbox" />
            <span class="newsletter"></span>
          </label>
        </div>

        <div class="check">
          <label class="main-check"
            >J’ai lu et j’accepte les
            <a class="lien-connexion" href=""
              >conditions générales d’utilisation / de vente</a
            >
            <input type="checkbox" required />
            <span class="newsletter"></span>
          </label>
        </div>
        <div>
          <a class="zoneConnexion__lien || primaryBtn -fleche" @click="submit">
            <span>Inscription</span>
            <span class="icon-container"
              ><svg class="fleche" x="0px" y="0px" viewBox="0 0 42 16.1">
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
          </a>
        </div>
      </form>

      <p class="phrase-compte">
        Déjà membre ?<a class="lien-compte || lien-connexion" href="./Connexion"
          >Connectez vous ici</a
        >
      </p>

      <a
        class="lien-rgpd || lien-connexion"
        href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
        >Règlement général sur la protection des données</a
      >
    </div>

    <div v-if="success">
      <p style="color: green">Votre inscription est réussi !</p>
    </div>

    <div v-if="error">
      <p style="color: red">{{ errorMessage }}</p>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: null,
        email: null,
        password: null,
      },
      success: false,
      error: false,
      errorMessage: null,
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();

      axios
        .post(
          "https://agemovue.sebastienjourdain.com/wp-json/wp/v2/users/register",
          {
            username: this.form.username,
            email: this.form.email,
            password: this.form.password,
          }
        )
        .then((response) => {
          if (response.status === 200) {
            this.success = true;
            this.error = false;
          }
        })
        .catch((error) => {
          console.log("Error LOG : ", error.response);
          this.errorMessage = error.response.data.message;
          this.error = true;
          this.success = false;
        });
    },
  },
};
</script>
 
<style lang="scss">
@media screen and (min-width: 960px) {
  .main-check {
    position: relative;
    padding-left: 45px;
    padding-top: 3px;
    margin-bottom: 15px;
    cursor: pointer;
  }

  input[type="checkbox"] {
    visibility: hidden;
  }

  .newsletter {
    position: absolute;
    top: 0;
    left: 0;
    height: 21px;
    width: 21px;
    background-color: white;
    border: 1px solid $colorAction;
    border-radius: 3px;
  }

  .main-check input:active ~ .newsletter {
    background-color: white;
  }

  .main-check input:checked ~ .newsletter {
    background-color: $colorAction;
  }

  .newsletter:after {
    content: "";
    position: absolute;
    display: none;
  }

  .main-check input:checked ~ .newsletter:after {
    display: block;
  }

  .main-check .newsletter:after {
    left: 6px;
    bottom: 5px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .zoneInscription {
    margin: auto;
    width: 50%;
    position: relative;
    top: 0;
    left: 0;
  }

  .espace-bouton {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 1fr;
    justify-content: center;
  }

  .nb-page {
    grid-column: 2;
    margin: auto;
  }
  .btn-suivant {
    grid-column: 3;
    justify-self: end;
  }

  #newsletter {
    width: 18px;
    height: 18px;
  }

  input[type="checkbox"]#newsletter {
    display: none;
  }
  input[type="checkbox"]#newsletter + label::before {
    font-family: "Font Awesome 5 Free";
    content: "\f0c8";
    font-size: 1.2em;
    color: #00b7e8;
    margin-right: 0.3rem;
  }
  input[type="checkbox"]#newsletter:checked + label::before {
    content: "\f14a";
    color: #00b7e8;
  }
}

@media screen and (max-width: 960px) {
  .main-check {
    position: relative;
    padding-left: 45px;
    padding-top: 3px;
    cursor: pointer;
  }

  input[type="checkbox"] {
    visibility: hidden;
  }

  .newsletter {
    position: absolute;
    top: 0;
    left: 0;
    height: 21px;
    width: 21px;
    background-color: white;
    border: 1px solid $colorAction;
    border-radius: 3px;
  }

  .main-check input:active ~ .newsletter {
    background-color: white;
  }

  .main-check input:checked ~ .newsletter {
    background-color: $colorAction;
  }

  .newsletter:after {
    content: "";
    position: absolute;
    display: none;
  }

  .main-check input:checked ~ .newsletter:after {
    display: block;
  }

  .main-check .newsletter:after {
    left: 6px;
    bottom: 5px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .zoneInscription {
    width: 90%;
    margin-left: 5%;
  }

  #newsletter {
    width: 18px;
    height: 18px;
  }

  input[type="checkbox"]#newsletter {
    display: none;
  }
  input[type="checkbox"]#newsletter + label::before {
    font-family: "Font Awesome 5 Free";
    content: "\f0c8";
    font-size: 1.2em;
    color: #00b7e8;
    margin-right: 0.3rem;
  }
  input[type="checkbox"]#newsletter:checked + label::before {
    content: "\f14a";
    color: #00b7e8;
  }

  label, input{
      margin-left: 0!important;
  }

  .check {
      margin-bottom: 10%;
      margin-top: 10%;
  }

  .phrase-compte{
      margin-left: 0!important;
  }

  .lien-rgpd{
      margin-left: 0;
  }

  .zoneConnexion__lien{
      margin-left: 0!important;
  }
}
</style>