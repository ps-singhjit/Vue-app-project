<template>
  <div class="container mt-4">
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
      <div v-if="userState.loading">
        <SpinnerComp />
      </div>
      <div v-if="userState.errorMessage">
        <p class="fw-bold text-danger">{{ userState.errorMessage }}</p>
      </div>
      <div
        class="row mt-2"
        v-if="!userState.loading && userState.users.length > 0"
      >
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
              <tr v-for="user in userState.users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>
                  <router-link
                    class="text-decoration-none fw-bold text-success"
                    :to="'/users/' + user.id"
                    >{{ user.name }}</router-link
                  >
                </td>
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
// import { UserService } from "@/services/UserService";
import SpinnerComp from "@/components/SpinnerComp";
import { mapGetters } from "vuex";

export default {
  components: {
    SpinnerComp,
  },
  name: "VuexUserListComp",

  created: function () {
    this.$store.dispatch("userModule/getUsers");
  },
  computed: mapGetters({
    userState: "getUserState",
  }),
};
</script>

<style scoped>
</style>