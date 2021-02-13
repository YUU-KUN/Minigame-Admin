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
                                                                        <input type="text" id="title" class="form-control" :value="gameEdit.title"  >
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="price"><strong>Normal Price</strong></label>
                                                                        <input type="number" id="price" class="form-control" :value="gameEdit.price"  min="0" required>
                                                                    </div>
                                                                </div>
                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="discount"><strong>Discount Price</strong></label>
                                                                        <input type="number" id="discount" class="form-control" min="0">
                                                                    </div>
                                                                </div>

                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="duration"><strong>Duration</strong> (Minutes)</label>
                                                                        <input type="number" id="duration" class="form-control" :value="gameEdit.duration"  min="1" required>
                                                                    </div>
                                                                </div>

                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="duration"><strong>Rating</strong> (1-5)</label>
                                                                        <input type="number" id="duration" class="form-control" :value="gameEdit.rating"  min="0" max="5" required>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="difficulty"><strong>Difficulty</strong></label>
                                                                        <input type="number" id="difficulty" class="form-control" :value="gameEdit.difficulty"  min="1" required>
                                                                    </div>
                                                                </div>
                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="capasity"><strong>Capacity</strong></label>
                                                                        <input type="number" id="capasity" class="form-control" :value="gameEdit.capacity"  min="1" required>
                                                                    </div>
                                                                </div>

                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="genre"><strong>Genre</strong></label>
                                                                        <select name="genre" id="genre" :value="gameEdit.genre"  class="form-control">
                                                                            <option v-for="(genre, index ) in gameEdit.genre" :key="index" :value="genre">{{genre}}</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="description"><strong>Description</strong></label>
                                                                        <textarea name="description" id="description" class="form-control" cols="30" rows="10" :value="gameEdit.description" ></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;">
                                                                        <label for="cover"><strong>Cover</strong></label>
                                                                        <input type="file" id="cover" class="form-control" @change="onCoverChange">
                                                                    </div>
                                                                </div>
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;">
                                                                        <label for="poster"><strong>Poster</strong></label>
                                                                        <input type="file" id="poster" accept="image/*" class="form-control" @change="onPosterChange">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col-md">
                                                                    <button class="btn btn-primary" type="submit">Create!</button>
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
            <div class="card bg-light">
                <div class="card-header"> <h3>Edit Game</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{gameEdit}}</pre>
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
import axios from 'axios'
export default {
    data(){
        return {
            gameEdit: '',

            title: '',
            price: '',
            duration: '',
            description: '',
            poster: '',
            image: '',
            genre: {},
            difficulty: '',
            capacity: '',
            rating: '',
            url: ''
        }
    },
    methods: {
        onCoverChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
            return;
            this.createCover(files[0]);
            this.createPoster(files[0]);
        },
        createCover(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        onPosterChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
            return;
            this.createCover(files[0]);
            this.createPoster(files[0]);
        },
        createPoster(file) {
            var poster = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.poster = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        editGame(){
            let headers = {
                "headers": {
                    "content-type": "application/json",
                },
            }
            axios.put('game/update/'+this.gameEdit.gameId, headers).then(
                this.$router.push('/games'),
                console.log('Berhasil Edit Data Game')
            )
        }
    },
    mounted() {
        this.gameEdit = this.$route.params.gameEdit
        console.log(this.gameEdit.gameId)   
    },
}
</script>

<style>
</style>