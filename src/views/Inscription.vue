<template>
    <div class="inscription">
        <div class="titlePage__container">
            <p class="titlePage">Inscription</p>
        </div>

        <div class="zoneInscription">
            <p>*Les champs marqués d’une étoile sont obligatoires</p>

            <div class="formulaire">
                <label class="formulaire__label || pseudo__label" for="pseudo">Pseudo *</label> <br>
                <input class="formulaire__input || pseudo__input" type="text" required name="pseudo" id="pseudo" placeholder="monPseudo">
            </div>

            <div class="formulaire">
                <label class="formulaire__label || email__label" for="email">Email *</label> <br>
                <input class="formulaire__input || email__input" type="text" required name="email" id="email" placeholder="nom@mail.fr">
            </div>

            <div class="formulaire">
                <label class="formulaire__label || date__label" for="date">Date de naissance (JJ / MM / AAAA) *</label> <br>
                <input class="formulaire__input || date__input" type="date" required name="date" id="date" placeholder="XX / XX / XXXX">
            </div>

            <div class="espace-bouton">
                <p class="nb-page">1/2</p>
                <div class="btn-suivant">
                    <a class="zoneInscription__lien || primaryBtn" href="">
                    <span>Suivant</span>
                    </a> 
                </div>
                
            </div>

            <div class="zoneOu">
                <span class="trait-ou"></span>
                <p>OU</p>
                <span class="trait-ou"></span>
            </div>
            
            <div class="connexion2">
                <a class= "btn-connexion" href="">
                    <span class="icone-co">
                    <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1547 12.1547C16.1436 10.2694 16.9978 8.84857 18.7227 7.8009C17.758 6.41874 16.2984 5.65855 14.3744 5.51204C12.5528 5.3683 10.5597 6.57354 9.82991 6.57354C9.05866 6.57354 7.29503 5.5618 5.90734 5.5618C3.04351 5.60603 0 7.84513 0 12.4007C0 13.7469 0.246024 15.1374 0.738072 16.5693C1.39598 18.4546 3.76776 23.0737 6.24182 22.9991C7.53552 22.9687 8.45051 22.0814 10.134 22.0814C11.7677 22.0814 12.6136 22.9991 14.0565 22.9991C16.5527 22.9632 18.6978 18.7642 19.3226 16.8734C15.975 15.295 16.1547 12.2514 16.1547 12.1547ZM13.2494 3.72353C14.6509 2.05941 14.5237 0.54457 14.4823 0C13.2438 0.0718722 11.8119 0.843116 10.9964 1.79128C10.098 2.80854 9.57006 4.06631 9.6834 5.4844C11.0213 5.58668 12.2432 4.89837 13.2494 3.72353Z" fill="#FAF8FF"/>
                    </svg>
                    </span>
                    <span class="text-co">Continuer avec Apple</span>
                </a>
                <a class= "btn-connexion" href="">
                    <span class="icone-co">
                    <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.86041 23V12.2077H0V8.322H2.86041V5.00307C2.86041 2.39504 4.55007 0 8.44339 0C10.0197 0 11.1854 0.150765 11.1854 0.150765L11.0935 3.77938C11.0935 3.77938 9.90476 3.76784 8.60754 3.76784C7.20354 3.76784 6.9786 4.41333 6.9786 5.48469V8.322H11.2051L11.0212 12.2077H6.9786V23H2.86041Z" fill="#FAF8FF"/>
                    </svg>    
                    </span>
                    <span class="text-co">Continuer avec Facebook</span>
                </a>
                <a class= "btn-connexion" href="">
                    <span class="icone-co">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.7072 9.34346C22.8509 10.1133 22.9292 10.9182 22.9292 11.7582C22.9292 18.3283 18.532 23 11.8906 23C10.3803 23.0005 8.88467 22.7033 7.48922 22.1255C6.09377 21.5478 4.82584 20.7007 3.75787 19.6328C2.6899 18.5648 1.84284 17.2969 1.26507 15.9014C0.687307 14.506 0.390165 13.0103 0.390626 11.5C0.390165 9.98967 0.687307 8.49405 1.26507 7.0986C1.84284 5.70314 2.6899 4.43521 3.75787 3.36725C4.82584 2.29928 6.09377 1.45221 7.48922 0.874448C8.88467 0.296682 10.3803 -0.000459956 11.8906 5.34407e-07C14.9958 5.34407e-07 17.5904 1.14252 19.581 2.99766L16.3392 6.23949V6.23131C15.1324 5.08178 13.6009 4.49182 11.8906 4.49182C8.09623 4.49182 5.01212 7.69743 5.01212 11.493C5.01212 15.2874 8.09623 18.5 11.8906 18.5C15.3334 18.5 17.6768 16.5315 18.1581 13.8283H11.8906V9.34346H22.7084H22.7072Z" fill="#FAF8FF"/>
                    </svg>    
                    </span>
                    <span class="text-co">Continuer avec Google</span>
                </a>

                <p class="phrase-compte">Déjà membre ?<a class="lien-compte || lien-connexion" href="./Connexion">Connectez vous ici</a> </p> 

            </div>
            <a class="lien-rgpd || lien-connexion" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees">Règlement général sur la protection des données</a>
        </div>

    </div>
</template>

<script>

export default {

}

</script>

<style lang="scss">
.zoneInscription{
    margin: auto;
    width: 50%;
    position: relative;
    top:0;
    left:0;
}

.connexion2{
    margin-bottom:3vh;
}

.espace-bouton{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 1fr;
    justify-content: center;
}

.nb-page{
    grid-column: 2;
    margin: auto;
}
.btn-suivant{
    grid-column: 3;
    justify-self: end;
}

</style>