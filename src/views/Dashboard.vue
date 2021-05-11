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
                                <h3 class="card-text">
                                    <span v-if="loading" class="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
                                    <span v-else><strong>{{userCount}} User<span v-if="userCount > 1">s</span></strong></span>
                                </h3>
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
                                <h3 class="card-text">
                                    <span v-if="loading" class="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
                                    <span v-else><strong>{{gameCount}} Game<span v-if="gameCount > 1">s</span></strong></span>
                                </h3>
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
                                <h3 class="card-text">
                                    <span v-if="loading" class="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
                                    <span v-else><strong>{{codeCount}} Code<span v-if="codeCount > 1">s</span></strong></span>
                                </h3>
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
                                <h3 class="card-text">
                                    <span v-if="loading" class="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
                                    <span v-else><strong>{{transactionCount}} Transaction<span v-if="transactionCount > 1">s</span></strong></span>
                                </h3>
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
            userCount: '',
            gameCount: '',
            transactionCount: '',
            codeCount: '',

            loading: false,
        }
    },
    methods: {
        getDashboard() {
            this.loading = true
            this.axios.get('dashboard/admin').then(response => {
                this.userCount = response.data.data.userCount
                this.gameCount = response.data.data.gameCount
                this.transactionCount = response.data.data.transactionCount
                this.codeCount = response.data.data.codeCount
                this.loading = false
            }).catch(error => {
                this.loading = false
                console.log(error);
                this.$store.dispatch('logout')
            })
        },
    },
    mounted() {
        this.getDashboard()
    }
}
</script>

<style>

</style>