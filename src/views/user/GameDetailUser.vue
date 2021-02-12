<template>
  <div class="container-fluid" style="margin-top: 100px">
    <div class="row">
      <div class="col-4">
        <div class="card shadow mb-4">
          <!-- <div class="col-4 d-flex justify-content-center"> -->
          <img
            src="https://res.cloudinary.com/mygalleryfile/image/upload/v1609328265/THE-TEMPLE-OF-RIDDLE_tbwvfr.jpg"
            alt="Game Image"
            height="auto"
            style="border-radius: 5px"
          />
          <!-- </div> -->
        </div>

        <button
          class="btn btn-success d-flex align-items-center justify-content-center"
          style="width: 100%; margin: 20px auto"
        >
          <b-icon icon="play-fill" font-scale="2" aria-hidden="true"></b-icon
          ><b>Play Game</b>
        </button>

        <button
          class="btn btn-warning d-flex align-items-center justify-content-center"
          style="width: 100%; margin: 20px auto"
          data-fancybox 
          data-src="#addToCart" 
          href="javascript:;" 
        >
          <b-icon icon="cart-plus-fill" font-scale="1.4" aria-hidden="true"></b-icon
          ><b>Add to Cart</b>
        </button>
      </div>

      <div class="col-8">
        <div class="card shadow mb-4">
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
                                                          <h1>
                                                            <b> {{detailGame.title}}</b>
                                                          </h1>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                          <div class="col">
                                              <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                  <div class="col">
                                                      <div class="input-container" style="flex-grow: 1;  ">
                                                          <h4>
                                                            <strong>Description</strong>
                                                          </h4>
                                                          <p>
                                                            {{detailGame.description}}
                                                          </p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div class="col">
                                              <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                  <div class="col">
                                                      <div class="input-container" style="flex-grow: 1;  ">
                                                          <h4>
                                                            <strong>Categories</strong>
                                                          </h4>
                                                          <div class="col-12" style="padding: 0">
                                                            <span
                                                              v-for="(category, index ) in detailGame.genre" :key="index"
                                                              class="badge badge-pill badge-primary"
                                                              style="margin: 0 10px 0 0; font-size: 16px"
                                                              >{{category}}</span
                                                            >
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                        
                                          <br>

                                          <div class="col">
                                              <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                  <div class="col-6">
                                                      <div class="input-container" style="flex-grow: 1;  ">
                                                          <div class="col">
                                                            <div class="row">
                                                              <h4>
                                                                <strong>Rating</strong>
                                                              </h4>
                                                              <br />
                                                              <div class="col-12">
                                                                <div class="row">
                                                                  <b-icon v-for="index in detailGame.rating" :key="index" class="h5 mb-2" icon="star-fill" style="color: orange"></b-icon>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-6">
                                                      <div class="input-container" style="flex-grow: 1;  ">
                                                          <div class="col">
                                                            <div class="row">
                                                              <h4>
                                                                <strong>Duration</strong>
                                                              </h4>
                                                              <br />
                                                              <div class="col-12">
                                                                <div class="row">
                                                                  <b-icon class="h5 mb-2" icon="stopwatch-fill" style="color: orange"></b-icon>
                                                                  {{detailGame.duration}} Minutes
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>


                                          <div class="col">
                                              <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                  <div class="col-6">
                                                      <div class="input-container" style="flex-grow: 1;  ">
                                                          <div class="col">
                                                            <div class="row">
                                                              <h4>
                                                                <strong>Price</strong>
                                                              </h4>
                                                              <br />
                                                              <div class="col-12">
                                                                <div class="row">
                                                                  <b-icon class="h5 " icon="cash" style="color: orange"></b-icon>
                                                                  {{detailGame.price | rupiah}}
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  <div class="col-6">
                                                      <div class="input-container" style="flex-grow: 1;  ">
                                                          <div class="col">
                                                            <div class="row">
                                                              <h4>
                                                                <strong>Team</strong>
                                                              </h4>
                                                              <br />
                                                              <div class="col-12">
                                                                <div class="row">
                                                                  <b-icon class="h5 mb-2" icon="people-fill" style="color: orange"></b-icon> 
                                                                  {{detailGame.capacity}} People
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
              </div>
          </div>
        </div>

        <!-- <div class="card shadow mb-4">
          <div
            class="row"
            v-for="(game, index) in data"
            :key="index"
            style="margin: 10px 0"
          >
            <div class="col-4 d-flex justify-content-center">
              <img
                @click="gameDetail(index)"
                :src="game.imageUrl"
                alt="Game Image"
                height="200px"
                style="border-radius:5px"
                id="imageZoom"
              />
            </div>
            <div class="col-8 d-flex align-items-center">
              <div class="col">
                <div class="row">
                  <h1>
                    <b>{{ game.title }}</b>
                  </h1>
                </div>
                <div class="row">
                  <span
                    class="badge badge-pill badge-primary"
                    v-for="(genre, index) in game.genre"
                    :key="index"
                    style="margin: 0 10px 0 0; font-size:16px"
                    >{{ genre }}</span
                  >
                </div>
                <div class="row">
                  <li
                    v-for="index in game.rating"
                    :key="index"
                    style="display:inline"
                  >
                    <span style="color:orange;"><h2>&starf;</h2> </span>
                  </li>
                </div>
                <div class="row">
                  <button class="btn btn-warning d-flex align-items-center">
                    <b-icon
                      icon="play-fill"
                      font-scale="2"
                      aria-hidden="true"
                    ></b-icon
                    ><b>Play Game</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <!-- ONLY FOR DEVELOPING -->
        <div class="card bg-light">
                <div class="card-header"> <h3>GameID</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{gameId}}</pre>
                      </div>
                    </div>
                </div>
              </div>

              <div class="card bg-light">
                <div class="card-header"> <h3>Detail Game</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{detailGame}}</pre>
                      </div>
                    </div>
                </div>
              </div>
        <!-- ONLY FOR DEVELOPING -->
      </div>

