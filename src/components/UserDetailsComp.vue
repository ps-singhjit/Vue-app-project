<template>
  <div class="container mt-3">
    <div v-if="loading">
      <SpinnerComp />
    </div>
    <div class="row" v-if="!loading && Object.keys(userdetail).length > 0">
      <div class="col">
        <table class="table table-hover text-center table-sm table-bordered">
          <!-- <thead class="bg-success">
            <tr class="text-white">
              <th>Sno</th>
              <th>Sno</th>
              <th>Sno</th>
            </tr>            
          </thead> -->
          <tbody>
            <tr>
              <th class="bg-success text-white">ID</th>
              <td class="text-success fw-bold">{{ userdetail.id }}</td>
            </tr>
            <tr>
              <th class="bg-success text-white">Name</th>
              <td class="text-success fw-bold">{{ userdetail.name }}</td>
            </tr>
            <tr>
              <th class="bg-success text-white">User Name</th>
              <td class="text-success fw-bold">{{ userdetail.username }}</td>
            </tr>
            <tr>
              <th class="bg-success text-white">Email</th>
              <td class="text-success fw-bold">{{ userdetail.email }}</td>
            </tr>
            <tr>
              <th class="bg-success text-white">Address Street</th>
              <td class="text-success fw-bold">
                {{ userdetail.address.street }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Address Suite</th>
              <td class="text-success fw-bold">
                {{ userdetail.address.suite }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Address City</th>
              <td class="text-success fw-bold">
                {{ userdetail.address.city }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Address Zipcode</th>
              <td class="text-success fw-bold">
                {{ userdetail.address.zipcode }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Address Geo</th>
              <td class="text-success fw-bold">{{ userdetail.address.geo }}</td>
            </tr>
            <tr>
              <th class="bg-success text-white">
                <i class="fa fa-phone" aria-hidden="true"></i>Phone
              </th>
              <td class="text-success fw-bold">{{ userdetail.phone }}</td>
            </tr>
            <tr>
              <th class="bg-success text-white">Website</th>
              <td class="text-success fw-bold">{{ userdetail.website }}</td>
            </tr>
            <tr>
              <th class="bg-success text-white">Company Name</th>
              <td class="text-success fw-bold">
                {{ userdetail.company.name }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Catch Phrase</th>
              <td class="text-success fw-bold">
                {{ userdetail.company.catchPhrase }}
              </td>
            </tr>
          </tbody>
        </table>
        <!-- {{ userdetail }} -->
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col text-center mt-5">
      <router-link class="btn btn-success shadow-lg" to="/users"
        >Back</router-link
      >
    </div>
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp";
import { UserService } from "@/services/UserService";

export default {
  components: { SpinnerComp },
  name: "UserDetailsComp",
  data() {
    return {
      loading: false,
      errorMessage: null,
      userdetail: {},
    };
  },
  created: async function () {
    let userId = this.$route.params.userId;
    try {
      this.loading = true;
      let response = await UserService.getUserDetails(userId);
      this.userdetail = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
      this.loading = false;
      this.errorMessage = error;
    }
  },
};
</script>

<style scoped>
</style>