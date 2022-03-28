export default {
    namespaced: true,
    state: {
        auth: {
            isLoggedin: false,
        }
    },
    getters: {
    },
    mutations: {
        IN: function (state)
        {
            state.auth.isLoggedin = true;
        },
        OUT: function (state)
        {
            state.auth.isLoggedin = false;
        }
    },
    actions: {
        userLogIn: function ({ commit })
        {
            return commit('IN');
        },
        userLogOut: function ({ commit })
        {
            return commit('OUT');
        }
    },
    modules: {
    }
}
