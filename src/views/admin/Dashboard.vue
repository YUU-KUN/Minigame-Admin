<template>
<div style="text-align:center; justify-content:center; margin:200px auto" >
    <div class="row" style="margin: 25px">
        <div class="col">
            <div class="d-flex justify-content-center">
                <!-- <div style="align-items:center"> -->
                <router-link to="/users">
                <div class="col" >
                    <div class="card" style="width: 18rem; height: 200px; background-color: #111; border-color:#111; ">
                    <div class="card-body" style="padding: 50px 0">
                        <div class="col">
                            <img src="../../../public/assets/icons/2 Friends.svg" class="card-img-top" alt="..." style="margin:auto; width: 50px">
                        </div>
                        <br>
                        <h3 class="card-text"><strong>{{totalUser.length}} Users</strong></h3>
                    </div>
                    </div>
                </div>
                </router-link>

                <router-link to="/games">
                <div class="col" >
                    <div class="card" style="width: 18rem; height: 200px; background-color: #111; border-color:#111; ">
                    <div class="card-body" style="padding: 50px 0">
                        <div class="col">
                            <img src="../../../public\assets\icons\Games.svg" class="card-img-top" alt="..." style="margin:auto; width: 50px">
                        </div>
                        <br>
                        <h3 class="card-text"><strong>{{totalGame.length}} Games</strong></h3>
                    </div>
                    </div>
                </div>
                </router-link>
            <!-- </div> -->
            </div>
        </div>
    </div>
    <div class="row" style="margin: 25px">
        <div class="col">
            <div class="d-flex justify-content-center">
                <router-link to="/codes">
                <div class="col" >
                    <div class="card" style="width: 18rem; height: 200px; background-color: #111; border-color:#111; ">
                    <div class="card-body" style="padding: 50px 0">
                        <div class="col">
                            <img src="../../../public\assets\icons\Codes.svg" class="card-img-top" alt="..." style="margin:auto; width: 50px">
                        </div>
                        <br>
                        <h3 class="card-text"><strong>102 Codes</strong></h3>
                    </div>
                    </div>
                </div>
                </router-link>

                <router-link to="/transactions">
                <div class="col" >
                    <div class="card" style="width: 18rem; height: 200px; background-color: #111; border-color:#111; ">
                    <div class="card-body" style="padding: 50px 0">
                        <div class="col">
                            <img src="../../../public\assets\icons\Transactions.svg" class="card-img-top" alt="..." style="margin:auto; width: 50px">
                        </div>
                        <br>
                        <h3 class="card-text"><strong>{{totalTransaction.length}} Transactions</strong></h3>
                    </div>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            totalUser: '',
            totalGame: '',
            totalTransaction: '',
        }
    },
    methods: {
        getTotalUsers() {
            axios.get('user/list').then(response => {
                this.totalUser = response.data.data
            })
        },
        getTotalGames() {
            axios.get('game/list').then(response => {
                this.totalGame = response.data.data
            })
        },
        getTotalTransactions() {
            axios.get('transaction/list').then(response => {
                this.totalTransaction = response.data.data
            })
        },
    },
    mounted() {
        this.getTotalUsers()
        this.getTotalGames()
        this.getTotalTransactions()
    }
}
</script>

<style>

</style>