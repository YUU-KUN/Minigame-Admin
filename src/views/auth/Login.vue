<template>
<div>
    <form v-on:submit.prevent="login">
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
        login() {
            let email = this.email 
            let password = this.password
            this.$store.dispatch('login', { email, password })
            // .then(() => this.$router.push('/'))
            .then(response => {
                this.$router.push('/')
                console.log(response)
            })
            .catch(err => console.log(err.response))
        }
    }
}
</script>

<style>

</style>