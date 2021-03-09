<template>
    <div class="row" id="ioginPanel">
        <div class="col-8"></div>
        <div class="col" style="background: white; right: 0; height: 100%">
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
                        <!-- <input type="text" class="form-control form-control-lg" id="password" placeholder="Password" v-model="password"> -->
                        <input :type="passwordFieldType" class="form-control form-control-lg" id="password" placeholder="Password" v-model="password">
                        <span @click="showPassword()" class="field-icon"><b-icon :icon="icon"></b-icon></span>
                    </div>
                    <div class="form-group form-check" >
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <div class="d-flex justify-content-between">
                            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                            <label class="form-check-label"><a href="">Forgot You Password?</a></label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block btn-lg" style="width:100%; margin:10px auto">
                        <span v-if="loading" class="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
                        <span v-else>Sign In</span>
                    </button>
                    <div class="row d-flex justify-content-center" style="text-align:center;">
                        <span>Don't have an account? <a href=""><b>Sign up now!</b></a></span>
                    </div>
                </form>
            </div>
        </div>
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
            toastVariant: '',

            // show password
            passwordFieldType: 'password',
            icon: 'eye',

            loading: false
        }
    },
    methods: {
        login() {
            this.loading = true
            this.date = moment(0)
            let email = this.email 
            let password = this.password
            this.$store.dispatch('login', { email, password })
            .then(response => {
                this.loading = false
                // Buat Toastnya
                this.toastVariant = 'success'
                this.toastMessage = 'Selamat Datang Admin'
                this.toastTitle = response.data.message
                this.$bvToast.show('my-toast')
                this.$router.push('/')
            })
            .catch(err => {     
                this.loading = false
                    this.$bvToast.show('my-toast')
                    this.toastVariant = 'danger'
                    this.toastTitle = 'Terdapat Kesalahan'
                    if (err.response.data[0]) {
                        this.toastMessage = err.response.data[0].message
				    } else {
                        this.toastMessage = err.response.data.message;
                    }
                }
            )
        },
        showPassword() {
                this.icon = this.icon === 'eye' ? 'eye-slash' : 'eye'
                this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
        }
    },
    computed: {
        time(){
            return this.date.format('s');
        }
    },

    mounted(){
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
        background-image: url('../../../public/admin/img/bg-login.png');
        background-repeat: no-repeat;
        background-size: cover;
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
    /* show / hide password */
    .field-icon {
        float: right; 
        margin-left: -25px; 
        margin-right: 25px; 
        margin-top: -35px; 
        position: relative; 
        z-index: 2;
    }
</style>