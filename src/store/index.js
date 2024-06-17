import { createStore } from "vuex";

const localStorageKey =
  "DJsdfg-2352LLDSF-dfglñdskfgiu38r_[22334ews34>YUVASZghsvdV--345";

export default createStore({
  state: {
    isAuthenticated: false,
    username: "",
    token: "",
  },
  getters: {},
  mutations: {
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value;
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    setUsername(state, value) {
      state.username = value;
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    setToken(state, value) {
      state.token = value;
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    // Agregar una mutación para inicializar el estado desde localStorage al cargar la página
    initializeStateFromLocalStorage(state) {
      const storedState = localStorage.getItem(localStorageKey);
      if (storedState) {
        Object.assign(state, JSON.parse(storedState));
      }
    },
  },
  actions: {
    initializeStateFromLocalStorage({ commit }) {
      commit("initializeStateFromLocalStorage");
    },
  },
});
