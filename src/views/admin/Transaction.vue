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
                                            <tr v-for="(transaction, index) in transactions" :key="index">
                                                <td>{{index +1}}</td>
                                                <td>{{transaction.user}}</td>
                                                <!-- <td>{{transaction.items[0].cartGameData.title}}</td> -->
                                                <td>
                                                    <span v-for="(game, index) in transaction.items" :key="index">
                                                    {{game.cartGameData.title}}
                                                    </span>
                                                </td>
                                                <td>{{transaction.total | rupiah}}</td>
                                                <td>{{transaction.status}}</td>
                                                <td>
                                                    <a :href="transaction.buktiPembayaran" target="_blank">Lihat Bukti Pembayaran</a>
                                                    <!-- <router-link :to="transaction.buktiPembayaran">Lihat Bukti Pembayaran</router-link> -->
                                                </td>
                                                
                                                <td>{{transaction.createdAt | formatDate}}</td>
                                                <td v-if=" status == 'waiting' " class="d-flex justify-content-center">
                                                    <button class="btn btn-danger" data-fancybox :data-src="'#'+index">Delete</button>
                                                </td>
                                                <td v-else class="d-flex justify-content-around">
                                                    <button class="btn btn-success" v-on:click="view">&#10003;</button>
                                                    <button class="btn btn-primary" v-on:click="edit">&times;</button>
                                                    <button class="btn btn-danger" data-fancybox :data-src="'#'+index">Delete</button>
                                                </td>

                                                <div style="display:none" :id="index" class="animated-modal">
                                                    <h2>Watch Out!</h2>
                                                    <p>Are you sure wanna delete <span v-if="transaction.user"><b>{{transaction.user}}</b>'s</span> <span v-else>this</span> transaction?</p>
                                                    <div class=" d-flex justify-content-center">
                                                    <button type="button" data-fancybox-close @click="checkTransactionId(index)" class="btn btn-outline-secondary col-5" style="margin: 0 5px">Cancel</button>
                                                    <button type="button" @click="removeTransaction(index)" data-fancybox-close class="btn btn-danger col-5 " style="margin: 0 5px">YASHH!</button>
                                                    </div>
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
              <div class="card bg-dark">
                <div class="card-header"> <h3>List Transaksi User</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{transactions}}</pre>
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
export default {
    data() {
        return {
            action: false,
            transactions: '',
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
        checkTransactionId(index){
            console.log(this.transactions[index].transaksiId);
        },
        removeTransaction(index) {
            let headers = {
                "headers": {
                    "content-type": "application/json",
                },
            }
            let transactionId = this.transactions[index].transaksiId
            console.log(transactionId);
            this.axios.delete('transaction/delete/'+transactionId).then(response => {
                console.log('Berhasil menghapus transaksi');
                this.getUserTransaction()
            }).catch(err => {
                console.log(err.response);
            })
            this.action = true
            this.info = 'Berhasil menghapus transaksi'
            console.log(this.info)
        },
        getUserTransaction(){
            let headers = {
                "headers": {
                    "content-type": "application/json",
                },
            }
            this.axios.get('/transaction/list', headers).then(response => {
                this.transactions = response.data.data
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