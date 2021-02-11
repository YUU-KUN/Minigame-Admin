<template>
<div class="container-fluid" style="margin-top:100px">
  <div class="row">
        <div class="col-md-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">User</h6>
                </div>
                <div class="card-body">
                    <div v-if="removed" class="alert alert-success alert-dismissible fade show" role="alert">
                      {{info}} 
                      <button type="button" @click="removed = false" class="close" data-dismiss="alert" aria-label="Close">
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
                                            <th>Email</th>
                                            <th>Username</th>
                                            <th>Verified</th>
                                            <th>Joined</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr v-for="(user, index) in users" :key="index">
                                                <td>{{index+1}}</td>
                                                <td>{{user.email}}</td>
                                                <td>{{user.username}}</td>
                                                <td>{{user.isVerified}}</td>
                                                <td>{{user.createdAt}}</td>
                                                <td class="d-flex justify-content-center">
                                                    <button class="btn btn-danger" v-on:click="deleteUser(index)">Delete</button>
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
                <div class="card-header"> <h3>List User</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{users}}</pre>
                      </div>
                    </div>
                </div>
              </div>
              <!-- ONLY FOR DEVELOPING -->


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
                      User berhasil terhapus
                    </div>
                  </div>
                </div> -->

            

            <!-- <div class="card shadow mb-4">
                <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                  </div>
                </div>
            </div>

                <div class="row">
                    <img src="" alt="NO DATA FOUND" height="200px" width="auto" style="margin: 0 auto">
                </div>
                    <div class="col" style="text-align:center; ">
                <div style=" background-color: white; height: 200px; width: 250px; padding: 50px" >
                        <h5>Ups, datanya gak ketemu nih...</h5>
                        <h7>Yuk, mulai buat tabungan pertama</h7> <br><br>
                        <a href="" class="btn btn-primary">
                            Mulai Menabung
                        </a>
                    </div>
                </div>

                <div class="col" style="text-align:center; ">
                    <div style=" background-color: white; height: 200px; width: 250px; padding: 50px" >
                        <div class="col">
                            <img src="../../../public\assets\icons\2 Friends.jpg" class="card-img-top" alt="..." style="margin: 0 auto; width: 50px">
                        </div>
                        <br>
                        <h3 class="card-text"><strong>900 Users</strong></h3>
                    </div>
                </div> -->

                <!-- <div class="row" style="text-align:center">
                    <div class="col">
                    <div class="card" style="width: 18rem; height: 200px">
                        <div class="card-body">
                            <div class="col">
                                <img src="../../../public\assets\icons\2 Friends.jpg" class="card-img-top" alt="..." style="margin: 0 auto; width: 50px">
                            </div>
                            <br>
                            <h3 class="card-text"><strong>900 Users</strong></h3>
                        </div>
                    </div>
                    </div>
                </div> -->

        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            users: '',
            removed: false,
            info: false
        }
    },
    methods: {
        getUser() {
            axios.get('/user/list').then(response => {
                this.users = response.data.data
            })
        },
        // deleteUser(index) {
        //     this.removed = true
        //     this.info = 'Berhasil Hapus User '+this.users[index].username
        //     this.users.splice(index, 1)
        //     console.log(this.info)
        // },
        deleteUser(index) {
            let id = this.users[index].userId
                console.log(id)
            let username = this.users[index].username
                console.log(username)
            let headers = {
                "headers": {
                    "content-type": "application/json",
                },
            }
            axios.delete(`/user/${id}`, headers).then(this.getUser())
            
            this.info = true
            console.log('Berhasil hapus User '+username)
        }
    },
    mounted() {
        this.getUser()
    }
}
</script>

<style>

</style>