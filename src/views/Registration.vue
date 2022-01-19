<template>
    <div class="inscription">
        <div class="titlePage__container">
            <p class="titlePage">Inscription</p>
        </div>

        <div class="zoneInscription">
            <p>*Les champs marqués d’une étoile sont obligatoires</p>

            <form>
                <div class="formulaire">
                    <label class="formulaire__label || pseudo__label" for="username">Pseudo *</label> <br>
                    <input class="formulaire__input || pseudo__input" id="username" type="text" placeholder="monPseudo" v-model="form.username">
                </div>
                <div class="formulaire">
                    <label class="formulaire__label || email__label" for="email">Email *</label> <br>
                    <input class="formulaire__input || email__input" type="email" id="email" placeholder="nom@mail.fr" v-model="form.email">
                </div>
                <div class="formulaire">
                    <label class="formulaire__label || mdp__label" for="password">Mot de passe *</label><br>
                    <input class="formulaire__input || mdp__input" type="password" id="password" placeholder="motdepasse" v-model="form.password">
                </div>
    
                <div>
                    <a class="zoneConnexion__lien || primaryBtn -fleche" @click = "submit">
                    <span>Inscription</span>
                    <span class="icon-container"><svg class="fleche" x="0px" y="0px" viewBox="0 0 42 16.1">
                            <path class="fleche__line" fill-rule="evenodd" clip-rule="evenodd" fill="#170D42"
                                d="M24.4,7.1H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h19.4" />
                            <path class="fleche__pointe" fill-rule="evenodd" clip-rule="evenodd" fill="#170D42"
                                d="M24.4,9.1l-5.9,5.3c-0.4,0.4-0.4,1-0.1,1.4s1,0.4,1.4,0.1l7.8-7
                    c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.6-0.3-0.7l-7.8-7.2c-0.4-0.4-1-0.3-1.4,0.1s-0.3,1,0.1,1.4l5.9,5.3" />
                        </svg></span>
                    </a> 
                </div>
            </form>
    
            <div v-if="success">
                <p style="color: green;">Votre inscription est réussi !</p>
            </div>
    
            <div v-if="error">
                <p style="color: red;">{{ errorMessage }}</p>
            </div>
        </div>
    </div>
</template>
 
<script>
import axios from "axios"
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
            errorMessage: null
        }
    },
    methods: {
        submit(event) {
            event.preventDefault()
 
            axios.post('https://agemovue.sebastienjourdain.com/wp-json/wp/v2/users/register', {
                username: this.form.username,
                email: this.form.email,
                password: this.form.password
            }).then(response => {
                if (response.status === 200) {
                    this.success = true
                    this.error = false
                }
            }).catch(error => {
                console.log('Error LOG : ', error.response)
                this.errorMessage = error.response.data.message
                this.error = true
                this.success = false
            })
        }
 
 
    }
}
</script>
 
<style lang="scss">

</style>