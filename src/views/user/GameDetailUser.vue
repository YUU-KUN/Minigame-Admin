<template>
  <div class="container-fluid" style="margin-top:100px">
    <div class="row">
      <div class="col-md-12">
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
                <div class="card-header"> <h3>Detail Game</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{data}}</pre>
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
      detailGame: '',
      data: '',
    }
  },
  methods: {
    created() {
      this.detailGame = this.$route.params.gameDetail
    },
    getDetailGame() {
      axios.get('game/detail/'+this.detailGame).then(response => {
        this.data = response.data.data
      })
    }
  },
  mounted() {
    this.getDetailGame()
  }
};
</script>

<style></style>
