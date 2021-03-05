<template>
<div class="container-fluid" style="margin-top:100px">
    <div class="row">
        <div class="col-md-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Game Detail</h6>
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
                                                    <div class="col">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="title"><strong>Title</strong></label>
                                                                    <input type="text" id="title" class="form-control" v-model="gameDetail.gameTitle"   disabled>
                                                                </div>
                                                            </div>

                                                            <div class="col">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="genre"><strong>Genre</strong></label>
                                                                    <input type="text" id="genre" class="form-control" v-model="gameGenre" disabled>
                                                                    <!-- <span v-if="game.gameGenre.length == 1">{{game.gameGenre.join(', ').split(',').join(', ')}}</span> 
                                                <span v-else>{{game.gameGenre.join(', ')}}</span> -->
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
                                                                    <input type="number" id="price" class="form-control" v-model="gameDetail.gamePrice"  min="0" disabled>
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="discount"><strong>Discount (%)</strong></label>
                                                                    <input type="number" id="discount" class="form-control" v-model="gameDetail.gameDiscount" min="0" disabled>
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="duration"><strong>Duration</strong> (Minutes)</label>
                                                                    <input type="number" id="duration" class="form-control" v-model="gameDetail.gameDuration"  min="1" disabled>
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="duration"><strong>Rating</strong> (1-5)
                                                                        <span v-if="gameDetail.gameRating"><b-icon v-for="value in parseInt(gameDetail.gameRating)" :key="value" icon="star-fill" class="h7" style="color: orange" aria-hidden="true"></b-icon></span> 
                                                                    </label>
                                                                    <input type="number" id="duration" class="form-control" v-model="gameDetail.gameRating"  min="0" max="5" disabled>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="difficulty"><strong>Difficulty</strong></label>
                                                                    <input type="number" id="difficulty" class="form-control" v-model="gameDetail.gameDifficulty"  min="1" disabled>
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="input-container" style="flex-grow: 1;  ">
                                                                    <label for="capasity"><strong>Capacity</strong></label>
                                                                    <input type="number" id="capasity" class="form-control" v-model="gameDetail.gameCapacity"  min="1" disabled>
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
                                                                    <textarea name="description" id="description" class="form-control" cols="30" rows="10" v-model="gameDetail.gameDescription" disabled></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- <div class="col-md-12">
                                                        <div class="form-group" >
                                                            <div class="col-6">
                                                                <div class="input-container" style="flex-grow: 1;">
                                                                    <label for="cover"><strong>Cover</strong></label>
                                                                    <div class="row">
                                                                        <div class="col">
                                                                            <img :src="gameDetail.imageUrl" alt="Game Image" id="cover" width="100%">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="input-container" style="flex-grow: 1;">
                                                                    <label for="poster"><strong>Poster</strong></label>
                                                                    <div class="row">
                                                                        <div class="col">
                                                                            <img :src="gameDetail.posterUrl" alt="Game Poster" id="poster" width="100%">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> -->

                                                    <div class="col-md-12">
                                                        <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                            <div class="col-6">
                                                                <div class="input-container" style="flex-grow: 1;">
                                                                    <label for="cover"><strong>Cover</strong></label>
                                                                    <!-- <div class="preview"> -->
                                                                        <img v-if="gameDetail.gameImage" :src="gameDetail.gameImage" class="img-thumbnail" alt="Covernya" width="100%" style="margin:10px">
                                                                        <!-- <img v-else :src="gameEdit.imageUrl" alt="Covernya" height="100px" style="margin:10px"> -->
                                                                    <!-- </div> -->
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="input-container" style="flex-grow: 1;">
                                                                    <label for="poster"><strong>Poster</strong></label>
                                                                    <!-- <div class="preview"> -->
                                                                        <!-- <img v-if="!newPoster" :src="gameEdit.posterUrl" alt="Posternya" height="100px" style="margin:10px"> -->
                                                                        <img v-if="gameDetail.posterImage" :src="gameDetail.posterImage" class="img-thumbnail" alt="Posternya" width="100%" style="margin:10px">
                                                                        <!-- <img v-else :src="posterUrl" alt="Posternya" height="100px" style="margin:10px"> -->
                                                                    <!-- </div> -->
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
                        </div>
                    </div>
                </div> 
            </div>


            <!-- ONLY FOR DEVELOPING -->
            <div class="card bg-light">
                <div class="card-header"> <h3>Detail Game</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{gameDetail}}</pre>
                      </div>
                    </div>
                </div>
              </div>
              <!-- ONLY FOR DEVELOPING -->

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            gameId: this.$route.params.gameId,
            gameDetail: '',
            gameGenre: '',
        }
    },
    methods: {
        getDetailGame() {
            this.axios.get('game/detail/'+this.gameId).then(response => {
                this.gameDetail = response.data.data
                this.gameGenre = this.gameDetail.gameGenre.join(', ')
            })
        }
    },
    mounted() {
        this.getDetailGame() 
        // this.gameDetail = this.$route.params.gameDetail
    }
}
</script>

<style>
</style>