// group shipments based on the carrier.
// this is done only once when fetching data
//  and make rest of calculation easier
export const _groupShipments = (arr, groupBy) => {
  return arr.reduce((acc, cur) => {
    let prop = cur[groupBy];
    if (!Object.prototype.hasOwnProperty.call(acc, prop)) {
      acc[prop] = [];
    }
    if (!acc[prop].includes(cur)) {
      acc[prop].push(cur);
    }
    return acc;
  }, {});
};

const isInTime = (time1, time2) => {
  let timeStamp1 = new Date(time1);
  let timeStamp2 = new Date(time2);
  return timeStamp1 >= timeStamp2;
};

// filter array excluding the item even if one criteria doesn't match
const userFilters = (arr, filters) => {
  return arr.filter((item) => {
    let matchStartTime = true;
    let matchEndTime = true;
    let matchSearch = true;
    for (let key in filters) {
      if (filters[key]) {
        if (key === "start_time") {
          matchStartTime = isInTime(item[key], filters[key]);
        } else if (key === "end_time") {
          matchEndTime = isInTime(filters[key], item[key]);
        }
        else {
          matchSearch =
            (item[key] != undefined) && (item[key].toLowerCase() === filters[key].toLowerCase());
        }
          if(!item[key] || !matchStartTime || !matchEndTime || !matchSearch){
              return false
          }
      }
    }
    return true;
  });
};

// applying filter function on the grouped data
export const _filterGrouped = (grouped, filters) => {
  let filteredGrouped = {};
  for (const key in grouped) {
    filteredGrouped[key] = userFilters(grouped[key], filters);
  }
  return filteredGrouped;
};

// formating required info from filtered data
const gatherCarrierData = (arr) => {
  let initialCarrierData = {
    total_co2_emitted: 0,
    travelled_distance: 0,
    weight: 0,
    fuel_consumed: 0,
    total_intencity: 0,
    shipments: arr.length,
  };
  return arr.reduce((acc, cur) => {
    
    acc.total_co2_emitted += cur.total_co2_emitted;
    acc.travelled_distance += cur.travelled_distance;
    acc.fuel_consumed += cur.fuel_consumed;
    acc.weight += cur.weight;
    acc.total_intencity += 
      cur.total_co2_emitted / cur.weight / cur.travelled_distance;
    return acc;
  }, initialCarrierData);
};

// adding final ifos like intencity_factor
export const _prepareCarrierData = (grouped) => {
  let carrierData = { ...grouped };
  for (let key in carrierData) {
    carrierData[key] = gatherCarrierData(carrierData[key]);
    carrierData[key].carrier_company_id = key;
    carrierData[key].av_weight =
      carrierData[key].weight / carrierData[key].shipments;
    carrierData[key].intencity_factor =
      (carrierData[key].total_intencity / carrierData[key].shipments)*1000;

  }
  return carrierData;
};

// just returning default start and end time
export const _defaultTimes = () => {
    let lastTenWeeks = 70;
    let lastShipment = "2020-10-28";
    let defaultStart = new Date(lastShipment);
    defaultStart.setDate(defaultStart.getDate() - lastTenWeeks);
    defaultStart = defaultStart.toISOString().slice(0, 10);
    let defaultEnd = new Date();
    defaultEnd = defaultEnd.toISOString().slice(0, 10);
    return { defaultStart, defaultEnd };
}