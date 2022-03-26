<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <h3 class="heading">Employee</h3>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          voluptates fuga accusamus, nam neque expedita illo, alias, deleniti
          minima quisquam soluta veniam eos nesciunt harum sit eligendi dicta
          enim totam.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-2">
        <ul class="list-group">
          <li
            class="list-group-item list-group-item-success"
            v-for="employee of getEmployeeState.employees"
            :key="employee.id"
          >
            <input
              :checked="employee.isSelected"
              @change="checkSelected(employee.id)"
              type="checkbox"
              class="form-check-input"
            />
            {{ employee.name }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div v-for="employee of getEmployeeState.employees" :key="employee.id">
          <div class="card my-2" v-if="employee.isSelected">
            <div class="card-body list-group-item-warning">
              <ul class="list-group">
                <li class="list-group-item">
                  Id:
                  <span class="fw-bold">
                    {{ employee.id }}
                  </span>
                </li>
                <li class="list-group-item">
                  Name:
                  <span class="fw-bold">
                    {{ employee.name }}
                  </span>
                </li>
                <li class="list-group-item">
                  UserName:
                  <span class="fw-bold">
                    {{ employee.username }}
                  </span>
                </li>
                <li class="list-group-item">
                  Email:
                  <span class="fw-bold">
                    {{ employee.email }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import employeeModule from "@/store/modules/employee.module";
import { mapGetters } from "vuex";

export default {
  name: "VuexEmployeeComp",

  methods: {
    checkSelected: function (empId) {
      this.$store.dispatch("employeeModule/changeSelected", { empId: empId });
    },
  },
  computed: mapGetters({
    getEmployeeState: "getEmployeeState",
  }),
};
</script>

<style>
</style>