<template>
  <div class="dashboard">
    <Sidebar />
    <div id="main-section">

      <h2>CO2 Analytics</h2>

      <table>
      <thead>
        <tr>
          <th :class="{ 'active-sort': (currentSort==='carrier_company_id') }" @click="sort('carrier_company_id')" ><div><span>Carrier</span> <img class="arrow-image" :class="{'descend': sortDesc}" src="../assets/arrow-up.svg" ></div></th>
          <th :class="{ 'active-sort': (currentSort==='total_co2_emitted') }" @click="sort('total_co2_emitted')"><div><span>CO2 Emission </span> <img class="arrow-image" :class="{'descend': sortDesc}" src="../assets/arrow-up.svg"></div></th>
          <th :class="{ 'active-sort': (currentSort==='travelled_distance') }" @click="sort('travelled_distance')"><div><span>Distance </span> <img class="arrow-image" :class="{'descend': sortDesc}" src="../assets/arrow-up.svg" ></div></th>
          <th :class="{ 'active-sort': (currentSort==='av_weight') }" @click="sort('av_weight')"><div><span>Average weight </span> <img class="arrow-image" :class="{'descend': sortDesc}" src="../assets/arrow-up.svg" ></div></th>
          <th :class="{ 'active-sort': (currentSort==='intencity_factor') }" @click="sort('intencity_factor')"><div><span>Intensity Factor </span> <img class="arrow-image" :class="{'descend': sortDesc}" src="../assets/arrow-up.svg" ></div></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in sortedCarrierData" :key="data[1].carrier_company_id">
          <td class="carrier-name" @click="carrierDetails(data[1].carrier_company_id)">{{data[1].carrier_company_id}}</td>
          <td>{{data[1].total_co2_emitted}}</td>
          <td>{{data[1].travelled_distance}}</td>
          <td>{{data[1].av_weight}}</td>
          <td>{{data[1].intencity_factor}}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from "vuex";
import Sidebar from "@/components/Sidebar";
export default {
  name: "Dashboard",
  components: {
    Sidebar
  },
  data(){
    return{
      ...mapGetters(["getCarrierData"]),
      currentSort:'carrier_company_id',
      sortDesc:true
    }
  },
  methods: {
    ...mapActions(["fetchShipments"]),
    sort(s){
      if(s === this.currentSort) {
        this.sortDesc = !this.sortDesc
      }
      this.currentSort = s;
    },
    carrierDetails(carrierId){
      this.$router.push({ name: 'Carrier', params: { carrierId } }) // -> /carrier/1
    }
  }, 
  computed: {    
    sortedCarrierData() {
      return Object.entries(this.getCarrierData()).sort((a,b) => {
        let sortDir = (this.sortDesc*2 -1);
        return (a[1][this.currentSort] - b[1][this.currentSort]) * sortDir
      });
    }
  },
  created() {
    this.fetchShipments()
  }
};
</script>

<style scoped lang="scss">
.dashboard {
  display: flex;

  #main-section {
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    table {
      border-collapse: collapse;
      width: 100%;
      color: #fff;
      border: 0px;
    }
    th {
      background-color: #001A26;
      color: rgb(207, 205, 205);
      padding: 10px;
      min-width: 50px;
      cursor: pointer;
      div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      
    }
    .active-sort{
      background-color: #2f64c7;
      .arrow-image{
        visibility: visible;
      }
    }
    .arrow-image{
      max-width: 15px;
      visibility: hidden;
    }
    .descend{
      transform: rotate(180deg);
    }
    tr{
      background-color: #42b1b9;
      &:hover{
        opacity: 0.8;
      }
      .carrier-name{
        cursor: pointer;
        &:hover{
          background-color: #2f64c7
        }
      }
      td{
        padding: 10px;
      }
    }
    
  }
}
h3 {
  margin: 40px 0 0;
}

</style>
