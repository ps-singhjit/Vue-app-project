<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-header bg-success text-white">
            <h3>Register Here</h3>
          </div>
        </div>
        <div class="card-body bg-light shadow-lg">
          <form @submit.prevent="register()">
            <div class="mb-2">
              <input
                v-model="user.name"
                type="text"
                placeholder="Name"
                class="form-control"
              />
            </div>
            <div class="mb-2">
              <input
                v-model="user.email"
                type="email"
                placeholder="Email"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <input
                v-model="user.password"
                type="password"
                placeholder="Password"
                class="form-control"
              />
            </div>
            <div class="mb-1">
              <input
                type="submit"
                placeholder="Register"
                class="btn btn-success"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterComp",
  data: function () {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register: function () {
      if (
        this.user.name !== "" &&
        this.user.email !== "" &&
        this.user.password !== ""
      ) {
        alert(`New user is registerd 😁 
      Name :: ${this.user.name}
      Email :: ${this.user.email}
      `);
        this.user = "";
      } else {
        alert(`Some fiel(s) are blank for registration 🤔
        Please provide valid details.`);
      }
    },
  },
};
</script>

<style>
</style>