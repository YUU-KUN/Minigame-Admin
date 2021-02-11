<template>
<div class="container-fluid" style="margin-top:100px">
  <div class="row">
        <div class="col-md-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Game Detail</h6>
                </div>
                <!-- <div class="card-body">
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
                                            <th>Game</th>
                                            <th>Price</th>
                                            <th>Rating</th>
                                            <th>Genre</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr v-for="(game, index) in gamelist" :key="index">
                                                <td>{{index+1}}</td>
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
                                                                        <label for="price"><strong>Game</strong></label>
                                                                        <input type="text" id="price" class="form-control">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="price"><strong>Normal Price</strong></label>
                                                                        <input type="text" id="price" class="form-control">
                                                                    </div>
                                                                </div>
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="discount"><strong>Discount Price</strong></label>
                                                                        <input type="text" id="discount" class="form-control">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="duration"><strong>Duration</strong></label>
                                                                        <input type="text" id="duration" class="form-control">
                                                                    </div>
                                                                </div>
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <!-- <label for="star"><strong>Star</strong></label> -->
                                                                        <!-- <ul class="rate-area " id="star">
                                                                            <input type="radio" id="1-star" class="form-control" name="crating">
                                                                            <input type="radio" id="2-star" class="form-control" name="crating">
                                                                            <input type="radio" id="3-star" class="form-control" name="crating">
                                                                            <input type="radio" id="4-star" class="form-control" name="crating">
                                                                            <input type="radio" id="5-star" class="form-control" name="crating">
                                                                        </ul> -->
                                                                        <ul class="rate-area">
                                                                        <input type="radio" id="5-star" name="crating" value="5">
                                                                          <label for="5-star" title="Amazing">5 stars</label>
                                                                                          <input type="radio" id="4-star" name="crating" value="4">
                                                                          <label for="4-star" title="Good">4 stars</label>
                                                                                          <input type="radio" id="3-star" name="crating" value="3">
                                                                          <label for="3-star" title="Average">3 stars</label>
                                                                                          <input type="radio" id="2-star" name="crating" value="2">
                                                                          <label for="2-star" title="Not Good">2 stars</label>
                                                                                          <input type="radio" id="1-star" required=""
                                                                           name="crating" value="1" aria-required="true">
                                                                          <label for="1-star" title="Bad">1 star</label>
                                                                        </ul>
                                                                            
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="col">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="description"><strong>Description</strong></label>
                                                                        <textarea name="description" id="description" class="form-control" cols="30" rows="10"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12">
                                                            <div class="form-group" >
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;">
                                                                        <label for="KI"><strong>Cover</strong></label>
                                                                        <input type="file" id="cover" class="form-control">
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
import axios from 'axios'
export default {
    data(){
        return {
            gameDetail: ''
        }
    },
    methods: {
        created() {
            this.gameDetail = this.$route.params.gameDetail.data
        }
        // gameDetail(){
        //     axios.get('game/detail/', gameDetail).then(response => {
        //         this.gameDetail = response.data.data
        //     })
        // }
    },
    mounted() {
    }
}
</script>

<style>
.rate-area {
    float:left;
    border-style: none;
}

.rate-area:not(:checked) > input {
    position:absolute;
    top:-9999px;
    clip:rect(0,0,0,0);
}

.rate-area:not(:checked) > label {
    float: right;
    width: .80em;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-size: 40px;
    line-height: 32px;
    color: lightgrey;
    margin-bottom: 10px !important;
}

.rate-area:not(:checked) > label:before {
    content: '★';
}

.rate-area > input:checked ~ label {
    color: #e8262d;
    text-shadow: none;
}

.rate-area:not(:checked) > label:hover,
.rate-area:not(:checked) > label:hover ~ label {
    color: #e8262d;
    
}

.rate-area > input:checked + label:hover,
.rate-area > input:checked + label:hover ~ label,
.rate-area > input:checked ~ label:hover,
.rate-area > input:checked ~ label:hover ~ label,
.rate-area > label:hover ~ input:checked ~ label {
    color: #e8262d;
    text-shadow: none;
    
}

.rate-area > label:active {
    position:relative;
    top:0px;
    left:0px; 
}
</style>