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
                                                    <form @submit.prevent="editGame" enctype="application/x-www-form-urlencoded">
                                                    <div class="col">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="title"><strong>Game Title</strong></label>
                                                                    <input type="text" id="title" class="form-control" v-model="gameDetail.gameTitle">
                                                                </div>
                                                            </div>

                                                            <div class="col">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="genre"><strong>Genre</strong></label>
                                                                    <input type="text" id="genre" class="form-control" v-model="editGenre" disabled>
                                                                    <!-- <multiselect v-model="gameDetail.gameGenre" tag-placeholder="Add this as new genre" placeholder="Search or add a genre" label="name" track-by="name" :options="gameGenres" :multiple="true" :taggable="true" openDirection="bottom" :max="3" @tag="addGenre"></multiselect> -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="price"><strong>Normal Price</strong></label>
                                                                    <input type="number" id="price" class="form-control" v-model="gameDetail.gamePrice"  min="0">
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="discount"><strong>Discount (%)</strong></label>
                                                                    <input type="number" id="discount" class="form-control" v-model="gameDetail.gameDiscount" min="0">
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="duration"><strong>Duration</strong> (Minutes)</label>
                                                                    <input type="number" id="duration" class="form-control" v-model="gameDetail.gameDuration"  min="1">
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="duration"><strong>Rating</strong></label>
                                                                    <!-- <input type="number" id="duration" class="form-control" v-model="gameDetail.gameRating"  min="0" max="5"> -->
                                                                </div>
                                                                <b-form-rating id="rating-inline" class="form-control" inline variant="warning" :value="gameDetail.gameRating" v-model="gameDetail.gameRating"></b-form-rating>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="difficulty"><strong>Difficulty</strong></label>
                                                                    <select id="difficulty" class="form-control"  v-model="gameDetail.gameDifficulty" min="1">
                                                                        <option v-for="(diff, index) in difficulties" :key="index" :value="diff[index+1]" selected>{{diff}}</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="capasity"><strong>Capacity</strong></label>
                                                                    <input type="number" id="capasity" class="form-control" v-model="gameDetail.gameCapacity"  min="1">
                                                                </div>
                                                            </div>
                                                            

                                                            <div class="col-6">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="url"><strong>URL</strong> (tranceformasiindonesia.com/<b><span v-if="gameDetail.gameUrl">{{gameDetail.gameUrl}}</span> <span v-else>yourURL</span></b> )</label>
                                                                    <input type="text" id="url" class="form-control" v-model="gameDetail.gameUrl" disabled>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="description"><strong>Description</strong></label>
                                                                    <textarea name="description" id="description" class="form-control" cols="30" rows="10" v-model="gameDetail.gameDescription" ></textarea>
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
                                                                        <img :src="gameDetail.gameImage" alt="Cover" height="100px" style="margin:10px">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="input-container" style="flex-grow: 1;">
                                                                    <label for="poster"><strong>Poster</strong></label>
                                                                    <input type="file" id="poster" ref="poster" accept="image/*" name="poster" class="form-control" @change="onPosterChange">
                                                                    <div class="preview">
                                                                        <img :src="gameDetail.posterImage" alt="Poster" height="100px" style="margin:10px">
                                                                        <!-- <img v-else :src="posterImage" alt="Poster" height="100px" style="margin:10px"> -->
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col-md">
                                                                <button class="btn btn-primary" type="submit">
                                                                    <span v-if="loading" class="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>                        
                                                                    <span v-else>Update!</span>
                                                                </button>
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
            gameId: this.$route.params.gameId,
            // genre: [],
            genre: ['Adventure', 'Puzzle'],
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

            difficulties: [
                'Eazy',
                'Normal',
                'Hard',
                'Very Hard',
            ],
            gameDetail: '',
            posterUrl: '',
            imageUrl: '',

            editGenre: '',
            loading: false
        }
    },
    methods: {
        getGame() {
            this.axios.get('game/detail/'+this.gameId).then(response => { 
                this.gameDetail = response.data.data
                this.editGenre = this.gameDetail.gameGenre.join(', ')
            })
        },

        onCoverChange() {
            const reader = new FileReader()
            reader.onload = (e) => {
              this.gameDetail.gameImage = e.target.result
            }
            const cover = this.$refs.image.files[0]
            reader.readAsDataURL(cover)
        },
        onPosterChange() {
            const reader = new FileReader()
            reader.onload = (e) => {
              this.gameDetail.posterImage = e.target.result
            }
            const poster = this.$refs.poster.files[0]
            reader.readAsDataURL(poster)
            console.log(this.gameDetail.posterImage);
        },

        editGame(){
            this.loading = true
            if (this.gameDetail.gameDiscount < 0 || !this.gameDetail.gameDiscount) {
                this.gameDetail.gameDiscount = 0
            }
            let headers = {
                "headers": {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': '*'
                },
            }

            const addGameData = {
                title: this.gameDetail.gameTitle,
                poster: this.gameDetail.posterImage,
                image: this.gameDetail.gameImage,
                genre: this.gameDetail.gameGenre,
                price: this.gameDetail.gamePrice,
                discount: this.gameDetail.gameDiscount,
                description: this.gameDetail.gameDescription,  
                difficulty: this.gameDetail.gameDifficulty,
                capacity: this.gameDetail.gameCapacity,
                duration: this.gameDetail.gameDuration,
                rating: this.gameDetail.gameRating,
                url: this.gameDetail.gameUrl,
                ready: this.gameDetail.gameReady,
            }

            this.axios.put('game/update/'+this.gameId, 
            addGameData
            ).then( response => {
                this.loading = false
                this.$router.push('/games'), 
                console.log('Berhasil Edit Data Game')
                console.log(response)
            }).catch((error) => {
                this.loading = false
                console.log( error.response )
            })
        },
        addGenre() {
            console.log('Add Genre');
        }
    },
    mounted() {
        this.getGame()

        // for (let i = 0; i < gameDetail.gameGenre.length; i++) {
        //     const element = array[i];
        //     this.gameDetail.gameGenre
        // }

        // multiselect
        $('.selectpicker').selectpicker({
            noneSelectedText: 'Pilih Genre'
        });
    },
}
</script>

<style>
</style>