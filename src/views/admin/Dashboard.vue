<template>
<div style="text-align:center; justify-content:center; margin:200px auto" >
    <div class="row" style="margin: 25px">
        <div class="col">
            <div class="d-flex justify-content-center">
                <!-- <div style="align-items:center"> -->
                <router-link to="/users">
                <div class="col" >
                    <div class="card" style="width: 18rem; height: 200px; background-color: #111; border-color:#111; ">
                    <div class="card-body" style="padding: 50px 0">
                        <div class="col">
                            <img src="../../../public/assets/icons/2 Friends.jpg" class="card-img-top" alt="..." style="margin:auto; width: 50px">
                        </div>
                        <br>
                        <h3 class="card-text"><strong>900 Users</strong></h3>
                    </div>
                    </div>
                </div>
                </router-link>

                <router-link to="/games">
                <div class="col" >
                    <div class="card" style="width: 18rem; height: 200px; background-color: #111; border-color:#111; ">
                    <div class="card-body" style="padding: 50px 0">
                        <div class="col">
                            <img src="../../../public\assets\icons\Games.jpg" class="card-img-top" alt="..." style="margin:auto; width: 50px">
                        </div>
                        <br>
                        <h3 class="card-text"><strong>5 Games</strong></h3>
                    </div>
                    </div>
                </div>
                </router-link>
            <!-- </div> -->
            </div>
        </div>
    </div>
    <div class="row" style="margin: 25px">
        <div class="col">
            <div class="d-flex justify-content-center">
                <router-link to="/codes">
                <div class="col" >
                    <div class="card" style="width: 18rem; height: 200px; background-color: #111; border-color:#111; ">
                    <div class="card-body" style="padding: 50px 0">
                        <div class="col">
                            <img src="../../../public\assets\icons\2 Friends.jpg" class="card-img-top" alt="..." style="margin:auto; width: 50px">
                        </div>
                        <br>
                        <h3 class="card-text"><strong>102 Codes</strong></h3>
                    </div>
                    </div>
                </div>
                </router-link>

                <router-link to="/transactions">
                <div class="col" >
                    <div class="card" style="width: 18rem; height: 200px; background-color: #111; border-color:#111; ">
                    <div class="card-body" style="padding: 50px 0">
                        <div class="col">
                            <img src="../../../public\assets\icons\Games.jpg" class="card-img-top" alt="..." style="margin:auto; width: 50px">
                        </div>
                        <br>
                        <h3 class="card-text"><strong>80 Transactions</strong></h3>
                    </div>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>