<template>
<div class="container-fluid" style="margin-top:100px">
    <div class="row">
        <div class="col-md-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Code</h6>
                </div>
                <div class="card-body">
                    <div v-if="generated" class="alert alert-success alert-dismissible fade show" role="alert">
                      {{info}} <b>{{newCode}}</b>
                      <button type="button" @click="generated = false" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mt-3">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>User</th>
                                            <th>Game</th>
                                            <th>Playing Schedule</th>
                                            <th>Code</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(user, index) in userlist" :key="index">
                                            <td>{{index+1}}</td>
                                            <td>{{user.userData.name}}</td>
                                            <td>{{user.gameData.gameTitle}}</td>
                                            <td>{{user.playingSchedule | formatDate}}</td>
                                            <td>{{user.uniqueCode}}</td>
                                            <td>
                                                <div v-if="user.isExpired">Expired</div>
                                                <div v-else>Available</div>
                                            </td>
                                            <td>
                                                <button class="btn btn-success" style="margin: 0 5px" data-fancybox :data-src="'#'+index">
                                                    Generate
                                                </button>
                                                <!-- <button class="btn btn-danger" style="margin: 0 5px" data-fancybox :data-src="'#deleteCodeList'+index" >Delete</button> -->
                                                <div style="display: none;" :id="index">
                                                    <h2>Generate New Code</h2>
                                                    <p>Please select the date to play!</p>
                                                    <div class="form">
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <div class="panel panel-default">
                                                                        <div class="panel-body">
                                                                            <div class="col">
                                                                                <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                                        <label for="date"><strong>Date</strong></label>
                                                                                        <input type="date" id="date" class="form-control" v-model="date">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col">
                                                                                <div class="form-group" style="display: flex; align-items: flex-end; justify-content: space-between;">
                                                                                    <div class="input-container" style="flex-grow: 1;  ">
                                                                                        <label for="time"><strong>Time</strong></label>
                                                                                        <select name="time" v-model="time" id="time" class="form-control">
                                                                                            <option value="" selected>Choose new play tIme!</option>
                                                                                            <option :value="index+1" v-for="(time, index) in chooseTime" :key="index">{{time}}</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-12">
                                                                                <div class="form-group" >
                                                                                    <div class="input-container" style="flex-grow: 1;">
                                                                                        <button @click="generate(index)" data-fancybox-close class="btn btn-success d-flex align-items-center justify-content-center" style="width:100%">
                                                                                            <b>Generate</b>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <!-- Delete Confirmation -->
                                                <!-- <div style="display:none" :id="'deleteCodeList'+index" class="animated-modal">
                                                    <h2>Watch Out!</h2>
                                                    <p>Are you sure wanna delete?</p>
                                                    <div class=" d-flex justify-content-center">
                                                    <button type="button" data-fancybox-close class="btn btn-outline-secondary col-5" style="margin: 0 5px">Cancel</button>
                                                    <button type="button" @click="removeCodeList(index)" data-fancybox-close class="btn btn-danger col-5 " style="margin: 0 5px">Delete!</button>
                                                    </div>
                                                </div> -->

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      

            

            <!-- ONLY FOR DEVELOPING -->
            <!-- <div class="card bg-light">
                <div class="card-header"> <h3>Data Kode Baru</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{newCode}}</pre>
                      </div>
                    </div>
                </div>
              </div> -->

            <!-- <div class="card bg-light">
                <div class="card-header"> <h3>Data User</h3> </div>
                  <div class="card-inner">
                    <div class="card bg-dark">
                      <div class="card-inner bg-dark">
                        <pre class="text-warning">{{userlist}}</pre>
                      </div>
                    </div>
                </div>
              </div> -->
              <!-- ONLY FOR DEVELOPING -->

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            userlist: '',
            generated: false,
            date: '',
            time: '',
            chooseTime: [
                '09.00',
                '12.00',
                '15.00',
                '19.00'
            ],
            allCode: '',
            newCode: '',
        }
    },
    methods: {
        generate(index) {
            console.log(index);
            let headers = {
                "headers": {
                    "content-type": "application/json",
                },
            }
            let codeId = this.userlist[index].codeId
            this.axios.put('code/generate/'+codeId, {
                playDate: this.date,
                time: this.time
            }, headers).then(response => {
                this.newCode = response.data.data.uniqueCode
                console.log(this.newCode)
                this.getUserCode()
            }).catch(error => {
                console.log(error.response)
            })
            this.generated = true
            this.info = 'Berhasil generate Kode. Kode '+ this.userlist[index].userData.name+ ' adalah ' 
            console.log('Success Generate')
        },
        getUserCode() {
            this.axios.get('code/list').then(response => {
                this.userlist = response.data.data.reverse()
            })
        },
    },
    mounted() {
        this.getUserCode()
    },
}
</script>

<style>

</style>