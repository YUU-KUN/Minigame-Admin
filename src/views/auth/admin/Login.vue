<template>
<div>
        <!-- <div class="col-8 bg-image">
            <img src="../../../../dist/img/bg-login.jpg" width="100%" alt="">
        </div> -->

        <!-- <div class="col-4" style="float: right">
            <div class="row-12">
        <div id="login">
            <form v-on:submit.prevent="login">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" placeholder="Email" id="email" v-model="email" name="email">

                    <label for="password">Password</label>
                    <input type="text" class="form-control" placeholder="Password" id="password" v-model="password" name="password">

                    <button class="btn btn-primary btn-block" type="submit">Login</button>
                </div>
            </form>
        </div>
        </div>
        </div> -->
        <div class="col-4" style="right: 0; float: right;">
        <div class="test">
            <div id="login">
                <form v-on:submit.prevent="login">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" placeholder="Email" id="email" v-model="email" name="email">

                        <label for="password">Password</label>
                        <input type="text" class="form-control" placeholder="Password" id="password" v-model="password" name="password">

                        <button class="btn btn-primary btn-block" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
        </div>

        
</div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',

        }
    },
    methods: {
        login() {
            let email = this.email 
            let password = this.password
            this.$store.dispatch('login', { email, password })
            // .then(() => this.$router.push('/'))
            .then(response => {
                this.$router.push('/')
                console.log(response);
                console.log('Selamat Datang Admin');
            })
            .catch(
                err => {
                    let errorMessage = err.response.data.message;
                    console.log(errorMessage);
                    const titleError = 'Error'
                    this.makeToast('danger', titleError, errorMessage)
                }
            )
        },
        makeToast(variant = 'default', title, message) {
            this.$bvToast.toast(message, { //body
                title: title, //atas
                variant: variant,
                solid: true
            })
        }
    },
}
</script>

<style>
/* html {
    background-image: url('../../../../public/admin/img/bg-login.jpg');
    /* background-repeat:none;
    background-position:cover; 
}  */
#login {
    float: right;
    background-color: white;
    height: 100%;
    margin: auto 15px;
    width: 100%
}

.test {
    /* display: block;
    background-color:red;
    height: 100%;
    width: 400px; */

    /* position: fixed; */
    right: 0;
    float: right;
    padding: 15px;
    margin-right: 15px;
    z-index: 1000;
    top: 91px;
    height: 100%;
    width: 100%;
    /* width: 250px; */
    text-align: center;
    background-color: #e6e6e6;
    overflow-y: auto;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;

}
</style>