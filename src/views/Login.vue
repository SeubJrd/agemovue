<template>
  <div class="connexion">
    <div class="titlePage__container">
      <p class="titlePage">Connexion</p>
    </div>

    <div class="zoneConnexion">
      <form>
        <div class="formulaire">
          <label class="formulaire__label || email__label" for="username"
            >Email / Pseudo</label
          ><br />
          <input
            class="formulaire__input || email__input"
            id="username"
            placeholder="Pseudo ..."
            type="text"
            v-model="form.username"
          />
        </div>
        <div class="formulaire">
          <label class="formulaire__label || mdp__label" for="password"
            >Mot de passe</label
          ><br />
          <input
            class="formulaire__input || mdp__input"
            type="password"
            id="password"
            placeholder="Mot de passe ..."
            v-model="form.password"
          />
        </div>

        <a class="zoneConnexion__lien || lien-connexion" href=""
          >Mot de passe oublié ?</a
        ><br />

        <div>
          <a class="zoneConnexion__lien || primaryBtn -fleche" @click="submit">
            <span>Connexion</span>
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
        Pas de compte ?<a
          class="lien-compte || lien-connexion"
          href="./Inscription"
          >Inscrivez vous ici</a
        >
      </p>
    </div>

    <div v-if="success">
      <p style="color: green">Connexion réussie</p>
    </div>

    <div v-if="error">
      <p style="color: red">Nom ou mdp invalide mon reuf</p>
    </div>

    <!--<p>Bonjour, {{user.displayName}}</p>-->
  </div>
</template>
 
<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
      success: false,
      error: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    submit(event) {
      event.preventDefault();

      axios
        .post(
          "https://agemovue.sebastienjourdain.com/wp-json/jwt-auth/v1/token",
          {
            username: this.form.username,
            password: this.form.password,
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            this.success = true;

            this.$store.commit("setUser", {
              username: response.data.data.displayName,
              email: response.data.data.email,
              authToken: response.data.data.token,
            });
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
  .zoneConnexion {
    margin: auto;
    width: 50%;
    position: relative;
    top: 0;
    left: 0;
  }

  .formulaire {
    margin: 4vh 0;
  }

  .btn-connexion {
    position: relative;
    top: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    text-decoration: none;
    display: inline-block;
    background-color: $colorText;
    width: 250px;
    margin: 2vh;
    border-radius: 15px;
  }

  .formulaire__input {
    width: 65%;
    border: 1px solid $colorAction;
    border-radius: 10px;
    margin-top: 1.4vh;
    padding: 2%;
  }

  .zoneConnexion__lien {
    margin: 4vh 0;
  }

  .lien-connexion {
    color: $bleuVert;
    transition-duration: 300ms;
    text-decoration: none;
  }

  .lien-connexion:hover {
    color: $colorActionSecond;
    transition-duration: 300ms;
  }

  .phrase-compte {
    margin-bottom: 2vh;
  }

  .lien-compte {
    margin-left: 5px;
  }

  //input avec erreur
  .-error {
    border: 3px solid red;
    outline: none;
  }

  //input validé
  .-valid {
    border: 3px solid green;
    outline: none;
  }
  form {
    text-align: left;
    width: 980px;
    margin: auto;

    div {
      label {
        width: 200px;
      }

      input {
        width: 100%;
      }
    }
  }

  .titlePage__container {
    margin-left: 25% !important;
  }
}

@media screen and (max-width: 960px) {

    form {
        width: 90%;
        margin-left: 5%;
    }

  .btn-connexion {
    position: relative;
    height: 40px;
    line-height: 40px;
    text-decoration: none;
    display: inline-block;
    background-color: $colorText;
    border-radius: 15px;
  }

  .formulaire__input {
    width: 100%;
    border: 1px solid $colorAction;
    border-radius: 10px;
    margin-top: 5%;
    margin-bottom: 5%;
    padding: 4%;
  }

  .zoneConnexion__lien {
    margin-left: 5%;
    margin-bottom: 10%;
    margin-top: 10%;
  }

  .lien-connexion {
    color: $bleuVert;
    transition-duration: 300ms;
    text-decoration: none;
  }

  .lien-connexion:hover {
    color: $colorActionSecond;
    transition-duration: 300ms;
  }

  .phrase-compte {
    margin-bottom: 2vh;
    margin-left: 5%;
  }

  .lien-compte {
    margin-left: 5px;
  }

  //input avec erreur
  .-error {
    border: 3px solid red;
    outline: none;
  }

  //input validé
  .-valid {
    border: 3px solid green;
    outline: none;
  }

}
</style>