<template>
    <div>
        <form @submit="submit">
            <div>
                <label for="username">Nom utilisateur</label>
                <input id="username" type="text" v-model="form.username">
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email">
            </div>
            <div>
                <label for="password">Mot de passe</label>
                <input type="password" id="password" v-model="form.password">
            </div>
 
            <input type="submit" value="submit">
        </form>
 
        <div v-if="success">
            <p style="color: green;">Votre inscription est réussi !</p>
        </div>
 
        <div v-if="error">
            <p style="color: red;">{{ errorMessage }}</p>
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