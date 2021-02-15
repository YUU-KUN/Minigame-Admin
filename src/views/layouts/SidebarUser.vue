<template>
<ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar" style="background-color: #111;">
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="">
        <span v-if="whoami">Halo, {{userProfile}}</span> <span v-else>Halo, User</span>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <li class="nav-item">
        <router-link to="/user" class="nav-link">
            <i class="fas fa-fw fa-school"></i>
            <span>Dashboard</span>
        </router-link>
    </li>

    <li class="nav-item">
        <router-link to="/user/transaction" class="nav-link">
            <i class="fas fa-fw fa-school"></i>
            <span>Transaction</span>
        </router-link>
    </li>

    <li class="nav-item">
        <router-link to="/user/cart" class="nav-link">
            <i class="fas fa-fw fa-school"></i>
            <span>Cart</span>
        </router-link>
    </li>
</ul>
</template>

<script>
export default {
    data() {
        return {
            whoami: false,
            userProfile: '',
        }
    },
    methods: {
        // whoAmi() {
        //     this.axios.get('user/profile').then(response => {
        //         this.userProfile = response.data.data.name
        //     })
        // }
    },
    mounted() {
        // this.whoAmi()
    }

}
</script>

<style>

</style>