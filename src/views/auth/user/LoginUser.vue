<template>
<div>
    <form v-on:submit.prevent="loginUser">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" placeholder="Email" id="email" v-model="email" name="email">
            
            <label for="password">Password</label>
            <input type="text" class="form-control" placeholder="Password" id="password" v-model="password" name="password">
            
            <button class="btn btn-primary btn-block" type="submit">Login</button>
        </div>
    </form>
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
        loginUser() {
            let email = this.email 
            let password = this.password
            this.$store.dispatch('loginUser', { email, password })
            .then(() => 
            setTimeout(this.$router.push('/user'), 3000)
            )
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

</style>