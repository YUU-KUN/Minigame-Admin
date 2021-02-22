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

        <!-- <b-button @click="$bvToast.show('my-toast')">Show toast</b-button> -->

    <b-toast id="my-toast" :variant="toastVariant" solid>
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
          <strong class="mr-auto">{{toastTitle}}</strong>
          <small class="text-muted mr-2">{{time}} seconds ago</small>
        </div>
      </template>
      <b>{{toastMessage}}</b>
    </b-toast>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            email: '',
            password: '',
            date: moment(0),
            toastTitle: '',
            toastMessage: '',
            toastVariant: ''
        }
    },
    methods: {
        login() {
            this.date = moment(0)
            let email = this.email 
            let password = this.password
            this.$store.dispatch('login', { email, password })
            .then(response => {
                // Buat Toastnya
                this.toastVariant = 'success'
                this.toastMessage = 'Selamat Datang Admin'
                this.toastTitle = response.data.message
                // this.makeToast('success', this.toastTitle, toastMessage)
                this.$bvToast.show('my-toast')

                setTimeout(() => {
                    this.$router.push('/')
                }, 2000);
            })
            .catch(err => {
                    this.$bvToast.show('my-toast')
                    this.toastVariant = 'danger'
                    this.toastTitle = 'Terdapat Kesalahan'
                    if (err.response.data[0]) {
                        this.toastMessage = err.response.data[0].message
                        // this.makeToast('danger', this.toastTitle, toastMessage)
				    } else {
                        this.toastMessage = err.response.data.message;
                        // this.makeToast('danger', this.toastTitle, toastMessage)
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
        },
        
    },
    computed: {
        time: function(){
            return this.date.format('s');
        }
    },

    mounted: function(){
  	var timer = setInterval(() => {
        this.date = moment(this.date.add(1, 'seconds'));
        if(this.date.diff(moment(0)) === 100){
          clearInterval(timer);
        }
    }, 1000);
  }

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
            background-image: url('../../../public/admin/img/bg-login.jpg');
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