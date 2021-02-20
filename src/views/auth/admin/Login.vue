<template>
    <div class="row" id="ioginPanel">
        <div class="col-8"></div>
        <div class="col" style="background: white; right: 0; opacity: 0.85; height: 100%">
            <div class="row d-flex justify-content-center" style="padding: 0 10px; height: 100% ">
                <form @submit.prevent="login">
                    <div class="row d-flex justify-content-center">
                        <h2 style="text-align:center;">
                            Hi there!
                            <br>
                            Welcome to Admin Login Page!
                        </h2>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="email" ><h4 ><b-icon icon="envelope-fill" style="margin-right: 10px"></b-icon>Email</h4></label>
                        <input type="email" class="form-control form-control-lg" id="email" aria-describedby="emailHelp" placeholder="youremail@dress.com" v-model="email">
                    </div>
                    <p></p>
                    <div class="form-group">
                        <label for="password"> <h4><b-icon icon="shield-lock-fill" style="margin-right: 10px"></b-icon>Password</h4></label>
                        <input type="text" class="form-control form-control-lg" id="password" placeholder="Password" v-model="password">
                    </div>
                    <div class="form-group form-check" >
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <div class="d-flex justify-content-between">
                            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                            <label class="form-check-label"><a href="">Forgot You Password?</a></label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block btn-lg" style="width:100%; margin:10px auto">Login</button>
                    <div class="row d-flex justify-content-center" style="text-align:center;">
                        <span>Doesn't have account? <a href="">Sign up</a></span>
                    </div>
                </form>
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
            .then(response => {
                // Buat Toast
                let successMessage = 'Selamat Datang Admin'
                const titleSuccess = response.data.message
                this.makeToast('success', titleSuccess, successMessage)

                setTimeout(() => {
                    this.$router.push('/')
                }, 2000);
            })
            .catch(err => {
                    const titleError = 'Terdapat Kesalahan'
                    if (err.response.data[0]) {
                        let errorMessage = err.response.data[0].message
                        this.makeToast('danger', titleError, errorMessage)
					} else {
                        let errorMessage = err.response.data.message;
                        this.makeToast('danger', titleError, errorMessage)
                    }
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
        html {
            height: 100%;
            width: 100%;
        }

        body {
            width: 100%;
            height: 100%;
            background-image: url('../../../../public/admin/img/bg-login.jpg');
            background-repeat: no-repeat;
        }

        #ioginPanel {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        form {
            width: 100%;
            margin: auto 15px
        }

        .form-group {
            margin: 20px auto
        }
        
        a {
            text-decoration: none;
        }
</style>