<div style="display: none;" id="addToCart">
          <h2>Get The Temple Of Riddle!</h2>
          <p>You are awesome!</p>
                                <div class="form">
                                    <div class="form-group">
                                          <div class="row">
                                            <div class="col-md-12">
                                                <div class="panel panel-default">
                                                    <div class="panel-body">

                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="date"><strong>Date</strong></label>
                                                                        <input type="date" id="date" class="form-control">
                                                                    </div>
                                                                </div>
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="time"><strong>Time</strong></label>
                                                                        <select name="time" id="time" class="form-control">
                                                                          <option value="" selected disabled>19.00</option>
                                                                          <option value="">12.00</option>
                                                                          <option value="">15.00</option>
                                                                          <option value="">19.00</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="members"><strong>Members</strong></label>
                                                                        <select name="members" id="members" class="form-control">
                                                                          <option value="" selected disabled>@testHammam</option>
                                                                          <option value="">@testHammam</option>
                                                                          <option value="">@testHammam</option>
                                                                          <option value="">@testHammam</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12">
                                                            <div class="form-group" >
                                                                <div class="col">
                                                                    <div class="input-container" style="flex-grow: 1;">
                                                                        <div class="d-flex justify-content-end" style="margin:10px 0">Total: Rp 250.000,00</div>
                                                                        <button @click="addToCart" class="btn btn-warning d-flex align-items-center justify-content-center" style="float: right">
                                                                          <b-icon icon="cart-plus-fill" font-scale="1.4" aria-hidden="true"></b-icon>
                                                                          <b>Add to Cart</b>
                                                                        </button>
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
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      detailGame: '',
      gameId: '',
      dateTime: '',
      date: '',
      time: '',
      members: {
        name: '',
        userId: '',
      }
    };
  },
  methods: {
    getDetailGame() {
      axios.get('/game/detail/'+this.gameId).then(response => {
        this.detailGame = response.data.data
      })
    },
    addToCart() {
      // let headers = {
      //           "headers": {
      //               "content-type": "application/json",
      //           },
      //       }
      axios.post('/cart/add', {
        dateTime: this.date + ' ' +this.time,
        gameId: this.gameId,
        members: this.members,
      }, headers)
    }
  },
  mounted() {
    this.gameId = this.$route.params.id;
      if (this.gameId) {
        console.log(this.gameId);
      } else {
        console.log('id game nya kosong gannn');
      } 
    this.getDetailGame();
  },
};
</script>

<style></style>
