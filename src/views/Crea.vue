<template>
    <div>
        <input type="text" v-model="shoeName">
        <button @click="submitShoe">Send</button>
    </div>
</template>
 
<script>
import axios from "axios";
 
export default {
    data() {
        return {
            shoeName: ''
        }
    },
    methods: {
        submitShoe() {
 
            axios.post('https://lpwdapi.local/wp-json/wp/v2/shoes',
                {
                    "status": "publish",
                    "title": this.shoeName
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.$store.state.user.authToken}`
                    }
                }).then(response => {
 
                if (response.status === 200) {
                    // FAITES CE QUI FAUT
                }
            })
        }
    }
}
</script>