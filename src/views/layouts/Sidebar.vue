<template>
<ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar" style="background-color: #111;">
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="">
        <span>Halo, {{whoami.name}}</span>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <li class="nav-item">
        <router-link to="/" class="nav-link">
            <i class="fas fa-fw fa-school"></i>
            <span>Dashboard</span>
        </router-link>
    </li>

    <li class="nav-item">
        <router-link to="/users" class="nav-link">
            <i class="fas fa-fw fa-school"></i>
            <span>User</span>
        </router-link>
    </li>

    <li class="nav-item">
        <router-link to="/games" class="nav-link">
            <i class="fas fa-fw fa-school"></i>
            <span>Game</span>
        </router-link>
    </li>

    <li class="nav-item">
        <router-link to="/codes" class="nav-link">
            <i class="fas fa-fw fa-school"></i>
            <span>Code</span>
        </router-link>
    </li>

    <li class="nav-item">
        <router-link to="/transactions" class="nav-link">
            <i class="fas fa-fw fa-school"></i>
            <span>Transactions</span>
        </router-link>
    </li>

    <li class="nav-item" >
        <div class="nav-link" @click="logout" style="cursor: pointer">
            <i class="fas fa-fw fa-school"></i>
            <span>Logout</span>
        </div>
    </li>
</ul>
</template>

<script>
export default {
    data() {
        return {
            whoami: '',
        }
    },
    methods: {
        whoAmI() {
            this.axios.get('admin/profile').then(response => {
                this.whoami = response.data.data
            })
        },
        logout() {
            console.log('Logout Terpencet');
            this.$store.dispatch('logout')
            .then(() => this.$router.push('/login'))
            .catch(err => console.log(err))
        }
    },
    mounted() {
        this.whoAmI()
    }

}
</script>

<style>

</style>