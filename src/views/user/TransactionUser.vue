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
                                                  <span v-if="transaction.status == 0">Waiting</span>
                                                  <span v-else-if="transaction.status == 1">Paid</span>
                                                  <span v-else-if="transaction.status == 2">Unpaid</span>
                                                  <span v-else>Rejected</span>
                                                </td>
                                                <td>
                                                  <a href="#" ><span class="badge badge-primary">Lihat Bukti Pembayaran</span></a>
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
    },
    mounted() {
        this.getUserTransaction()
    }
}
</script>

<style>
.animated-modal {
  max-width: 550px;
  border-radius: 4px;
  overflow: hidden;
  
  transform: translateY(-50px);
  transition: all .7s;
}

.animated-modal h2,
.animated-modal p {
  transform: translateY(-50px);
  opacity: 0;
  
  transition-property: transform, opacity;
  transition-duration: .4s;
}

/* Final state */
.fancybox-slide--current .animated-modal,
.fancybox-slide--current .animated-modal h2,
.fancybox-slide--current .animated-modal p {
  transform: translateY(0);
  opacity: 1;
}

/* Reveal content with different delays */
.fancybox-slide--current .animated-modal h2 {
  transition-delay: .1s;
}

.fancybox-slide--current .animated-modal p {
  transition-delay: .3s;
}
</style>