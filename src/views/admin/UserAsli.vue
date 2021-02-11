<template>
  <div>
    <table class="table">
      <thead class="table-dark">
        <tr>
            <th>No.</th>
            <th>Email</th>
            <th>Username</th>
            <th>Verified</th>
            <th>Joined</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1.</td>
            <td>transbara@g.com</td>
            <td>transbaragntg</td>
            <td>Yes / No</td>
            <td>15/2/2021</td>
            <td>
                <button class="btn btn-danger" v-on:click="hapus">Delete</button>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

    methods: {
        hapus(){
            console.log('halo gan');
        }
    }
};
</script>

<style></style>
