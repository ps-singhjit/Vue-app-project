<template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <h2 class="demo text-success fw-bold">App Component</h2>
          <p class="fst-italic">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            consequatur beatae, asperiores repellendus accusamus ea aliquam
            dolore repudiandae ut? Accusantium.
          </p>
        </div>
      </div>
    </div>
    <!-- Using props to show data -->
    <RegisterComp />
    <AuthComp />
    <CustomerComp name="Demodev" age="25" designation="Developer" />
    <GreetingsComp />
    <!-- Using state to show data -->
    <EmployeeComp />
    <CounterComp />
  </div>
</template>

<script>
import CustomerComp from "@/components/CustomerComp";
import EmployeeComp from "@/components/EmployeeComp";
import CounterComp from "@/components/CounterComp";
import GreetingsComp from "@/components/GreetingsComp";
import RegisterComp from "@/components/RegisterComp";
import AuthComp from "@/components/AuthComp";
export default {
  components: {
    CustomerComp,
    EmployeeComp,
    CounterComp,
    GreetingsComp,
    RegisterComp,
    AuthComp,
  },
};
</script>

<style>
@import "./styles.css";
</style>
