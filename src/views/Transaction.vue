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
                                <!-- <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>User</th>
                                            <th>Members</th>
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
                                            <td>
                                                    <span>{{transaction.userData.name}}</span>
                                            </td>
                                            <td>
                                                <span v-for="(transactionItems, index) in transaction.transactionItems" :key="index">
                                                    <span v-for="(member, index) in transactionItems.members" :key="index">
                                                        <ul>
                                                            <li>{{member.name}}</li>
                                                        </ul>
                                                    </span>
                                                </span>
                                            </td>
                                            <td>
                                                <ul>
                                                    <span v-for="(game, index) in transaction.transactionItems" :key="index">
                                                        <li>{{game.gameData.gameTitle}}</li>
                                                    </span>
                                                </ul>
                                            </td>
                                            <td>{{transaction.transactionTotal | rupiah}}</td>
                                            <td>
                                                <span v-if="transaction.transactionStatus == 0">Menunggu Bukti Pembayaran</span>
                                                <span v-else-if="transaction.transactionStatus == 1">Transaksi Terkonfirmasi</span>
                                                <span v-else-if="transaction.transactionStatus == 2">Menunggu Konfirmasi Admin</span>
                                                <span v-else-if="transaction.transactionStatus == 3">Transaksi Ditolak</span>
                                                <span v-else>Transaksi Kadaluarsa</span>
                                            </td>
                                            <td>
                                                <span class="d-flex justify-content-center" v-if="transaction.transactionStatus ==  1 || transaction.transactionStatus == 2 || transaction.transactionStatus == 3">
                                                    <a :href="transaction.transactionImage" target="_blank"><span class="badge badge-success">Lihat Bukti Pembayaran</span></a>
                                                </span>
                                                <span class="d-flex justify-content-center" v-else-if="transaction.transactionStatus == 0">
                                                    <a href="" data-fancybox :data-src="'#bukti'+index"><span class="badge badge-warning">Upload Bukti Pembayaran</span></a>
                                                </span>
                                                <span v-else class="d-flex justify-content-center">
                                                    -
                                                </span>
                                            </td>
                                            
                                            <td>{{transaction.createdAt | formatDate}}</td>
                                            <td>
                                                <span v-if="transaction.transactionStatus != 2" class="d-flex justify-content-around ">
                                                    <button class="btn btn-danger" tabindex="-1" data-fancybox :data-src="'#delete'+index"><b-icon icon="trash2-fill"></b-icon></button>
                                                </span>
                                                <span v-else class="d-flex justify-content-around ">
                                                    <span><button class="btn btn-success" @click="acceptTransaction(index)" title="Accept Transaction" style="margin: 0 5px"><b-icon icon="check"></b-icon></button></span>
                                                    <button class="btn btn-warning" data-fancybox :data-src="'#reject'+index" title="Reject Transaction" style="margin: 0 5px"><b-icon icon="x"></b-icon></button>
                                                    <button class="btn btn-danger" data-fancybox :data-src="'#delete'+index" title="Delete Transaction" style="margin: 0 5px"><b-icon icon="trash2-fill"></b-icon></button>
                                                </span>
                                            </td>

                                            <div style="display:none" :id="'delete'+index" >
                                                <h2>Watch Out!</h2>
                                                <p>Are you sure wanna delete <span v-if="transaction.user"><b>{{transaction.user}}</b>'s</span> <span v-else>this</span> transaction?</p>
                                                <div class=" d-flex justify-content-center">
                                                <button type="button" data-fancybox-close @click="checkTransactionId(index)" class="btn btn-outline-secondary col-5" style="margin: 0 5px">Cancel</button>
                                                <button type="button" @click="removeTransaction(index)" data-fancybox-close class="btn btn-danger col-5 " style="margin: 0 5px">YASHH!</button>
                                                </div>
                                            </div>
                                            
                                            <div style="display:none" :id="'reject'+index" >
                                                <h2>Are you sure?</h2>
                                                <p>Why do you wanna <b>reject</b> <span v-if="transaction.user"><b>{{transaction.user}}</b>'s</span> <span v-else>this</span> transaction?</p>
                                                <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                <input type="text" v-model="rejectReason" class="form-control">
                                                </div>
                                                <div class=" d-flex justify-content-center">
                                                <button type="button" data-fancybox-close @click="checkTransactionId(index)" class="btn btn-outline-secondary col-5" style="margin: 0 5px">Cancel</button>
                                                <button type="button" @click="rejectTransaction(index)" data-fancybox-close class="btn btn-danger col-5 " style="margin: 0 5px">REJECT!</button>
                                                </div>
                                            </div>
                                            
                                        </tr>
                                    </tbody>
                                </table> -->


                                <b-table
                                  id="my-table"
                                  class="table table-bordered"
                                  :items="transactions"
                                  :per-page="perPage"
                                  :current-page="currentPage"
                                  :fields="fields"
                                  
                                >
                                    
                                    <template v-slot:cell(no)="data">
                                        <span>{{data.index+1}}</span>
                                    </template>
                                    <template v-slot:cell(user)="data">
                                        {{data.item.userData.name }}
                                    </template>
                                    <template v-slot:cell(members)='data'>
                                        <span v-for="(transactionItems, index) in data.item.transactionItems" :key="index">
                                            <span v-for="(member, index) in transactionItems.members" :key="index">
                                                <ul>
                                                    <li>{{member.name}}</li>
                                                </ul>
                                            </span>
                                        </span>
                                    </template>
                                    <template v-slot:cell(item)="data">
                                        <ul>
                                            <span v-for="(game, index) in data.item.transactionItems" :key="index">
                                                <li>{{game.gameData.gameTitle}}</li>
                                            </span>
                                        </ul>
                                    </template>
                                    <template v-slot:cell(total)="data">
                                        {{data.item.transactionTotal | rupiah}}
                                    </template>
                                    <template v-slot:cell(status)="data">
                                        <span v-if="data.item.transactionStatus == 0">Menunggu Bukti Pembayaran</span>
                                        <span v-else-if="data.item.transactionStatus == 1">Transaksi Terkonfirmasi</span>
                                        <span v-else-if="data.item.transactionStatus == 2">Menunggu Konfirmasi Admin</span>
                                        <span v-else-if="data.item.transactionStatus == 3">Transaksi Ditolak</span>
                                        <span v-else>Transaksi Kadaluarsa</span>
                                    </template>
                                    <template v-slot:cell(payment)="data">
                                        <span class="d-flex justify-content-center" v-if="data.item.transactionStatus ==  1 || data.item.transactionStatus == 2 || data.item.transactionStatus == 3">
                                            <a :href="data.item.transactionImage" target="_blank"><span class="badge badge-success">Lihat Bukti Pembayaran</span></a>
                                        </span>
                                        <span class="d-flex justify-content-center" v-else-if="data.item.transactionStatus == 0">
                                            <a href="" data-fancybox :data-src="'#bukti'+data.index"><span class="badge badge-warning">Upload Bukti Pembayaran</span></a>
                                        </span>
                                        <span v-else class="d-flex justify-content-center">
                                            -
                                        </span>
                                    </template>
                                    <template v-slot:cell(date)="data">
                                        {{data.item.createdAt | formatDate}}
                                    </template>
                                    <template v-slot:cell(action)="data">
                                        <span v-if="data.item.transactionStatus != 2" class="d-flex justify-content-around ">
                                            <button class="btn btn-danger" tabindex="-1" data-fancybox :data-src="'#delete'+data.index"><b-icon icon="trash2-fill"></b-icon></button>
                                        </span>
                                        <span v-else class="d-flex justify-content-around ">
                                            <span><button class="btn btn-success" @click="acceptTransaction(data.index)" title="Accept Transaction" style="margin: 0 5px"><b-icon icon="check"></b-icon></button></span>
                                            <button class="btn btn-warning" data-fancybox :data-src="'#reject'+data.index" title="Reject Transaction" style="margin: 0 5px"><b-icon icon="x"></b-icon></button>
                                            <button class="btn btn-danger" data-fancybox :data-src="'#delete'+data.index" title="Delete Transaction" style="margin: 0 5px"><b-icon icon="trash2-fill"></b-icon></button>
                                        </span>

                                        <!-- Delete Transaction -->
                                        <div style="display:none" :id="'delete'+data.index" >
                                            <h2>Watch Out!</h2>
                                            <p>Are you sure wanna delete <span v-if="data.item.user"><b>{{data.item.user}}</b>'s</span> <span v-else>this</span> transaction?</p>
                                            <div class=" d-flex justify-content-center">
                                            <button type="button" data-fancybox-close @click="checkTransactionId(data.index)" class="btn btn-outline-secondary col-5" style="margin: 0 5px">Cancel</button>
                                            <button type="button" @click="removeTransaction(data.index)" data-fancybox-close class="btn btn-danger col-5 " style="margin: 0 5px">YASHH!</button>
                                            </div>
                                        </div>
                                        
                                        <!-- Reject Transaction -->
                                        <div style="display:none" :id="'reject'+data.index" >
                                            <h2>Are you sure?</h2>
                                            <p>Why do you wanna <b>reject</b> <span v-if="data.item.user"><b>{{data.item.user}}</b>'s</span> <span v-else>this</span> transaction?</p>
                                            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                            <input type="text" v-model="rejectReason" class="form-control">
                                            </div>
                                            <div class=" d-flex justify-content-center">
                                            <button type="button" data-fancybox-close @click="checkTransactionId(data.index)" class="btn btn-outline-secondary col-5" style="margin: 0 5px">Cancel</button>
                                            <button type="button" @click="rejectTransaction(data.index)" data-fancybox-close class="btn btn-danger col-5 " style="margin: 0 5px">REJECT!</button>
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

            <!-- ONLY FOR DEVELOPING -->
              <!-- <div class="card bg-dark">
                <div class="card-header"> <h3>List Transaksi User</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{transactions}}</pre>
                      </div>
                    </div>
                </div>
              </div> -->
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
            transactions: [],
            info: '',
            rejectReason: '',
            perPage: 10,
            currentPage: 1,
            fields: ['no', 'user', 'members', 'item', 'total', 'status', 'payment', 'date', 'action']
        }
    },
    methods: {
        acceptTransaction(index) {
            this.axios.put('transaction/accept/'+this.transactions[index].transactionId).then(response => {
                this.getUserTransaction()
                console.log(response);
                console.log('Transaction Accepted');
            }).catch(error => {
                console.log(error.response);
            })
        },
        rejectTransaction(index) {
            this.axios.put('transaction/reject/'+this.transactions[index].transactionId, {reason: this.rejectReason}).then(response => {
                this.getUserTransaction()
                console.log(response);
                console.log('Transaction Rejected');
            }).catch(error => {
                console.log(error.response);
            })
        },
        checkTransactionId(index){
            console.log(this.transactions[index].transactionId);
        },
        removeTransaction(index) {
            let transactionId = this.transactions[index].transactionId
            console.log(transactionId);
            this.axios.delete('transaction/delete/'+transactionId).then(response => {
                console.log(response)
                console.log('Berhasil menghapus transaksi');
                this.transactions.slice(0, 1)
                this.getUserTransaction()
            }).catch(err => {
                console.log(err.response);
            })
            this.action = true
            this.info = 'Berhasil menghapus transaksi'
            console.log(this.info)
        },
        getUserTransaction(){
            // let headers = {
            //     "headers": {
            //         "content-type": "application/json",
            //     },
            // }
            this.axios.get('/transaction/list/admin').then(response => {
                this.transactions = response.data.data
            })
        }
    },
    mounted() {
        this.getUserTransaction()
    },
    computed: {
        rows() {
            return this.transactions.length
        }
    }
}
</script>

<style>

</style>