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
                                <!-- <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> -->

                                <b-table
                                  id="my-table"
                                  class="table table-bordered"
                                  :items="userlist"
                                  :per-page="perPage"
                                  :current-page="currentPage"
                                  :fields="fields"
                                >

                                    <template v-slot:cell(no)="data">
                                        <span>{{data.index+1}}</span>
                                    </template>
                                    <template v-slot:cell(user)="data">
                                        {{data.item.userData.name }}
                                    </template>
                                    <template v-slot:cell(game)="data">
                                        {{data.item.gameData.gameTitle }}
                                    </template>
                                    <template v-slot:cell(playing_schedule)="data">
                                        <!-- {{data.item.playingSchedule | formatDate}} -->
                                        {{playingSchedule(data.item.playingSchedule)}}
                                    </template>
                                    <template v-slot:cell(code)="data">
                                        {{data.item.uniqueCode}}
                                    </template>
                                    <template v-slot:cell(status)="data">
                                        <span v-if="data.item.isPlayed"><b-badge variant="warning">Expired</b-badge></span>
                                        <span v-else><b-badge variant="success">Available</b-badge></span>
                                    </template>
                                    <template v-slot:cell(action)="data">
                                        <button class="btn btn-success" style="margin: 0 5px" data-fancybox :data-src="'#'+data.index">
                                            Generate
                                        </button>
                                        <div style="display: none;" :id="data.index">
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
                                                                                <button @click="generate(data.index)" data-fancybox-close class="btn btn-success d-flex align-items-center justify-content-center" style="width:100%">
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
                                    </template>
                                </b-table>
                                <br>
                                <b-pagination
                                  v-model="currentPage"
                                  :total-rows="rows"
                                  :per-page="perPage"
                                  aria-controls="my-table"
                                  align="center"
                                ></b-pagination>
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
            userlist: [],
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
            perPage: 10,
            currentPage: 1,
            fields: ['no', 'user', 'game', 'playing_schedule', 'code', 'status', 'action']
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
        playingSchedule(time) {
            var date = new Date(time);
            // const playingSchedule = date.toLocaleDateString('id-ID')
            const playingSchedule = date.toDateString()
            return playingSchedule
        }
    },
    mounted() {
        this.getUserCode()
    },
    computed: {
        rows() {
            return this.userlist.length
        }
    }
}
</script>

<style>

</style>