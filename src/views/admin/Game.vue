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
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Game</th>
                                            <th>Price</th>
                                            <th>Rating</th>
                                            <!-- <th>Duration</th> -->
                                            <!-- <th>Level</th> -->
                                            <th>Genre</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(game, index) in gamelist" :key="index">
                                            <td>{{index+1}}</td>
                                            <td>{{game.title}}</td>
                                            <td>{{game.discountPrice | rupiah}}</td>
                                            <td v-if="game.rating">
                                                {{game.rating}} <span style="font-size:17px;color:orange;">&starf;</span>
                                            </td>
                                            <td v-else>
                                                -
                                            </td>
                                            <td>
                                                <span v-if="game.genre.length == 1">{{game.genre.join(', ').split(',').join(', ')}}</span> 
                                                <span v-else>{{game.genre.join(', ')}}</span>
                                            </td>
                                            <td >
                                                <button class="btn btn-success" @click="viewGameDetail(index)" style="margin: 0 5px">View</button>
                                                <button class="btn btn-primary" @click="editGame(index)" style="margin: 0 5px">Edit</button>
                                                <button class="btn btn-danger" data-fancybox :data-src="'#'+index" style="margin: 0 5px">Delete</button>
                                            </td>

                                            <!-- Delete Confirmation -->
                                            <div style="display:none" :id="index" class="animated-modal">
                                                <h2>Watch Out!</h2>
                                                <p>Are you sure wanna delete <b>{{game.title}}</b>?</p>
                                                <div class=" d-flex justify-content-center">
                                                <button type="button" data-fancybox-close class="btn btn-outline-secondary col-5" style="margin: 0 5px">Cancel</button>
                                                <button type="button" @click="removeGame(index)" data-fancybox-close class="btn btn-danger col-5 " style="margin: 0 5px">YASHH!</button>
                                                </div>
                                            </div>

                                        </tr>
                                    </tbody>
                                </table>
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

              <div class="card bg-light">
                <div class="card-header"> <h3>List Game</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{gamelist}}</pre>
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
            removed: false,
            gamelist: '',
            gameDetail: '',
            gameEdit: '',
            info: ''
        }
    },
    methods: {
        getGames() {
            this.axios.get('game/list').then(response => {
                this.gamelist = response.data.data
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

        // ASLI
        // editGame(index) {
        //     let edit = this.gamelist[index]
        //     let id = this.gamelist[index].gameId
        //     this.$router.push({name:'EditGame', params:{gameId:id, gameEdit: edit}})
        // },
        removeGame(index) {
            let GameID = this.gamelist[index].gameId
            this.axios.delete('game/delete/'+GameID).then(this.getGames())
            this.removed = true
            this.info = 'Berhasil Hapus Game'
            console.log(this.info)
        }
    },
    mounted() {
        this.getGames()
    }
}
</script>

<style>

</style>