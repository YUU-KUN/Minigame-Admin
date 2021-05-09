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
                                
                                <b-table
                                  id="my-table"
                                  class="table table-bordered"
                                  :items="users"
                                  :fields="fields"
                                  :per-page="perPage"
                                  :current-page="currentPage"
                                >
                                    
                                    <template v-slot:cell(no)="nais">
                                        <span>{{nais.index+1}}</span>
                                    </template>
                                    <template v-slot:cell(name)="data">
                                        <div class="row">
                                            <div class="col-4" style="text-align:center">
                                                <img :src="data.item.userImage" height="50px" alt="Profile Picture">
                                            </div>
                                            <div class="col">
                                                {{data.item.name}} 
                                            </div>
                                        </div>
                                    </template>
                                    <template v-slot:cell(joined_at)="gan">
                                        {{gan.item.verifiedAt | formatDate}}
                                    </template>
                                    <template v-slot:cell(verified)="gan">
                                        <span v-if="gan.item.verified"><b-badge variant="success">Verified</b-badge></span>
                                        <span v-else><b-badge variant="warning">Unverified</b-badge></span>
                                    </template>
                                    <template v-slot:cell(action)="data">
                                        <button class="btn btn-danger" data-fancybox :data-src="'#delete'+data.index"><b-icon icon="trash2-fill" title="Delete User"></b-icon></button>

                                        <!-- Delete Transaction -->
                                        <div style="display:none" :id="'delete'+data.index" >
                                            <h2>Watch Out!</h2>
                                            <p>Are you sure wanna delete <span v-if="data.item.username"><b>{{data.item.username}}</b>'s</span> <span v-else>this</span> account?</p>
                                            <div class=" d-flex justify-content-center">
                                            <button type="button" data-fancybox-close class="btn btn-outline-secondary col-5" style="margin: 0 5px">Cancel</button>
                                            <button type="button" @click="deleteUser(data.index)" data-fancybox-close class="btn btn-danger col-5 " style="margin: 0 5px">YASHH!</button>
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
        </div>
    </div>
    </div>
</template>

<script>
import 'bootstrap-vue'
export default {
    data() {
        return {
            users: [],
            removed: false,
            info: false,
            fields: ['no', 'name', 'email', 'username', 'verified', 'joined_at', 'action'],
            perPage: 10,
            currentPage: 1,

        }
    },
    methods: {
        getUser() {
            this.axios.get('user/list-admin').then(response => {
                this.users = response.data.data
            })
        },
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
            this.axios.delete(`/user/delete/${id}`, headers).then(response => {
                this.users.slice(0, 1)
                console.log(response)
                this.getUser()
            }).catch(error => {
                console.log(error)
            })
            this.$bvToast.show('my-toast')
            this.info = true
            console.log('Berhasil hapus User '+username)
        },

    },
    mounted() {
        this.getUser()
    },

    computed: {
      rows() {
        return this.users.length
      }
    }
}
</script>

<style>

</style>