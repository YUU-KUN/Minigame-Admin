<template>
<div class="container-fluid" style="margin-top:100px">
  <div class="row">
        <div class="col-md-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Transaction</h6>
                </div>
                <div class="card-body">
                    <div v-if="action" class="alert alert-success alert-dismissible fade show" role="alert">
                      {{info}}
                      <button type="button" @click="action = false" class="close" data-dismiss="alert" aria-label="Close">
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
                                            <th>Item</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                            <th>Payment</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr v-for="(transaction, index) in userTransactions" :key="index">
                                                <td>{{index +1}}</td>
                                                <td>{{transaction.user}}</td>
                                                <td>{{transaction.items[index].cartGameData.title}}</td>
                                                <td>{{transaction.total | rupiah}}</td>
                                                <td>{{transaction.status}}</td>
                                                <td>
                                                    <a :href="transaction.buktiPembayaran" target="_blank">Lihat Bukti Pembayaran</a>
                                                    <!-- <router-link :to="transaction.buktiPembayaran">Lihat Bukti Pembayaran</router-link> -->
                                                </td>
                                                
                                                <td>12 Feb 2021</td>
                                                <td v-if=" status == 'waiting' " class="d-flex justify-content-center">
                                                    <button class="btn btn-danger" v-on:click="removeTransaction(index)">Delete</button>
                                                </td>
                                                <td v-else class="d-flex justify-content-around">
                                                    <button class="btn btn-success" v-on:click="view">&#10003;</button>
                                                    <button class="btn btn-primary" v-on:click="edit">&times;</button>
                                                    <button class="btn btn-danger" v-on:click="removeTransaction(index)">Delete</button>
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
              <div class="card bg-dark">
                <div class="card-header"> <h3>List Transaksi User</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{userTransactions}}</pre>
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
            action: false,
            userTransactions: '',
            status: 'waiting',
            info: ''
        }
    },
    methods: {
        view() {
            console.log('viewed');
        },
        edit() {
            console.log('edit');
        },
        removeTransaction(index) {
            this.userTransactions.splice(index, 1);
            this.action = true
            this.info = 'Berhasil menghapus transaksi'
            console.log(this.info)
        },
        getUserTransaction(){
            axios.get('https://infiniteroom.herokuapp.com/api/v2/transaction/user').then(response => {
                this.userTransactions = response.data.data
            })
        }
    },
    mounted() {
        this.getUserTransaction()
    }
}
</script>

<style>

</style>