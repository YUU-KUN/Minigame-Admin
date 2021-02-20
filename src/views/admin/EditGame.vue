<template>
<div class="container-fluid" style="margin-top:100px">
    <div class="row">
        <div class="col-md-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Edit Game</h6>
                </div>
                <div class="card-body">
                    <div class="row gx-5">
                        <div class="col-md-12 mt-3">
                            <div class="form">
                                <div class="form-group">
                                      <div class="row">
                                        <div class="col-md-12">
                                            <div class="panel panel-default">
                                                <div class="panel-body">
                                                    <form @submit.prevent="editGame">
                                                    <div class="col">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="title"><strong>Game</strong></label>
                                                                    <input type="text" id="title" class="form-control" v-model="gameEdit.title"  >
                                                                </div>
                                                            </div>

                                                            <div class="col">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="genre"><strong>Genre</strong></label>
                                                                    <input type="text" id="genre" class="form-control" v-model="gameEdit.genre">
                                                                    <!-- <select name="genre" id="genre" v-model="genre"  class="form-control">
                                                                        <option v-for="(genre, index) in gameEdit.genre[0]" :key="index">{{genre}}</option>
                                                                    </select> -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="price"><strong>Normal Price</strong></label>
                                                                    <input type="number" id="price" class="form-control" v-model="gameEdit.price"  min="0">
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="discount"><strong>Discount (%)</strong></label>
                                                                    <input type="number" id="discount" class="form-control" v-model="gameEdit.discount" min="0">
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="duration"><strong>Duration</strong> (Minutes)</label>
                                                                    <input type="number" id="duration" class="form-control" v-model="gameEdit.duration"  min="1">
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="duration"><strong>Rating</strong> (1-5)
                                                                        <span v-if="gameEdit.rating"><b-icon v-for="value in parseInt(gameEdit.rating)" :key="value" icon="star-fill" class="h7" style="color: orange" aria-hidden="true"></b-icon></span> 
                                                                    </label>
                                                                    <input type="number" id="duration" class="form-control" v-model="gameEdit.rating"  min="0" max="5">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="difficulty"><strong>Difficulty</strong></label>
                                                                    <input type="number" id="difficulty" class="form-control" v-model="gameEdit.difficulty"  min="1">
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="capasity"><strong>Capacity</strong></label>
                                                                    <input type="number" id="capasity" class="form-control" v-model="gameEdit.capacity"  min="1">
                                                                </div>
                                                            </div>
                                                            

                                                            <div class="col-6">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="url"><strong>URL</strong> (tranceformasiindonesia.com/<b><span v-if="gameEdit.url">{{gameEdit.url}}</span> <span v-else>yourURL</span></b> )</label>
                                                                    <input type="text" id="url" class="form-control" v-model="gameEdit.url" disabled>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="description"><strong>Description</strong></label>
                                                                    <textarea name="description" id="description" class="form-control" cols="30" rows="10" v-model="gameEdit.description" ></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col-6">
                                                                <div class="input-container" style="flex-grow: 1;">
                                                                    <label for="cover"><strong>Cover</strong></label>
                                                                    <input type="file" id="cover" name="image" accept="image/*" ref="image" class="form-control" @change="onCoverChange">
                                                                    <div class="preview">
                                                                        <img v-if="!newImage" :src="gameEdit.imageUrl" alt="Covernya" height="100px" style="margin:10px">
                                                                        <img v-else :src="imageUrl" alt="Covernya" height="100px" style="margin:10px">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="input-container" style="flex-grow: 1;">
                                                                    <label for="poster"><strong>Poster</strong></label>
                                                                    <input type="file" id="poster" ref="poster" accept="image/*" name="poster" class="form-control" @change="onPosterChange">
                                                                    <div class="preview">
                                                                        <img v-if="!newPoster" :src="gameEdit.posterUrl" alt="Posternya" height="100px" style="margin:10px">
                                                                        <img v-else :src="posterUrl" alt="Posternya" height="100px" style="margin:10px">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col-md">
                                                                <button class="btn btn-primary" type="submit">Update!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <!-- ONLY FOR DEVELOPING -->
            <!-- <div class="card bg-light">
                <div class="card-header"> <h3>Edit Game</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{gameEdit}}</pre>
                      </div>
                    </div>
                </div>
              </div> -->
              <!-- ONLY FOR DEVELOPING -->

        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            gameEdit: '',
            newPoster: false,
            newImage: false,
            posterUrl: '',
            imageUrl: '',
        }
    },
    methods: {
        // getGame() {
        //     let headers = {
        //         "headers": {
        //             "content-type": "application/json",
        //         },
        //     }
        //     this.axios.get('game/detail/f006f15a-a5a2-4b8c-b326-c9fb6807a55a', headers).then(response => { 
        //     // this.axios.get('game/detail/'+this.$route.params.gameId).then(response => { 
        //         this.gameEdit = response.data.data
        //     })
        // },

        onCoverChange() {
            this.newImage = true
            this.gameEdit.image = this.$refs.image.files[0]
            this.imageUrl = URL.createObjectURL(this.gameEdit.image)
            console.log('urlnya: '+this.imageUrl);
        },
        onPosterChange() {
            this.newPoster = true
            this.gameEdit.poster = this.$refs.poster.files[0]
            this.posterUrl = URL.createObjectURL(this.gameEdit.poster)
            console.log('urlnya: '+this.posterUrl);
        },

        editGame(){
            console.log('clicked');
            const formData = new FormData()
            formData.append('title', this.gameEdit.title)
            formData.append('poster', this.gameEdit.poster)
            formData.append('image', this.gameEdit.image)
            formData.append('genre', this.gameEdit.genre)
            formData.append('price', this.gameEdit.price)
            formData.append('discount', this.gameEdit.discount)
            formData.append('description', this.gameEdit.description)
            formData.append('difficulty', this.gameEdit.difficulty)
            formData.append('rating', this.gameEdit.rating)
            formData.append('capacity', this.gameEdit.capacity)
            formData.append('duration', this.gameEdit.duration)
            formData.append('url', this.gameEdit.url)

            let headers = {
                "headers": {
                    'Content-Type': 'multipart/form-data',
                },
            }
            this.axios.put('game/update/'+this.gameEdit.gameId, 
            formData, headers
            ).then( response => {
                this.$router.push('/games'), 
                console.log('Berhasil Edit Data Game')
                console.log(response)
                }
            ).catch((error) => console.log( error.response ))
        },
    },
    mounted() {
        // this.getGame()
        this.gameEdit = this.$route.params.gameEdit
        console.log(this.gameEdit.gameId)   
    },
}
</script>

<style>
</style>