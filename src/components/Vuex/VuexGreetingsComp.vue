<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-5">
              Hello, <span class="fst-italic">{{ greetState.greet }}</span>
            </p>
            <button
              @click="greeting('Good Morning ' + greetState.username)"
              class="btn btn-success m-2"
            >
              Good morning
            </button>
            <button
              @click="greeting('Good Afternoon ' + greetState.username)"
              class="btn btn-warning m-2"
            >
              Good afternoon
            </button>
            <button
              @click="greeting('Good Evening ' + greetState.username)"
              class="btn btn-danger m-2"
            >
              Good evening
            </button>
            <div class="form-group">
              <label for=""></label>
              <input
                v-model="greetState.username"
                type="text"
                class="form-control"
                name="usr"
                id="usr"
                aria-describedby="helpId"
                placeholder="Enter your name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "VuexGreetingsComp",
  methods: {
    greeting: function (msg) {
      this.$store.dispatch("greetModule/greetUser", msg);
    },
  },
  computed: mapGetters({
    greetState: "getGreetState",
  }),
};
</script>

<style scoped>
</style>