<template >
  <div class="container mt-4 mb-4">
    <div class="col-md-6">
      <div class="row">
        <div class="card shadow-lg">
          <div class="card-body">
            <div v-if="authState.isLoggedin">
              <h3 class="fw-bold text-success">Welcome User</h3>
              <p class="fst-italic">
                <b class="text-success">
                  You are now logged in 😀 Click on Logout button to logout.
                </b>
                sit amet consectetur adipisicing elit. Enim totam similique odit
                facilis nemo sed iusto odio expedita magni quae.
              </p>
            </div>
            <div v-if="!authState.isLoggedin">
              <h3 class="fw-bold text-warning">Thank You !!</h3>
              <p class="fst-italic">
                <b class="text-danger">
                  You are logged out !! 😋 Click on Login button to login.
                </b>
                Enim totam similique odit facilis nemo sed iusto odio expedita
                magni quae.
              </p>
            </div>
            <button
              @click="login()"
              v-if="!authState.isLoggedin"
              class="btn btn-success m-2"
            >
              Login
            </button>
            <button
              @click="logout()"
              v-if="authState.isLoggedin"
              class="btn btn-danger m-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "VuexAuthComp",
  // data: function () {
  //   return {
  //     isLoggedin: false,
  //   };
  // },
  methods: {
    login() {
      // this.isLoggedin = true;
      this.$store.dispatch("authModule/userLogIn");
    },
    logout() {
      // this.isLoggedin = false;
      this.$store.dispatch("authModule/userLogOut");
    },
  },
  computed: mapGetters({
    authState: "getAuthState",
  }),
};
</script>

<style lang="scss" scoped>
</style>