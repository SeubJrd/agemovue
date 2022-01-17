<template>
    <div>
        <form @submit="submit">
            <div>
                <label for="username">Nom utilisateur</label>
                <input id="username" type="text" v-model="form.username">
            </div>
            <div>
                <label for="password">Mot de passe</label>
                <input type="password" id="password" v-model="form.password">
            </div>
 
            <input type="submit" value="submit">
        </form>
 
        <div v-if="success">
            <p style="color: green;">Connexsion réussie</p>
        </div>
 
        <div v-if="error">
            <p style="color: red;">Nom ou mdp invalide mon reuf</p>
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
                password: null,
            },
            success: false,
            error: false,
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
form {
    text-align: left;
    width: 980px;
    margin: auto;
 
    div {
        display: flex;
        margin-bottom: 15px;
 
        label {
            width: 200px;
        }
 
        input {
            width: 100%;
        }
    }
}
</style>