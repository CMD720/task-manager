export const modalModule = {
    state: () => ({
        showModal: false,
    }),
    mutations:{
        setModal(state){
            return state.showModal = !state.showModal
        }
    },
    namespaced: true,
}