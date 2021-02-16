<template>
<div>
    <form v-on:submit.prevent="Login">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" placeholder="Email" id="email" v-model="email" name="email">
            
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Password" id="password" v-model="password" name="password">
            
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
        Login() {
            let email = this.email 
            let password = this.password
            this.$store.dispatch('login', { email, password })
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>