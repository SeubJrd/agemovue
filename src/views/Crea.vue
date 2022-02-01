<template>
    <div>


        <div class="canvas">
            <img style="display: block" src="@/assets/img/galerie/IMGCOMU.jpg" alt="">
        </div>

        


        <button @click="saveShoeHandler">Send</button>

        <p v-if="shoeCreated">réussit</p>

        
    </div>
</template>
 
<script>
import axios from "axios";
import domtoimage from "dom-to-image-more"
 
export default {
    data() {
        return {
            shoeName: '',
            shoeCreated: false
        }
    },
    methods: {
        saveShoeHandler() {
            this.getScreenShot(this.sendImageToWPMediaLibrary)
        },
        getScreenShot(callback) {
            domtoimage
                .toBlob(document.querySelector('.canvas'))
                .then ((image) => {
                    callback(image)
                })
        },
        sendImageToWPMediaLibrary(image) {
            axios.post('https://agemovue.sebastienjourdain.com/wp-json/wp/v2/media', image,
            {
                headers: {
                    'Content-Disposition': `attachement; filename="${this.$store.state.user.displayName}.jpg`,
                    'Authorization': `Bearer ${this.$store.state.user.authToken}`
                }
            })
            .then(response => {
                if (response.data.id) { 
                this.createShoe(response.data.source_url)
                }
            })
        },
        createShoe(imageURL) {

            axios.post('https://agemovue.sebastienjourdain.com/wp-json/wp/v2/shoes',
            {
                "status": "publish",
                "title": this.$store.state.user.displayName,
                'fields': {
                    'image_url': imageURL
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.$store.state.user.authToken}`
                }
            })
            .then(response => {
                console.log('SHOE IS CREATED', response)
                this.shoeCreated = true
            })
        }
    }
}
</script>