export default {
    namespaced: true,
    state: {
        wish: {
            greet: "",
            username: "",
        }
    },
    getters: {
    },
    mutations: {
        GREET: function (state, msg)
        {
            state.wish.greet = msg;
        },

    },
    actions: {
        greetUser: function ({ commit }, message)
        {
            return commit('GREET', message);
        },
    },
    modules: {
    }
}
