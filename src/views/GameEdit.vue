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
                                                                    <input type="text" id="title" class="form-control" v-model="gameDetail.title"  >
                                                                </div>
                                                            </div>

                                                            <div class="col">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="genre"><strong>Genre</strong></label>
                                                                    <!-- <input type="text" id="genre" class="form-control" v-model="gameEdit.genre"> -->
                                                                    <!-- <select id="genre" class="form-control selectpicker" required multiple v-model="genre">
                                                                        <option v-for="(genre, index) in genre" :key="index" :value="genre">{{genre}}</option>
                                                                    </select> -->
                                                                    <!-- <select id="genre" class="form-control selectpicker" required multiple v-model="genre">
                                                                        <option v-for="(genre, index) in gameDetail.genre" :key="index" value="">{{genre}}</option>
                                                                    </select> -->
                                                                    <multiselect v-model="gameDetail.genre" tag-placeholder="Add this as new genre" placeholder="Search or add a genre" label="name" track-by="name" :options="gameGenres" :multiple="true" :taggable="true" openDirection="bottom" :max="3" @tag="addGenre"></multiselect>
                                                                    <pre>{{gameDetail.genre}}</pre>
                                                                    <!-- <select name="genre" id="genre" v-model="genre"  class="form-control">
                                                                        <option v-for="(genre, index) in gameDetail.genre[0]" :key="index">{{genre}}</option>
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
                                                                    <input type="number" id="price" class="form-control" v-model="gameDetail.price"  min="0">
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="discount"><strong>Discount (%)</strong></label>
                                                                    <input type="number" id="discount" class="form-control" v-model="gameDetail.discount" min="0">
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="duration"><strong>Duration</strong> (Minutes)</label>
                                                                    <input type="number" id="duration" class="form-control" v-model="gameDetail.duration"  min="1">
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="duration"><strong>Rating</strong> (1-5)
                                                                        <span v-if="gameDetail.rating"><b-icon v-for="value in parseInt(gameDetail.rating)" :key="value" icon="star-fill" class="h7" style="color: orange" aria-hidden="true"></b-icon></span> 
                                                                    </label>
                                                                    <input type="number" id="duration" class="form-control" v-model="gameDetail.rating"  min="0" max="5">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="difficulty"><strong>Difficulty</strong></label>
                                                                    <input type="number" id="difficulty" class="form-control" v-model="gameDetail.difficulty"  min="1">
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="capasity"><strong>Capacity</strong></label>
                                                                    <input type="number" id="capasity" class="form-control" v-model="gameDetail.capacity"  min="1">
                                                                </div>
                                                            </div>
                                                            

                                                            <div class="col-6">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="url"><strong>URL</strong> (tranceformasiindonesia.com/<b><span v-if="gameDetail.url">{{gameDetail.url}}</span> <span v-else>yourURL</span></b> )</label>
                                                                    <input type="text" id="url" class="form-control" v-model="gameDetail.url" disabled>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="description"><strong>Description</strong></label>
                                                                    <textarea name="description" id="description" class="form-control" cols="30" rows="10" v-model="gameDetail.description" ></textarea>
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
                                                                        <img v-if="!newImage" :src="gameDetail.imageUrl" alt="Covernya" height="100px" style="margin:10px">
                                                                        <img v-else :src="imageUrl" alt="Covernya" height="100px" style="margin:10px">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="input-container" style="flex-grow: 1;">
                                                                    <label for="poster"><strong>Poster</strong></label>
                                                                    <input type="file" id="poster" ref="poster" accept="image/*" name="poster" class="form-control" @change="onPosterChange">
                                                                    <div class="preview">
                                                                        <img v-if="!newPoster" :src="gameDetail.posterUrl" alt="Posternya" height="100px" style="margin:10px">
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
                <div class="card-header"> <h3>Game ID</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{gameEdit.gameId}}</pre>
                      </div>
                    </div>
                </div>
              </div> -->

            <!-- <div class="card bg-light">
                <div class="card-header"> <h3>Detail Game</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{gameDetail}}</pre>
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
            genre: [],
            // gameGenres: [
            //     {name: 'Adventure'},
            //     {name: 'Action'},
            //     {name: 'Puzzle'},
            //     // "Adventure",
            //     // "Action",
            //     // "Puzzle",
            // ],
            gameGenres: [
                {name: 'Adventure'},
                {name: 'Action'},
                {name: 'Puzzle'},
                // "Adventure",
                // "Action",
                // "Puzzle",
            ],
            gameDetail: [],
            gameEdit: '',
            newPoster: false,
            newImage: false,
            posterUrl: '',
            imageUrl: '',
        }
    },
    methods: {
        getGame() {
            this.axios.get('game/detail/'+this.gameEdit.gameId).then(response => { 
            // this.axios.get('game/detail/'+this.$route.params.gameId).then(response => { 
                this.gameDetail = response.data.data
            })
        },

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
            if (!this.gameEdit.discount) {
                this.gameEdit.discount = 0
            }
            // this.gameEdit.poster = this.gameEdit.posterUrl
            // this.gameEdit.image = this.gameEdit.posterUrl
            // console.log(this.gameEdit.poster);
            // console.log(this.gameEdit.image)
            console.log('clicked');
            // console.log('title', this.gameEdit.title)
            // console.log('poster', this.gameEdit.poster)
            // console.log('genre', this.gameEdit.genre)
            // console.log('price', this.gameEdit.price)
            // console.log('discount', this.gameEdit.discount)
            // console.log('description', this.gameEdit.description)
            // console.log('difficulty', this.gameEdit.difficulty)
            // console.log('rating', this.gameEdit.rating)
            // console.log('capacity', this.gameEdit.capacity)
            // console.log('duration', this.gameEdit.duration)
            // console.log('url', this.gameEdit.url)

            const formData = new FormData()
            formData.append('title', this.gameEdit.title)
            if (this.gameEdit.image) {
                formData.append('image', this.gameEdit.image)
            }
            if (this.gameEdit.poster) {
                formData.append('poster', this.gameEdit.poster)
            }
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
                    'Access-Control-Allow-Origin': '*'
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
        addGenre() {
            console.log('Add Genre');
        }
    },
    mounted() {
        this.gameEdit = this.$route.params.gameEdit
        console.log(this.gameEdit.gameId)  
        this.getGame()

        this.gameDetail.genre = this.genre

        // multiselect
        $('.selectpicker').selectpicker({
            noneSelectedText: 'Pilih Genre'
        });
    },
}
</script>

<style>
</style>