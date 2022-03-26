<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-3">{{ getCounterState.count }}</p>
            <button @click="increment" class="btn btn-success m-1">
              Increment
            </button>
            <button @click="decrement" class="btn btn-warning m-1">
              Decrement
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
  name: "VuexCounterComp",
  methods: {
    increment: function () {
      this.$store.dispatch("counterModule/incrementCounter");
    },
    decrement: function () {
      this.$store.dispatch("counterModule/decrementCounter");
    },
  },
  computed: mapGetters({
    getCounterState: "getCounterState",
  }),
};
</script>

<style>
</style>