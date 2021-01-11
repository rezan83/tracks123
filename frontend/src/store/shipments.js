import {
  // group data based on related carrier. Happens only once at api fetch
  _groupShipments,
  // apply filters on grouped data
  _filterGrouped,
  // extract required info and doing calculations on filtered data
  _prepareCarrierData,
  // just a function returning default start and end times
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
const URL = "http://localhost:8000/api/shipments/";

export const shipments = {
         state: {
           // all fetched data
           shipments: [],
           // grouped  data to related carrier
           grouped: {},
           filteredGrouped: {},
          //  extracted required data to be displayed
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
             fetch(URL)
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
