<template>
<div style="text-align:center; justify-content:center; margin:200px auto" >
    <div class="row" style="margin: 25px">
        <div class="col">
            <div class="d-flex justify-content-center">
                <router-link to="/users" style="text-decoration: none">
                    <div class="col" >
                        <div class="card" style="width: 18rem; height: 200px; background-color: #111; border-color:#111; ">
                            <div class="card-body" style="padding: 50px 0">
                                <div class="col">
                                    <img src="../../public/assets/icons/2 Friends.svg" class="card-img-top" alt="..." style="margin:auto; width: 50px">
                                </div>
                                <br>
                                <h3 class="card-text"><strong>{{totalUser.length}} User<span v-if="totalUser.length > 1">s</span></strong></h3>
                            </div>
                        </div>
                    </div>
                </router-link>

                <router-link to="/games" style="text-decoration: none">
                    <div class="col" >
                        <div class="card" style="width: 18rem; height: 200px; background-color: #111; border-color:#111; ">
                            <div class="card-body" style="padding: 50px 0">
                                <div class="col">
                                    <img src="../../public/assets/icons/Games.svg" class="card-img-top" alt="..." style="margin:auto; width: 50px">
                                </div>
                                <br>
                                <h3 class="card-text"><strong>{{totalGame.length}} Game<span v-if="totalGame.length > 1">s</span></strong></h3>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <div class="row" style="margin: 25px">
        <div class="col">
            <div class="d-flex justify-content-center">
                <router-link to="/codes" style="text-decoration: none">
                    <div class="col" >
                        <div class="card" style="width: 18rem; height: 200px; background-color: #111; border-color:#111; ">
                            <div class="card-body" style="padding: 50px 0">
                                <div class="col">
                                    <img src="../../public/assets/icons/Codes.svg" class="card-img-top" alt="..." style="margin:auto; width: 50px">
                                </div>
                                <br>
                                <h3 class="card-text"><strong>{{totalCode.length}} Code<span v-if="totalCode.length > 1">s</span></strong></h3>
                            </div>
                        </div>
                    </div>
                </router-link>

                <router-link to="/transactions" style="text-decoration: none">
                    <div class="col" >
                        <div class="card" style="width: 18rem; height: 200px; background-color: #111; border-color:#111; ">
                            <div class="card-body" style="padding: 50px 0">
                                <div class="col">
                                    <img src="../../public/assets/icons/Transactions.svg" class="card-img-top" alt="..." style="margin:auto; width: 50px">
                                </div>
                                <br>
                                <h3 class="card-text"><strong>{{totalTransaction.length}} Transaction<span v-if="totalTransaction.length > 1">s</span></strong></h3>
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
export default {
    data() {
        return {
            totalUser: '',
            totalGame: '',
            totalTransaction: '',
            totalCode: '',
        }
    },
    methods: {
        getTotalUsers() {
            this.axios.get('user/list-admin').then(response => {
                this.totalUser = response.data.data
            }).catch(error => {
                console.log(error.response);
            })
        },
        getTotalGames() {
            this.axios.get('game/list').then(response => {
                this.totalGame = response.data.data
            }).catch(error => {
                console.log(error.response);
            })
        },
        getTotalTransactions() {
            this.axios.get('transaction/list/admin').then(response => {
                this.totalTransaction = response.data.data
            }).catch(error => {
                console.log(error.response);
            })
        },
        getTotalCodes() {
            this.axios.get('code/list').then(response => {
                this.totalCode = response.data.data
                console.log(this.totalCode);
            }).catch(error => {
                console.log(error.response);
            })
        }
    },
    mounted() {
        this.getTotalUsers()
        this.getTotalGames()
        this.getTotalTransactions()
        this.getTotalCodes()
    }
}
</script>

<style>

</style>