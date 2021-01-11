<template>
    <div id="sidebar">
        <filters />
        <img id="filter-icon" src="../assets/filter.svg" alt="filter icon">
    </div>
</template>

<script>
import Filters from './Filters.vue';

export default {
  Name: 'Sidebar',
  components: {
    Filters,
  },
};
</script>

<style lang='scss' scoped>

@import "@/assets/css/variables.scss";

#sidebar {
    flex: 1;
    display: flex;
    padding: 5px;
    min-height: 80vh;
    min-width: 150px;
    background-color: $base-dark;
    justify-content: left;
    transition: 500ms;
    transform: translateX(-150px);
    &:hover{
       transform: translateX(0px);
       flex: 11;
       min-width: 40vw;
    }
    #filter-icon{
        min-width: 40px;
        height: 30px;
        background-color: $base-dark;
        border-radius: 5px;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 10px solid ;
        transform: translate(25px, 150px);
        animation: shake 3s cubic-bezier(.36,.07,.19,.97);
        animation-iteration-count: infinite;
       
    }
    @keyframes shake {
        10%, 90% {
            transform: translate(calc( 10px + 2px ), 150px);
        }
        
        20%, 80% {
            transform: translate(calc( 10px - 2px ), 150px);
        }

        30%, 50%, 70% {
            transform: translate(calc( 10px + 4px ), 150px);
        }

        40%, 60% {
            transform: translate(calc( 10px - 4px ), 150px);
        }
    }
   
}
</style>
