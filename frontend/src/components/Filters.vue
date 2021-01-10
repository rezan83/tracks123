<template>
<div id="filters">

    <h3>Filters</h3>
    <form @submit.prevent="setFilters">
        <input type="text" placeholder="type of calculations" v-model="filters.type_of_calculations" key="type_of_calculations">
        <input type="text" placeholder="type of goods" v-model="filters.type_of_goods" key="type_of_goods">
        <input type="text" placeholder="start city" v-model="filters.start_city" key="start_city">
        <input type="text" placeholder="end city" v-model="filters.end_city" key="end_city">

        <p class="warning" v-if="!timeCorrect">start time should be earlier than end time</p>

        <label for="start">Start date:</label>
        <input type="date" id="start" name="trip-start" 
            v-model="filters.start_time" key="start_time">

        <label for="end">End date:</label>
        <input type="date" id="end" name="trip-end" 
            v-model="filters.end_time" key="end_time">
       
        <button>Submit</button>
        <button class="danger" @click="resetFilters">Defaults</button>
    </form>
</div>

</template>

<script>
import { _defaultTimes} from "@/helpers"
let {defaultStart, defaultEnd} = _defaultTimes()
let defaultFilters = {
            type_of_calculations: "",
            type_of_goods: "",
            start_city: "",
            end_city: "",
            // // last 10 weeks
            start_time: defaultStart,
            // today
            end_time: defaultEnd,
        }
export default {
  Name: 'Filters',
  data(){
      return{
        filters: {...defaultFilters},
        timeCorrect: true
    }
  },
    methods: {
        setFilters () {
            if ((new Date(this.filters.start_time)) >=
                (new Date(this.filters.end_time))) {
                    console.log("wrong")
                this.timeCorrect = false
            } else {
                console.log(this.filters)
                this.timeCorrect = true
                this.$store.commit('setFilters', this.filters)
            }
        },
        resetFilters(){
            this.timeCorrect = true
            this.filters = {...defaultFilters}
            console.log("reset", this.filters)
            this.$store.commit('setFilters', {...defaultFilters})
        }
    }
};
</script>

<style lang='scss' scoped>
#filters {
    display: flex;
    flex-direction: column;
    text-align: left;
    color: rgb(143, 143, 143);
    width: 90%;
 form{
    display: flex;
    flex-direction: column;
    width: 90%;
    input {
            width: 90%;
            height: 25px;
            border-radius: 5px;
            box-sizing: border-box;
            outline: none;
            padding: 5px;
        }
    button {
        width: 90%;
        margin-top: 20px;
        height: 30px;
        background-color: #00A295;
        border: none;
        text-transform: uppercase;
        font-weight: 600;
        border-radius: 10px;
        outline: none;
        cursor: pointer;
        &.danger{
            color: rgb(143, 143, 143);
            background-color: #9d00a2;
        }
    }
    label{
        margin-left: 10px;
        margin-top: 20px;
    }
    p {
        margin-left: 10px;
        margin-top: 20px;

        &.warning{
            color: rgb(255, 72, 72);
        }
    }
 }
}
</style>
