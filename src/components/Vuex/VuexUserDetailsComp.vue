<template>
  <div class="container mt-3">
    <div v-if="userdetailState.loading">
      <SpinnerComp />
    </div>
    <div
      class="row"
      v-if="
        !userdetailState.loading &&
        Object.keys(userdetailState.userdetail).length > 0
      "
    >
      <div class="col">
        <table class="table table-hover text-center table-sm table-bordered">
          <tbody>
            <tr>
              <th class="bg-success text-white">ID</th>
              <td class="text-success fw-bold">
                {{ userdetailState.userdetail.id }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Name</th>
              <td class="text-success fw-bold">
                {{ userdetailState.userdetail.name }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">User Name</th>
              <td class="text-success fw-bold">
                {{ userdetailState.userdetail.username }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Email</th>
              <td class="text-success fw-bold">
                {{ userdetailState.userdetail.email }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Address Street</th>
              <td class="text-success fw-bold">
                {{ userdetailState.userdetail.address.street }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Address Suite</th>
              <td class="text-success fw-bold">
                {{ userdetailState.userdetail.address.suite }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Address City</th>
              <td class="text-success fw-bold">
                {{ userdetailState.userdetail.address.city }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Address Zipcode</th>
              <td class="text-success fw-bold">
                {{ userdetailState.userdetail.address.zipcode }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Address Geo</th>
              <td class="text-success fw-bold">
                {{ userdetailState.userdetail.address.geo }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">
                <i class="fa fa-phone" aria-hidden="true"></i>Phone
              </th>
              <td class="text-success fw-bold">
                {{ userdetailState.userdetail.phone }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Website</th>
              <td class="text-success fw-bold">
                {{ userdetailState.userdetail.website }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Company Name</th>
              <td class="text-success fw-bold">
                {{ userdetailState.userdetail.company.name }}
              </td>
            </tr>
            <tr>
              <th class="bg-success text-white">Catch Phrase</th>
              <td class="text-success fw-bold">
                {{ userdetailState.userdetail.company.catchPhrase }}
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
import { mapGetters } from "vuex";

export default {
  components: { SpinnerComp },
  name: "VuexUserDetailsComp",
  created: async function () {
    let userId = this.$route.params.userId;
    this.$store.dispatch("userdetailModule/getUserDetail", userId);
  },
  computed: mapGetters({
    userdetailState: "getUserDetailState",
  }),
};
</script>

<style scoped>
</style>