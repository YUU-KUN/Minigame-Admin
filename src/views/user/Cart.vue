<template>
<div class="container-fluid" style="margin-top:100px">
  <div class="row">
        <div class="col-md-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Keranjang Anda</h6>
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
                                            <!-- <th>No.</th> -->
                                            <th>Items</th>
                                            <th>Members</th>
                                            <th>Play Date</th>
                                            <th>Price</th>
                                            <th>Created At</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                          <!-- <tr v-for="(cart, index) in userCart" :key="index">
                                              <td>{{index+1}}</td>
                                              <td>
                                                {{cart.cartGameData}}
                                                <span v-for="(game, index) in userCart.items" :key="index">{{game.cartGameData.name}}</span>
                                              </td>
                                              <td v-for="(member, index) in cart.members" :key="index">{{member.name}}</td>
                                              <td>{{cart.datePlay}}</td>
                                              <td>{{cart.total}}</td>
                                              <td>{{cart.createdAt}}</td>
                                              <td class="d-flex justify-content-center">
                                                  <button class="btn btn-danger" v-on:click="deleteCart(index)">Delete</button>
                                              </td>
                                          </tr> -->

                                          <!-- worked -->
                                          <!-- <tr>
                                            <td>
                                              <span v-for="(cart, index) in userCart.items" :key="index">{{cart.cartGameData.title}}</span>
                                            </td>
                                            <td>
                                              <span v-for="(cart, index) in userCart.items" :key="index">
                                                <span v-for="(members, index) in cart.members" :key="index">{{members.name}}</span>
                                                </span>
                                            </td>
                                            <td>
                                              {{userCart}}
                                            </td>
                                          </tr> -->

                                          <tr v-for="(cart, index) in userCart.items" :key="index">
                                            <td>{{index+1}}</td>
                                            <td>
                                              {{cart.cartGameData.title}}
                                            </td>
                                            <td>{{cart.datePlay | formatDate}}</td>
                                            <td>{{cart.price}}</td>
                                            <td>{{cart.createdAt | formatDate}}</td>
                                            <td class="d-flex justify-content-center">
                                                  <button class="btn btn-danger" v-on:click="deleteCart(index)">Delete</button>
                                            </td>
                                          </tr>
                                          
                                    </tbody>
                                </table>
                            </div>
                            <button class="btn btn-primary" @click="checkOut">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ONLY FOR DEVELOPING -->
              <div class="card bg-light">
                <div class="card-header"> <h3>List Cart User</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{userCart}}</pre>
                      </div>
                    </div>
                </div>
              </div>
              <div class="card bg-light">
                <div class="card-header"> <h3>Cart iD</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{cartId}}</pre>
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

        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            userCart: '',
            removed: false,
            info: false,
            cartId: '',
        }
    },
    methods: {
        getCart() {
            axios.get('/cart/user').then(response => {
                this.userCart = response.data.data
                this.cartId = response.data.data.cartId
            })
        },
        deleteCart(index) {
            let headers = {
                "headers": {
                    "content-type": "application/json",
                },
            }
            axios.put(`/cart/remove/${this.cartId}`, headers).then(response => {
              console.log(response)
              console.log('Berhasil Menghapus Dari Keranjang')
            })
            this.info = true
        },
        checkOut() {
          axios.post('transaction/checkout', this.cartId).then(response => {
            console.log(response)
            console.log('Berhasil Checkout Keranjang!')
          })
        }
    },
    mounted() {
        this.getCart()
    }
}
</script>

<style>

</style>