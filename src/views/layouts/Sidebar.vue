<template>
<ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar" style="background-color: #111;">
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="">
        <span>Halo, Admin</span>
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
        <router-link to="/leaderboard" class="nav-link">
            <i class="fas fa-fw fa-school"></i>
            <span>Leaderboard</span>
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
        return {}
    },
    methods: {
        logout() {
            console.log('Logout Clicked');
            this.$store.dispatch('logout')
            .then(() => this.$router.push('/login'))
            .catch(err => console.log(err))
        }
    },
    mounted() {
    }

}
</script>

<style>
.nav-item a.router-link-exact-active::before{
  position: absolute;
  content: "";
  left: 5px;
  width: 5px;
  height: 23px;
  background: #5f6be3;
  border-radius: 25px;
}
</style>