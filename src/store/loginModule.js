export const loginModule = {
    state: () => ({
        auth: false,
    }),
    mutations: {
        setLogin(state) {
            return state.auth = true
        },
        setLogout(state) {
            return state.auth = false
        },
    },
    namespaced: true,
}