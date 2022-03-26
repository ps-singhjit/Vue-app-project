<template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <h2 class="demo text-success fw-bold">Home App Component</h2>
          <p class="fst-italic">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            consequatur beatae, asperiores repellendus accusamus ea aliquam
            dolore repudiandae ut? Accusantium.
          </p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <img src="../assets/vuex.png" alt="" />
    </div>
    <!-- Using props to show data -->
    <CustomerComp name="Demodev" age="25" designation="Developer" />
    <!-- Using state to show data -->
    <EmployeeComp />
  </div>
</template>

<script>
import CustomerComp from "@/components/CustomerComp";
import EmployeeComp from "@/components/EmployeeComp";
export default {
  name: "HomeComp",
  components: {
    CustomerComp,
    EmployeeComp,
  },
};
</script>

<style>
</style>
