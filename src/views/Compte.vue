<template>
    <div class="compte">

        <div class="titlePage__container">
            <p class="titlePage">Mon compte</p>
        </div>

        <diV class="compte__superieur">

            <div class="compteSupCol1"><img src="@/assets/img/compte/iconeCompte.png" alt=""></div>

            <div class="compteSupCol2">
                <h1>{{user.displayName}}</h1>
                <h2>{{user.email}}</h2>
            </div>

            <div class="compteSupCol3">
                <a class="primaryBtnCompte -compte" href="">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.045 7.401C19.423 7.023 19.631 6.521 19.631 5.987C19.631 5.453 19.423 4.951 19.045 4.573L17.459 2.987C17.081 2.609 16.579 2.401 16.045 2.401C15.511 2.401 15.009 2.609 14.632 2.986L4 13.585V18H8.413L19.045 7.401ZM16.045 4.401L17.632 5.986L16.042 7.57L14.456 5.985L16.045 4.401ZM6 16V14.415L13.04 7.397L14.626 8.983L7.587 16H6ZM4 20H20V22H4V20Z" fill="white"/>
                    </svg>
                    <span class="textBtn"> Éditer mon profil </span>
                </a>
                <a v-if="$store.state.user.authToken" @click="$store.commit('removeUser')" class="primaryBtnCompte -deco" href="">
                    <img src="@/assets/Icones/deco.svg" alt="Deconnexion">
                    <span class="textBtn"> Déconnexion </span>
                </a>
            </div>

        </diV>

        <div class="compte__menu">

            <div class="compteMenuCol1">
                <div class="compte__menuLien">
                    <a href="">Mes <strong>informations personelles</strong></a>
                </div>
                <div class="compte__menuLien">
                    <a href="">Mes <strong>commandes</strong></a>
                </div>
                <div class="compte__menuLien">
                    <a href="">Mes <strong>favoris</strong></a>
                </div>
                <div class="compte__menuLien">
                    <a href="">Mes <strong>modèles</strong></a>
                </div>
                <div class="compte__menuLien">
                    <a href="">Mes <strong>modèles partagés</strong></a>
                </div>
            </div>

            <div v-if="shoes.length" class="compteMenuCol2">
                <h2>Chaussures créés</h2>
                <div v-for="shoe in shoes" :key="shoe.id" class="shoe">
                    <p>{{shoe.title.rendered}}</p>
                    <img :src="shoe.acf.image_url" alt="">
                </div>
            </div>

        </div>
        
        
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            shoes: [],
            form: {
                username: null,
                password: null,
            },
            success: false,
            error: false,
            }
    },
    created() {
        axios.get(`https://agemovue.sebastienjourdain.com/wp-json/wp/v2/shoes?author=${this.$store.state.user.id}`)
        .then(response => {
            console.log(response.data)
            this.shoes = response.data
        })
        .catch(error => {
            console.log(error)
        })
    },
    computed: {
        user () {
            return this.$store.state.user
        }
    },
    methods: {
        submit(event) {
            event.preventDefault()
 
            axios.post('https://agemovue.sebastienjourdain.com/wp-json/jwt-auth/v1/token', {
                username: this.form.username,
                password: this.form.password
            }).then(response => {
                console.log(response)
                if (response.status === 200) {
                    this.success = true
                    
                    this.$store.commit('setUser' , {
                        username: response.data.data.displayName,
                        email: response.data.data.email,
                        authToken: response.data.data.token
                    })
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

@media screen and (min-width: 960px) {

    .compte__superieur{
    display: grid;
    grid-template-columns: repeat(3);
    grid-auto-columns: 15% 50% 35%;
    margin-left: 10%;
    border-bottom: $colorAction solid 1px;
    padding-bottom: 3%;
    width: 80%;
    margin-top: 3%;
}

.compteSupCol1{
    grid-column: 1;
        display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.compteSupCol1 img{
    width: 80%;
}

.compteSupCol2{
    grid-column: 2;
        display: flex;
    flex-direction: column;
    justify-content: center;
}

.compteSupCol2 h1{
    font-weight: 600;
}

.compteSupCol2 h2{
    font-weight: 450;
}

.compteSupCol3{
    grid-column: 3;
    padding-top: 13%;
}

.compteSupCol3 a{
    float: right;
}

.compte__menu{
    width: 80%;
    margin-left: 10%;
    display: grid;
    grid-template-columns: repeat(2);
    grid-auto-columns: 20% 65%;
    column-gap: 10%;
}

.compte__menuLien{
    margin-top: 10%;
    border-bottom: $colorAction 1px solid;
    padding-bottom: 2%;
}

.compte__menuLien a{
    text-decoration: none;
    color: $colorAction;
}

.compteMenuCol1{
    grid-column: 1;
}

.compteMenuCol2{
    grid-column: 2;
}
 
}

@media screen and (max-width: 960px) { 

    .compte__superieur{
    display: grid;
    grid-template-columns: repeat(2);
    grid-auto-columns: 40% 60%;
    margin-left: 5%;
    border-bottom: $colorAction solid 1px;
    padding-bottom: 3%;
    width: 90%;
    margin-top: 10%;
}

.compteSupCol1{
    grid-column: 1;
}

.compteSupCol1 img{
    width: 80%;
}

.compteSupCol2{
    grid-column: 2;
    padding-top: 8%;
}

.compteSupCol2 h1{
    font-weight: 600;
}

.compteSupCol2 h2{
    font-weight: 450;
}

.compte__menu{
    width: 90%;
    margin-left: 5%;
    margin-bottom: 25%;
}

.compte__menuLien{
    margin-top: 10%;
    border-bottom: $colorAction 1px solid;
    padding-bottom: 2%;
    width: fit-content;
}

.compte__menuLien a{
    text-decoration: none;
    color: $colorAction;
}

.primaryBtnCompte{
    margin-right: 5%!important;
    width: 140%!important;
    padding-left: 5%;
    height: 5vh!important;
    margin-top: 5%!important;
}

}





</style>