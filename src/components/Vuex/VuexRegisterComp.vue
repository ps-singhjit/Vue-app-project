<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-header bg-success text-white">
            <h3>Register Here</h3>
          </div>
        </div>
        <div class="card-body bg-light shadow-lg">
          <form @submit.prevent="register()" @reset.prevent="clear()">
            <div class="mb-2">
              <input
                v-model="registerState.name"
                type="text"
                placeholder="Name"
                class="form-control"
              />
            </div>
            <div class="mb-2">
              <input
                v-model="registerState.email"
                type="email"
                placeholder="Email"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <input
                v-model="registerState.password"
                type="password"
                placeholder="Password"
                class="form-control"
              />
            </div>
            <div class="mb-1">
              <input type="submit" value="Register" class="btn btn-success" />
              <input type="reset" value="Clear" class="btn btn-danger m-2" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "VuexRegisterComp",
  methods: {
    register: function () {
      this.$store.dispatch("registerModule/registerUser");
    },
    clear: function () {
      this.$store.dispatch("registerModule/clearData");
    },
  },
  computed: mapGetters({
    registerState: "getRegisterState",
  }),
};
</script>

<style>
</style>