<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-5">
              Hello, <span class="fst-italic">{{ this.greet }}</span>
            </p>
            <button
              @click="this.greeting('Good Morning ' + this.username)"
              class="btn btn-success m-2"
            >
              Good morning
            </button>
            <button
              @click="this.greeting('Good Afternoon ' + this.username)"
              class="btn btn-warning m-2"
            >
              Good afternoon
            </button>
            <button
              @click="this.greeting('Good Evening ' + this.username)"
              class="btn btn-danger m-2"
            >
              Good evening
            </button>
            <div class="form-group">
              <label for=""></label>
              <input
                v-model="username"
                type="text"
                class="form-control"
                name="usr"
                id="usr"
                aria-describedby="helpId"
                placeholder="Enter your name"
              />
              <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GreetingsComp",
  data: function () {
    return {
      greet: "",
      username: "",
    };
  },
  methods: {
    greeting: function (msg) {
      this.greet = msg;
    },
  },
};
</script>

<style scoped>
</style>