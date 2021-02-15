<template>
  <div class="container-fluid" style="margin-top:100px">
  <div class="row">
        <div class="col-md-12">
            <div class="card shadow mb-4" >
                <!-- <div class="container-fluid"> -->
              <div class="row" v-for="(game, index) in gameweb" :key="index" style="margin: 10px 0">
                
                  <div class="col-4 d-flex justify-content-center">
                    <img  @click="gameDetail(index)" :src="game.imageUrl" alt="Game Image" height="200px" style="border-radius:5px" id="imageHover" class="img-thumbnail">
                  </div>
                  <div class="col-8 d-flex align-items-center">
                    <div class="col">
                      <div class="row" >
                        <h1><b>{{game.title}}</b></h1>
                      </div>
                      <div class="row" >
                        <span class="badge badge-pill badge-primary" v-for="(genre, index) in game.genre" :key="index" style="margin: 0 10px 0 0; font-size:16px">{{genre}}</span>
                      </div>
                      <div class="row" v-if="game.rating" >
                          <li v-for="index in game.rating" :key="index" style="display:inline">
                            <span style="color:orange;"><h2>&starf;</h2> </span>
                          </li>
                      </div>
                      <div class="row" v-else>
                            <span><h2>-</h2> </span>
                      </div>
                      <div class="row">
                          <button class="btn btn-warning d-flex align-items-center" @click="gameDetail(index)">
                            <!-- <b-icon icon="play-fill" font-scale="2" aria-hidden="true"></b-icon> -->
                            <b>Detail Game</b></button>
                      </div>
                    </div>
                  </div>

                  <!-- <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
                    <div class="toast" style="position: absolute; top: 0; right: 0;">
                      <div class="toast-header">
                        <img src="" class="rounded mr-2" alt="...">
                        <strong class="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button @click="info == false" type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="toast-body">
                        Welcome {{user.username}}
                      </div>
                    </div>
                  </div> -->
                <!-- </div> -->
              </div>

                <!-- <div class="card-header py-3">
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
                            <a href="" class="btn btn-primary">
                                Add New Game
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mt-3">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Cover</th>
                                            <th>Game</th>
                                            <th>Price</th>
                                            <th>Rating</th>
                                            <th>Genre</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr v-for="(game, index) in gameweb" :key="index">
                                                <td>{{index+1}}</td>
                                                <td>
                                                  <img :src="game.imageUrl" alt="" srcset="">
                                                </td>
                                                <td>{{game.title}}</td>
                                                <td>{{game.price | rupiah}}</td>
                                                <td>{{game.rating}} <span style="font-size:17px;color:orange;">&starf;</span></td>
                                                <td>{{game.genre.join(', ')}}</td>
                                                <td >
                                                    <button class="btn btn-success" @click="viewGameDetail(index)" style="margin: 0 5px">View</button>
                                                    <button class="btn btn-primary" @click="edit" style="margin: 0 5px">Edit</button>
                                                    <button class="btn btn-danger" @click="removeGame(index)" style="margin: 0 5px">Delete</button>
                                                </td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>


            <!-- ONLY FOR DEVELOPING -->
              <div class="card bg-light">
                <div class="card-header"> <h3>Web Game</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{gameweb}}</pre>
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
  data() {
    return {
      gameweb: '',
      gameId: '',
      currentUser: '',
      totalUser: '',
    }
  },
  methods: {
    whoAmi() {
      axios.get('user/profile').then(response => {
          this.whoami = response.data.data.name
      })
    },
    getWebGame() {
      axios.get('https://infiniteroom.herokuapp.com/api/v2/game/web').then(response => {
        this.gameweb = response.data.data
      })
    },
    gameDetail(index) {
      this.gameId = this.gameweb[index].gameId
      this.$router.push({name: 'GameDetailUser', params:{
          gameId: this.gameId,
          currentUser: this.currentUser,
        } 
      })
      console.log('halo gan');
    },
  },
  mounted() {
    this.getWebGame()
    this.whoAmi()
  }

}
</script>

<style>

#imageHover{
  transition: .5s ease;
}

#imageHover:hover{
  cursor: pointer;
  opacity: 0.5;
}
</style>