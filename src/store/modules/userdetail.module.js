import { UserService } from "@/services/UserService";

export default {
    namespaced: true,
    state: {
        userList: {
            loading: false,
            errorMessage: null,
            userdetail: {},
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
            state.userList.userdetail = payload.userdetail;
        },
        GET_USER_FAILED: function (state, payload)
        {
            state.userList.loading = false;
            state.userList.errorMessage = payload.error;
        }
    },
    actions: {
        getUserDetail: async function ({ commit }, userId)
        {
            console.log('getUserDetail:userId::', userId);
            try {
                commit("GET_USER_REQUEST");
                let response = await UserService.getUserDetails(userId);
                console.log('getUserDetail:response::', response);
                commit("GET_USER_SUCCESS", { userdetail: response.data });
            } catch (error) {
                commit("GET_USER_FAILED", { error: error })
            }
        }
    }
}