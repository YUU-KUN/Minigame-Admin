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
                      Berhasil generate Kode. Kode Anda adalah <b>4R329D</b>
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
                                            <th>Playing Date</th>
                                            <th>Code</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td>1.</td>
                                                <td>Transbara</td>
                                                <td>Game 1</td>
                                                <td>12 Feb 2021</td>
                                                <td>4R329D</td>
                                                <td>Available / Expired</td>
                                                <td class="d-flex justify-content-center">
                                                    <button class="btn btn-danger" v-on:click="generate">Generate</button>
                                                </td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            generated: false,
        }
    },
    methods: {
        generate() {
            this.generated = true
            console.log('Success Generate')
        }
    }
}
</script>

<style>

</style>