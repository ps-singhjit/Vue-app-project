<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-success">User List</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt id
          aperiam cumque illum sapiente quae cum ratione nam, voluptas itaque
          perspiciatis nostrum ad provident. Eum perspiciatis saepe repellat
          eveniet quo?
        </p>
      </div>
      <div v-if="loading">
        <SpinnerComp />
      </div>
      <div v-if="errorMessage">
        <p class="fw-bold text-danger">{{ errorMessage }}</p>
      </div>
      <div class="row" v-if="!loading && users.length > 0">
        <div class="col">
          <table class="table table-hover text-center table-striped">
            <thead class="bg-success text-white">
              <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Website</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.company.name }}</td>
                <td>{{ user.website }}</td>
                <td>{{ user.address.city }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from "@/services/UserService";
import SpinnerComp from "@/components/SpinnerComp";

export default {
  components: {
    SpinnerComp,
  },
  name: "UserListComp",
  data: function () {
    return {
      loading: false,
      errorMessage: null,
      users: [],
    };
  },

  created: async function () {
    try {
      this.loading = true;
      let response = await UserService.getAllUsers();
      console.log("Response Data", response);
      this.loading = false;
      this.users = response.data;
    } catch (error) {
      this.loading = false;
      this.errorMessage = error;
      console.log(error);
    }

    // return response;
  },
};
</script>

<style scoped>
</style>