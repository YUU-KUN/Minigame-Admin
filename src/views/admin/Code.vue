<template>
<div class="container-fluid" style="margin-top:100px">
  <div class="row">
        <div class="col-md-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Code</h6>
                </div>
                <div class="card-body">
                    <div v-if="generated" class="alert alert-success alert-dismissible fade show" role="alert">
                      Berhasil generate Kode. Kode Anda adalah <b>{{newCode}}</b>
                      <button type="button" @click="generated = false" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mt-3">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>User</th>
                                            <th>Game</th>
                                            <th>Playing Date</th>
                                            <th>Code</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr v-for="(user, index) in userlist" :key="index">
                                                <td>{{index+1}}</td>
                                                <td>{{user.userDetail.name}}</td>
                                                <td>{{user.gameDetail.title}}</td>
                                                <td>{{user.playingDate | formatDate}}</td>
                                                <td>{{user.code}}</td>
                                                <td >
                                                    <div v-if="user.expired">Expired</div>
                                                    <div v-else>Available</div>
                                                </td>
                                                <td class="d-flex justify-content-center">
                                                    <button class="btn btn-danger" data-fancybox :data-src="'#'+index" @click="tesIndex(index)">Generate</button>
                                                    <!-- <button class="btn btn-danger" v-on:click="generate(index)">Generate</button> -->

                                                    <div style="display: none;" :id="index">
          <h2>Generate New Code</h2>
          <p>Please select the date to play!</p>
                                <div class="form">
                                    <div class="form-group">
                                          <div class="row">
                                            <div class="col-md-12">
                                                <div class="panel panel-default">
                                                    <div class="panel-body">

                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <!-- <div class="col"> -->
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="date"><strong>Date</strong></label>
                                                                        <input type="date" id="date" class="form-control" v-model="date">
                                                                    </div>
                                                                <!-- </div> -->
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                <!-- <div class="col"> -->
                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                        <label for="time"><strong>Time</strong></label>
                                                                        <select name="time" v-model="time" id="time" class="form-control">
                                                                            <option :value="index+1" v-for="(time, index) in chooseTime" :key="index" selected>{{time}}</option>
                                                                        </select>
                                                                    </div>
                                                                <!-- </div> -->
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12">
                                                            <div class="form-group" >
                                                                <div class="col">
                                                                    <div class="input-container" style="flex-grow: 1;">
                                                                        <button @click="generate(index)" class="btn btn-warning d-flex align-items-center justify-content-center" style="width:100%">
                                                                          <b-icon icon="cart-plus-fill" font-scale="1.4" aria-hidden="true"></b-icon>
                                                                          <b>Generate</b>
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
                                                </td>

                                                
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      

            

            <!-- ONLY FOR DEVELOPING -->
            <div class="card bg-light">
                <div class="card-header"> <h3>Data Kode Baru</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{newCode}}</pre>
                      </div>
                    </div>
                </div>
              </div>

            <div class="card bg-light">
                <div class="card-header"> <h3>Data User</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{userlist}}</pre>
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
            userlist: '',
            generated: false,
            date: '',
            time: '',
            chooseTime: [
                '09.00',
                '12.00',
                '15.00',
                '19.00'
            ],
            allCode: '',
            newCode: '',
        }
    },
    methods: {
        generate(index) {
            console.log(index);
            let headers = {
                "headers": {
                    "content-type": "application/json",
                },
            }
            let userGameId = this.userlist[index].userGameId
            // console.log(userGameId);
            axios.put('generate/code/'+userGameId, {
                date: this.date,
                time: this.time
            }, headers).then(response => {
                this.newCode = response.data.data.code
            console.log(this.newCode)
            })
            this.generated = true
            console.log('Success Generate')
        },
        getUserCode() {
            axios.get('game/usergame').then(response => {
                this.userlist = response.data.data
            })
        },
        getallCode() {
            axios.get('game/usergame').then(response => {
                this.allCode = response.data.data[1].code
            })
        },
        tesIndex(index) {
            console.log(index);
        }
    },
    mounted() {
        this.getallCode()
        this.getUserCode()
    },
    created() {
        this.$forceUpdate();
    }
}
</script>

<style>

</style>