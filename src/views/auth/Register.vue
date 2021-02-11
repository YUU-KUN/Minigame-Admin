<template>
  <div>
      <h1>Welcome to Register Page!</h1>

      <div class="container">
          <form @submit.prevent="Register" class="form-group">
              <label for="email">Email</label>
              <input type="text" id="email" class="form-control" placeholder="Email" name="email" v-model="email">

              <label for="password">Password</label>
              <input type="password" id="password" class="form-control" placeholder="Password" name="password" v-model="password">
              <button type="submit" class="btn btn-primary">Register</button>
          </form>
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
        Register() {
            let email = this.email 
            let password = this.password
            console.log(email, password);
            this.$store.dispatch('register', { email, password })
            .then(() => this.$router.push('/login'))
            .catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>