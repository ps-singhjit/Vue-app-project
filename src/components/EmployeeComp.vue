<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="heading">Employee</h3>
        <ul class="list-group">
          <li class="list-group-item">Name: {{ this.employee.name }}</li>
          <li class="list-group-item">Age: {{ this.employee.age }}</li>
          <li class="list-group-item">
            Designation: {{ this.employee.designation }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeComp",
  data: function () {
    return {
      employee: {
        name: "State-DemoDev",
        age: 30,
        designation: "Architect",
      },
    };
  },
};
</script>

<style>
</style>