<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-3">{{ this.count }}</p>
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
export default {
  name: "CounterComp",
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    increment: function () {
      this.count++;
    },
    decrement: function () {
      this.count--;
    },
  },
};
</script>

<style>
</style>