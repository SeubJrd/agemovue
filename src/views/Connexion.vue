<template>
    <div class="connexion">

        <div class="zoneConnexion">

            <div class="zoneConnexion__titre || titlePage">
                <h1 class="titlePage__1">Connexion</h1>
                <p class="titlePage__2">Connexion</p>
                <p class="titlePage__3">Connexion</p>
            </div>

            <div class="formulaire">
                <label class="formulaire__label" for="email">Email / Pseudo</label> <br>
                <input class="formulaire__input" type="text" required name="email" id="email" placeholder="monPseudo">
            </div>

            <div class="formulaire">
                <label class="formulaire__label" for="mdp">Mot de passe</label> <br>
                <input class="formulaire__input" type="password" required name="mdp" id="mdp" placeholder="motdepasse">
            </div>

            <a class="zoneConnexion__lien" href="">Mot de passe oublié ?</a>

            <div>
               <a class="zoneConnexion__lien || primaryBtn -fleche" href="">Connexion
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
            

        </div>

        
        
    </div>
</template>

<script>

export default {

}

</script>

<style lang="scss">

.zoneConnexion{
    margin: auto;
    width: 50%;
    position: relative;
    top:0;
    left:0;
}

.formulaire{
    margin:2%;
}
 
input{
    width: 762px;
    height: 58px;
    border: 1px solid $colorAction;
    border-radius: 10px;
    margin-top: 10px;
}
 
//input avec erreur
.-error{
    border: 3px solid red;
    outline: none;
}
 
//input validé
.-valid{
    border: 3px solid green;
    outline: none;
}



</style>