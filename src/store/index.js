import { createStore } from "vuex";

const localStorageKey =
  "DJsdfg-2352LLDSF-dfgfgiu38r_[22334ews34>YUVASZghsvdV--345";

export default createStore({
  state: {
    isAuthenticated: false,
    username: "",
    email: "",
    productDetail: {},
    trolley: [],
  },
  getters: {},
  mutations: {
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value;
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    setEmail(state, value) {
      state.email = value;
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    setProductDetail(state, value) {
      state.productDetail = value;
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    setTrolley(state, value) {
      state.trolley = value;
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
