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

    <li class="nav-item"  style="bottom:0; position:absolute">
        <div class="nav-link" data-fancybox data-src="#option" style="cursor: pointer">
            <i class="fas fa-fw fa-school"></i>
            <span>Option</span>
        </div>
    </li>

    <!-- Option Fancybox -->
    <div style="display:none" id="option">
        <div class="form">
            <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                <div class="input-container" style="flex-grow: 1;  ">
                    <label for="bg_login"><strong>Change Login Background</strong></label>
                    <input type="file" id="bg_login" accept="image/*" ref="bg_login" class="form-control" @change="onLoginChange">
                </div>
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" @click="updateLoginBg" style="width:100%" type="button">Simpan</button>
            </div>
        </div>
    </div>
</ul>
</template>

<script>
export default {
    data() {
        return {
            login_bg: "",
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
            .then(() => this.$router.push('/login'))
            .catch(err => console.log(err))
        },
        onLoginChange() {
            const reader = new FileReader()
            reader.onload = (e) => {
              this.login_bg = e.target.result
            }
            const bg_login = this.$refs.bg_login.files[0]
            reader.readAsDataURL(bg_login)
        },
        updateLoginBg() {
            const data = {
                image: this.login_bg
            }
            this.axios.put('endpoint', data).then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
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