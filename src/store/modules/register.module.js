export default {
    namespaced: true,
    state: {
        userCreds: {
            name: null,
            email: null,
            password: null,
        },
    },
    getters: {
    },
    mutations: {
        REG_USER: function (state)
        {
            if (state.userCreds.name == null || state.userCreds.email == null || state.userCreds.password == null) {
                alert(`Some field(s) are blank for registration 🤔
                        Please provide valid details.`);
            } else {
                alert(`New user is registerd 😁 
                        Name :: ${state.userCreds.name}
                        Email :: ${state.userCreds.email}
                        Password :: ${state.userCreds.password}
                    `);
                state.userCreds = '';
            }
        },
        CLS_DATA: function (state)
        {
            state.userCreds = {};
        }
    },
    actions: {
        registerUser: function ({ commit })
        {
            commit('REG_USER');
        },
        clearData: function ({ commit })
        { commit('CLS_DATA'); }
    },
}
