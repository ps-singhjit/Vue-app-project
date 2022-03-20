<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="heading">Customer</h3>
        <ul class="list-group">
          <li class="list-group-item">Name: {{ name }}</li>
          <li class="list-group-item">Age: {{ age }}</li>
          <li class="list-group-item">Designation: {{ designation }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CustomerComp",
  props: {
    name: { type: String, required: true },
    age: { type: String, required: true },
    designation: { type: String, required: true },
  },
};
</script>

<style>
</style>