import { createStore } from 'vuex'
import counterModule from './modules/counter.module';
import employeeModule from './modules/employee.module';
import userModule from './modules/user.module';
import userdetailModule from './modules/userdetail.module';
import registerModule from './modules/register.module';
import authModule from './modules/auth.module';
import greetModule from './modules/greet.module';

export default createStore({
  state: {
    counterState: counterModule.state,
    employeeState: employeeModule.state,
    userState: userModule.state,
    userDetailState: userdetailModule.state,
    registerState: registerModule.state,
    authState: authModule.state,
    greetState: greetModule.state,
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
    },
    getRegisterState: function (state)
    {
      return state.registerState.userCreds;
    },
    getAuthState: function (state)
    {
      return state.authState.auth
    },
    getGreetState: function (state)
    {
      return state.greetState.wish
    },
  },
  modules: {
    counterModule,
    employeeModule,
    userModule,
    userdetailModule,
    registerModule,
    authModule,
    greetModule
  },
  mutations: {
  },
  actions: {
  },
})
