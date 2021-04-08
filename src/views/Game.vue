<template>
<div class="container-fluid" style="margin-top:100px">
    <div class="row">
        <div class="col-md-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Game</h6>
                </div>
                <div class="card-body">
                    <div v-if="removed" class="alert alert-success alert-dismissible fade show" role="alert">
                        {{info}}
                        <button type="button" @click="removed = false" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-right">
                            <router-link to="addNewGame">
                                <button type="button" class="btn btn-primary">
                                    Add New Game
                                </button>
                            </router-link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mt-3">
                            <div class="table-responsive">
                                <!-- <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Game</th>
                                            <th>Price</th>
                                            <th>Rating</th>
                                            <th>Genre</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(game, index) in gamelist" :key="index">
                                            <td>{{index+1}}</td>
                                            <td>{{game.gameTitle}}</td>
                                            <td>
                                                <span v-if="game.gamePriceAfterDiscount > 0">{{game.gamePriceAfterDiscount | rupiah}}</span>
                                                <span v-else>{{game.gamePrice | rupiah}}</span>
                                            </td>
                                            <td v-if="game.gameRating">
                                                {{game.gameRating}} <span style="font-size:17px;color:orange;">&starf;</span>
                                            </td>
                                            <td v-else>
                                                -
                                            </td>
                                            <td>
                                                <span v-if="game.gameGenre.length == 1">{{game.gameGenre.join(', ').split(',').join(', ')}}</span> 
                                                <span v-else>{{game.gameGenre.join(', ')}}</span>
                                            </td>
                                            <td>
                                                <span v-if="game.gameReady">Active</span>
                                                <span v-else>Disabled</span>
                                            </td>
                                            <td>
                                                <button v-if="!game.gameReady" class="btn btn-outline-success" @click="activate(index)" style="margin: 0 5px">Enable</button>
                                                <button v-else class="btn btn-danger" data-fancybox :data-src="'#disableGame'+index" style="margin: 0 5px">Disable</button>
                                                <button class="btn btn-success" @click="viewGameDetail(index)" style="margin: 0 5px">View</button>
                                                <button class="btn btn-primary" @click="editGame(index)" style="margin: 0 5px">Edit</button>
                                                <button class="btn btn-danger" data-fancybox :data-src="'#'+index" style="margin: 0 5px">Delete</button>
                                            </td>

                                            <div style="display:none" :id="index" class="animated-modal">
                                                <h2>Watch Out!</h2>
                                                <p>Are you sure wanna delete <b>{{game.gameTitle}}</b>?</p>
                                                <div class=" d-flex justify-content-center">
                                                <button type="button" data-fancybox-close class="btn btn-outline-secondary col-5" style="margin: 0 5px">Cancel</button>
                                                <button type="button" @click="removeGame(index)" data-fancybox-close class="btn btn-danger col-5 " style="margin: 0 5px">Delete!</button>
                                                </div>
                                            </div>

                                            <div style="display:none" :id="'disableGame'+index" class="animated-modal">
                                                <h2>Watch Out!</h2>
                                                <p>Are you sure wanna Disable <b>{{game.gameTitle}}</b>?</p>
                                                <div class=" d-flex justify-content-center">
                                                <button type="button" data-fancybox-close class="btn btn-outline-secondary col-5" style="margin: 0 5px">Cancel</button>
                                                <button type="button" @click="disable(index)" data-fancybox-close class="btn btn-danger col-5 " style="margin: 0 5px">Disable!</button>
                                                </div>
                                            </div>

                                        </tr>
                                    </tbody>
                                </table> -->

                                <b-table
                                  id="my-table"
                                  class="table table-bordered"
                                  :items="gamelist"
                                  :per-page="perPage"
                                  :current-page="currentPage"
                                  :fields="fields"
                                >
                                    
                                    <template v-slot:cell(no)="data">
                                        <span>{{data.index+1}}</span>
                                    </template>
                                    <template v-slot:cell(title)="data">
                                        {{data.item.gameTitle }}
                                    </template>
                                    <template v-slot:cell(price)="data">
                                        {{data.item.gamePrice | rupiah }}
                                    </template>
                                    <template v-slot:cell(rating)="data">
                                        {{data.item.gameRating}} <span style="font-size:17px;color:orange;">&starf;</span>
                                    </template>
                                    <template v-slot:cell(genre)="data">
                                        <span v-if="data.item.gameGenre.length == 1">{{data.item.gameGenre.join(', ').split(',').join(', ')}}</span> 
                                        <span v-else>{{data.item.gameGenre.join(', ')}}</span>
                                    </template>
                                    <template v-slot:cell(status)="data">
                                        <span v-if="data.item.gameReady"><b-badge variant="success">Active</b-badge></span>
                                        <span v-else><b-badge variant="warning">Disabled</b-badge></span>
                                    </template>
                                    <template v-slot:cell(action)="data">
                                        <button v-if="!data.item.gameReady" class="btn btn-outline-success" @click="activate(data.index)" style="margin: 0 5px">Enable</button>
                                        <button v-else class="btn btn-danger" data-fancybox :data-src="'#disableGame'+data.index" style="margin: 0 5px">Disable</button>
                                        <button class="btn btn-success" @click="viewGameDetail(data.index)" style="margin: 0 5px">View</button>
                                        <button class="btn btn-primary" @click="editGame(data.index)" style="margin: 0 5px">Edit</button>
                                        <button class="btn btn-danger" data-fancybox :data-src="'#'+data.index" style="margin: 0 5px">Delete</button>

                                        <!-- Delete Confirmation -->
                                        <div style="display:none" :id="data.index" class="animated-modal">
                                            <h2>Watch Out!</h2>
                                            <p>Are you sure wanna delete <b>{{data.item.gameTitle}}</b>?</p>
                                            <div class=" d-flex justify-content-center">
                                            <button type="button" data-fancybox-close class="btn btn-outline-secondary col-5" style="margin: 0 5px">Cancel</button>
                                            <button type="button" @click="removeGame(data.index)" data-fancybox-close class="btn btn-danger col-5 " style="margin: 0 5px">Delete!</button>
                                            </div>
                                        </div>

                                        <!-- Disable Game Confirmation -->
                                        <div style="display:none" :id="'disableGame'+data.index" class="animated-modal">
                                            <h2>Watch Out!</h2>
                                            <p>Are you sure wanna Disable <b>{{data.item.gameTitle}}</b>?</p>
                                            <div class=" d-flex justify-content-center">
                                            <button type="button" data-fancybox-close class="btn btn-outline-secondary col-5" style="margin: 0 5px">Cancel</button>
                                            <button type="button" @click="disable(data.index)" data-fancybox-close class="btn btn-danger col-5 " style="margin: 0 5px">Disable!</button>
                                            </div>
                                        </div>
                                    </template>
                                </b-table>
                                <br>
                                <b-pagination
                                  v-model="currentPage"
                                  :total-rows="rows"
                                  :per-page="perPage"
                                  aria-controls="my-table"
                                  align="center"
                                ></b-pagination>

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

              <!-- <div class="card bg-light">
                <div class="card-header"> <h3>List Game</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{gamelist}}</pre>
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
    data() {
        return {
            removed: false,
            gamelist: [],
            gameDetail: '',
            gameEdit: '',
            info: '',
            perPage: 10,
            currentPage: 1,
            fields: ['no', 'title', 'price', 'rating', 'genre', 'status', 'action'],
        }
    },
    methods: {
        getGames() {
            this.axios.get('https://minigame-infiniteroom.herokuapp.com/api/game/list').then(response => {
                this.gamelist = response.data.data
            }).catch(error => {
                console.log(error.response);
            })
        },
        viewGameDetail(index) {
            let detail = this.gamelist[index]
            let id = detail.gameId
            this.axios.get('game/detail/'+detail.gameId).then(response => {
                this.gameDetail = response.data.data
            })
            this.$router.push({name: 'GameDetail', params: {gameDetail:detail, gameId:id}}) //bisa juga kayak gini
            console.log('harusnya muncul detail gamenya');
        },

        editGame(index) {
            let edit = this.gamelist[index]
            let id = edit.gameId
            this.axios.get('game/detail/'+id).then(response => {
                this.gameEdit = response.data.data
            })
            this.$router.push({name: 'EditGame', params: {gameEdit:edit, gameId:id}}) //bisa juga kayak gini
        },

        activate(index) {
            const gameId = this.gamelist[index].gameId
            this.axios.put('game/activate/'+gameId).then(response => {
                console.log(response.data.message)
                this.getGames()
            }).catch(error => {
                console.log(error.response)
            })
        },
        disable(index) {
            const gameId = this.gamelist[index].gameId
            this.axios.put('game/disable/'+gameId).then(response => {
                console.log(response.data.message);
                this.getGames()
            }).catch(error => {
                console.log(error.response);
            })
        },

        // ASLI
        // editGame(index) {
        //     let edit = this.gamelist[index]
        //     let id = this.gamelist[index].gameId
        //     this.$router.push({name:'EditGame', params:{gameId:id, gameEdit: edit}})
        // },
        removeGame(index) {
            const gameId = this.gamelist[index].gameId
            this.axios.delete('game/delete/'+gameId).then(response => {
                console.log(response.data.message)
                this.gamelist.splice(index, 1)
            })
            this.removed = true
            this.info = 'Berhasil Hapus Game'
            console.log(this.info)
        }
    },
    mounted() {
        this.getGames()
    },
    computed:{
        rows() {
            return this.gamelist.length
        }
    }
}
</script>

<style>

</style>