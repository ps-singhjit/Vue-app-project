<template>
  <div class="container mt-3">
    <div v-if="loading">
      <SpinnerComp />
    </div>
    <div class="row" v-if="!loading && Object.keys(userdetail).length > 0">
      <div class="col">
        {{ userdetail }}
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col text-center mt-5">
      <router-link class="btn btn-success" to="/users">Back</router-link>
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