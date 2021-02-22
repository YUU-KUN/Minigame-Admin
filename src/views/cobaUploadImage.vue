<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="image" v-on:change="handleFileUpload()"/>
        <input type="file" id="poster" ref="poster" v-on:change="handleFileUpload()"/>
      </label>
        <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            file: '',
            title: 'Petualangan Di Bawah Laut',
                poster: '',
                image: '',
                genre: 'Adventure',
                price: 200000,
                description: 'halogan',
                difficulty: 2,
                capacity: 3,
                duration: 13,
                url: 'PetualanganDiBawahLaut',
        }
    },
    methods: {
        handleFileUpload() {
            this.image = this.$refs.image.files[0]
            this.poster = this.$refs.poster.files[0]
        },
        submitFile() {
            let formData = new FormData()
            formData.append('image', this.image)
            formData.append('poster', this.poster)
            formData.append('title', this.title)
            formData.append('genre', this.genre)
            formData.append('price', this.price)
            formData.append('description', this.description)
            formData.append('difficulty', this.difficulty)
            formData.append('capacity', this.capacity)
            formData.append('duration', this.duration)
            formData.append('url', this.url)

            axios.post('/game/create', formData,
            { 
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            }
            ).then(response => {
                console.log('response: ' + response);
                console.log('SUCCESS');
            }).catch(error => {
                console.log(error.response);
                console.log('ERROR GAN');
            })
        }
    }
}
</script>

<style>

</style>