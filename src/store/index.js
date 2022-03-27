import { createStore } from 'vuex'
import counterModule from './modules/counter.module';
import employeeModule from './modules/employee.module';
import userModule from './modules/user.module';
import userdetailModule from './modules/userdetail.module';

export default createStore({
  state: {
    counterState: counterModule.state,
    employeeState: employeeModule.state,
    userState: userModule.state,
    userDetailState: userdetailModule.state,
  },
  getters: {
    getCounterState: function (state)
    {
      return state.counterState.counter;
    },
    getEmployeeState: function (state)
    {
      return state.employeeState.employeeList;
    },
    getUserState: function (state)
    {
      return state.userState.userList;
    },
    getUserDetailState: function (state)
    {
      return state.userDetailState.userList;
    }
  },
  modules: {
    counterModule,
    employeeModule,
    userModule,
    userdetailModule
  },
  mutations: {
  },
  actions: {
  },
})
