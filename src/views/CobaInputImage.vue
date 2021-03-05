<template>
    <div>
        <input type="file" @change="handleImage" class="custom-input" accept="image/*">
        <img :src="imageUrl" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageUrl: '',
        }
    }, 
    methods: {
        handleImage(e) {
            const selectedImage = e.target.files[0]
            this.createBase64Image(selectedImage)
        },
        createBase64Image(fileObject) {
            const reader = new FileReader()

            reader.onload = (e) => {
                this.imageUrl = e.target.result
            }
            console.log('imageUrl ' + this.imageUrl);
            const filenya = reader.readAsDataURL(fileObject);
            console.log('filenya ' +filenya);
        }
    }
}
</script>

<style>

</style>