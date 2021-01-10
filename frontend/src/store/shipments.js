import {
  _groupShipments,
  _filterGrouped,
  _prepareCarrierData,
  _defaultTimes,
} from "../helpers";
let { defaultStart, defaultEnd } = _defaultTimes();
let defaultFilters = {
  type_of_calculations: "",
  type_of_goods: "",
  start_city: "",
  end_city: "",
  // // last 10 weeks
  start_time: defaultStart,
  // today
  end_time: defaultEnd,
};
export const shipments = {
  state: {
    shipments: [],
    grouped: {},
    filteredGrouped: {},
    carrierData: {},
    filters: defaultFilters,
  },
  getters: {
    getGrouped(state) {
      return state.grouped;
    },
    getCarrierData(state) {
      return state.carrierData;
    },
  },
  mutations: {
    setShipments(state, payload) {
      state.shipments = payload;
    },
    setGrouped(state, payload) {
      state.grouped = payload;
    },
    setFilteredGrouped(state, payload) {
      state.filteredGrouped = payload;
    },
    setCarrierData(state, payload) {
      state.carrierData = payload;
    },
    setFilters(state, payload) {
      state.filters = payload;
      state.filteredGrouped = _filterGrouped(state.grouped, payload);
      state.carrierData = _prepareCarrierData(state.filteredGrouped);
    },
  },
  actions: {
    fetchShipments({ commit, state }) {
      fetch("http://localhost:8000/api/shipments/")
        .then((resp) => resp.json())
        .then((data) => {
          commit("setShipments", data);
          return data;
        })
        .then((results) => {
          let grouped = _groupShipments(results, "carrier_company_id");
          let filteredGrouped = _filterGrouped(grouped, state.filters);

          commit("setGrouped", grouped);
          commit("setFilteredGrouped", filteredGrouped);
          return filteredGrouped;
        })
        .then((grouped) => {
          let carrierData = _prepareCarrierData(grouped);
          commit("setCarrierData", carrierData);
        });
    },
  },
  modules: {},
};
