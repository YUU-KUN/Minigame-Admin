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
                                                                <!-- <div class="row"> -->
                                                                    <div class="input-subject_id" style="flex-grow: 1;  ">
                                                                        <label for="subject"><strong>Nama Game</strong></label>
                                                                        <input type="text" class="form-control" name="subject_id" id="subject" :value="gameDetail.title">
                                                                            <!-- @if($subjects->isNotEmpty()) -->
                                                                            <!-- @else -->
                                                                            <!-- @endif -->
                                                                    </div>
                                                                <!-- </div> -->
                                                            </div>
                                                        </div>

                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <div class="row">
                                                                    <div class="input-subject_id" style="flex-grow: 1;  ">
                                                                        <label for="subject"><strong>Nama Game</strong></label>
                                                                        <select class="form-control" name="subject_id" id="subject">
                                                                            <!-- @if($subjects->isNotEmpty()) -->
                                                                                    <option value="" disabled selected >Pilih Mata Pelajaran</option>
                                                                                    <option v-for="(detail, index) in gameDetail" :key="index" :value="detail"></option>
                                                                            <!-- @else -->
                                                                                <option value="" disabled selected >Tidak Ada Mata Pelajaran</option>
                                                                            <!-- @endif -->
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="class"><strong>Kelas</strong></label>
                                                                        <select class="form-control" name="class_id" id="class" >
                                                                            <!-- @if($classes->isNotEmpty()) -->
                                                                                    <option value="" disabled selected >Pilih Kelas</option>
                                                                            <!-- @else -->
                                                                                <option value="" disabled selected >Tidak Ada Kelas</option>
                                                                            <!-- @endif -->
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="semester"><strong>Semester</strong></label>
                                                                        <select class="form-control" name="semester" id="semester" >
                                                                            <option value="" disabled selected>Pilih Semester</option>
                                                                            <option value="1">1</option>
                                                                            <option value="2">2</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; ">
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="subject_matter"><strong>Materi Pokok</strong></label>
                                                                        <textarea name="subject_matter" id="subject_matter" class="form-control" placeholder="Masukkan Materi Pokok" ></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-3">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="time_allocation"><strong>Alokasi Waktu</strong></label>
                                                                        <input type="number" class="form-control" name="time_allocation" id="time_allocation" placeholder="60 Menit">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-around;">
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;">
                                                                        <label for="KI"><strong>KI</strong></label>
                                                                        <textarea class="form-control" name="KI" id="KI" cols="30" placeholder="Masukkan Kompetensi Inti"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6">
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="KD"><strong>KD</strong></label>
                                                                        <textarea class="form-control" name="KD" id="KD" cols="30" placeholder="Masukkan Kompetensi Dasar"></textarea>
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

</style>