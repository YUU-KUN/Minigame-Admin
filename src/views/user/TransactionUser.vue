<template>
<div class="container-fluid" style="margin-top:100px">
  <div class="row">
        <div class="col-md-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Transaksi Anda</h6>
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
                                            <th>User</th>
                                            <th>Item</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                            <th>Payment</th>
                                            <th>Date</th>
                                            <!-- <th>Kode Game</th> -->
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr v-for="(transaction, index) in userTransaction" :key="index">
                                                <td>{{index+1}}</td>
                                                <td>
                                                  <span v-if="transaction.user">{{transaction.user}}</span>
                                                  <span v-else>-</span>
                                                </td>
                                                <td>
                                                  <span v-for="(items, index) in transaction.items" :key="index">{{items.cartGameData.title}}</span>
                                                </td>
                                                <td>{{transaction.total | rupiah}}</td>
                                                <td>
                                                  <span v-if="transaction.status == 0">Menunggu Bukti Pembayaran</span>
                                                  <span v-else-if="transaction.status == 1">Transaksi Terkonfirmasi</span>
                                                  <span v-else-if="transaction.status == 2">Pending</span>
                                                  <span v-else-if="transaction.status == 3">Transaksi Ditolak</span>
                                                  <span v-else>Transaksi Kadaluarsa</span>
                                                </td>
                                                <td v-if="transaction.status ==  1 || transaction.status == 2">
                                                  <a :href="transaction.buktiPembayaran" target="_blank"><span class="badge badge-success">Lihat Bukti Pembayaran</span></a>
                                                </td>
                                                <td v-else-if="transaction.status == 0">
                                                  <a href="" data-fancybox :data-src="'#bukti'+index"><span class="badge badge-warning">Upload Bukti Pembayaran</span></a>
                                                </td>
                                                <td>{{transaction.createdAt | formatDate}}</td>
                                                <td style="align-items:center">
                                                  <a href="" data-fancybox :data-src="'#'+index"><span class="badge badge-primary">Lihat Kode Game</span></a>
                                                </td>
                                                <!-- <td class="d-flex justify-content-center">
                                                    <button class="btn btn-danger" v-on:click="deleteUser(index)">Delete</button>
                                                </td> -->

                                                <div style="display: none;" :id="index" class="animated-modal">
                                                  <h2>Hello!</h2>
                                                  <p>This is animated content! Cool, right?</p>
                                                </div>

                                                <div style="display: none;" :id="'bukti'+index" class="animated-modal">
                                                  <h2>Hello!</h2>
                                                  <p>Silahkan upload bukti pembayarannya ya~</p>
                                                  <form @submit="uploadPayment(index)" enctype="multipart/form-data">
                                                    <div class="form-group" >
                                                      <input type="file" accept="image/*" class="form-control-file" required>
                                                    </div>
                                                    <button type="submit" data-fancybox-close class="btn btn-success mb-4 form-control">Checkout!</button>
                                                  </form>
                                                </div>
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
                <div class="card-header"> <h3>List Transaksi User</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{userTransaction}}</pre>
                      </div>
                    </div>
                </div>
              </div>
              <!-- ONLY FOR DEVELOPING -->

              <!-- Toast di pojok kanan atas -->
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

        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            userTransaction: '',
            removed: false,
            info: false
        }
    },
    methods: {
        getUserTransaction() {
            axios.get('/transaction/user').then(response => {
                this.userTransaction = response.data.data
            })
        },
        uploadPayment(index) {
          console.log(this.userTransaction[index].transaksiId);
          // axios.post('transaction/upload-bukti/'+this.userTransaction[index].transaksiId).then(response => {
          //   console.log(response)
          //   this.getUserTransaction()
          // })
        }
    },
    mounted() {
        this.getUserTransaction()
    }
}
</script>

<style>
</style>