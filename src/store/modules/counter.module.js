export default {
    namespaced: true,
    state: {
        counter: {
            count: 0
        }
    },
    getters: {
    },
    mutations: {
        INCR_COUNTER: function (state)
        {
            state.counter.count++;
        },
        DECR_COUNTER: function (state)
        {
            state.counter.count--;
        }
    },
    actions: {
        incrementCounter: function ({ commit })
        {
            return commit('INCR_COUNTER');
        },
        decrementCounter: function ({ commit })
        {
            return commit('DECR_COUNTER');
        }
    },
    modules: {
    }
}
