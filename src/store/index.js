import { createStore } from 'vuex'

export default createStore ({
    state() {
        return {
            user: null
        }
    },
    getters:{
        getLoginFromStore(state) {
            return state.user
        }
    },
    actions:{
        setLogin({commit}, user){
            commit('connexion', user)
        }
    },
    mutations:{
        connexion(state, user){
            state.user = user;
        }
    }
})