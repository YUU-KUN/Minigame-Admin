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
                      Berhasil generate Kode. Kode Anda adalah <b>4R329D</b>
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
                                                    <button class="btn btn-danger" v-on:click="generate(index)">Generate</button>
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
            time: ''
        }
    },
    methods: {
        generate(index) {
            let headers = {
                "headers": {
                    "content-type": "application/json",
                },
            }
            let userGameId = this.userlist[index].userGameId
            console.log(userGameId);
            axios.put('generate/code/d4e2b707-7d50-4d58-9ba7-dc484539e94d', headers).then(response => {
                this.userlist[index].code = response.data.data[index].code
            })
            this.generated = true
            console.log('Success Generate')
        },
        getUserCode() {
            axios.get('game/usergame').then(response => {
                this.userlist = response.data.data
            })
        }
    },
    mounted() {
        this.getUserCode()
    }
}
</script>

<style>

</style>