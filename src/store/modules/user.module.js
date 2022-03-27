import { UserService } from "@/services/UserService";

export default {
    namespaced: true,
    state: {
        userList: {
            loading: false,
            errorMessage: null,
            users: [],
        }
    },
    getters: {
    },
    mutations: {
        GET_USER_REQUEST: function (state)
        {
            state.userList.loading = true;
        },
        GET_USER_SUCCESS: function (state, payload)
        {
            state.userList.loading = false;
            state.userList.users = payload.users;
        },
        GET_USER_FAILED: function (state, payload)
        {
            state.userList.loading = false;
            state.userList.errorMessage = payload.error;
        }
    },
    actions: {
        getUsers: async function ({ commit })
        {
            try {
                commit("GET_USER_REQUEST");
                let response = await UserService.getAllUsers();
                console.log('response::', response);
                commit("GET_USER_SUCCESS", { users: response.data });
            } catch (error) {
                commit("GET_USER_FAILED", { error: error })
            }
        }
    }
}