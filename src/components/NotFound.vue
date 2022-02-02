<template>
  <div class="NotFound">
    <h1>404 Oups ...</h1>
    <p>La page que tu cherches n'existe pas : (</p>
    <router-link class="primaryBtn -fleche" to="/Collaborations">
          <span>Retourner à l'accueil</span>
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
</template>

<script>
export default {
  name: "NotFound",
};
</script>


<style lang="scss">

@media screen and (min-width: 960px) {

  .NotFound {
    width: 50%;
    margin: 5% 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
    padding-bottom: 10%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("../assets/Icones/deco-titre.svg");
    & h1 {
      font-size: 75px;
      font-weight: 800;
      color: $colorTitle;
      text-shadow: 3px 3px $colorActionSecond, 6px 6px $bleuFluo;
      margin-bottom: 1%;
    }
    & p{
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 2%;
    }
  }
}

@media screen and (max-width: 960px) {

    .NotFound {
    width: 100%;
    margin-top: 50%;
    margin-bottom: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5% 10%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("../assets/Icones/deco-titre.svg");
    & h1 {
      font-size: 50px;
      font-weight: 800;
      color: $colorTitle;
      text-shadow: 3px 3px $colorActionSecond, 6px 6px $bleuFluo;
      margin-bottom: 5%;
    }
    & p{
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 4%;
        text-align: center;
    }
  }


}
</style>