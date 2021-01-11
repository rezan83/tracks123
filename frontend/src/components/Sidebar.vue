<template>
    <div class="sidebar" :class="{ 'sidebar-open': isSidebarOpen}">
        <filters />
        <img @click="toggleSidebar" 
            class="filter-icon"
            :class="{ 'filter-icon-open': isSidebarOpen}" 
            src="../assets/filter.svg" alt="filter icon">
    </div>
</template>

<script>
import Filters from './Filters.vue';

export default {
  Name: 'Sidebar',
  components: {
    Filters,
  },
  data(){
        return{
            isSidebarOpen: false
        }
    },
    methods: {
        toggleSidebar(){
            this.isSidebarOpen = !this.isSidebarOpen
        }
    }
};
</script>

<style lang='scss' scoped>

@import "@/assets/css/variables.scss";



.sidebar {
    flex: 1;
    display: flex;
    padding: 5px;
    min-height: 80vh;
    min-width: 150px;
    background-color: $base-dark;
    justify-content: left;
    transition: 500ms;
    transform: translateX(-150px);
    
    .filter-icon{
        width: 50px;
        height: 30px;
        background-color: $base-dark;
        border-radius: 5px;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 10px solid ;
        transform: translate(18px, 400px);
        animation: shake 3s cubic-bezier(.36,.07,.19,.97);
        animation-iteration-count: infinite;
    }
    .filter-icon-open{
        background-color: $clicable-blue;
    }
    @keyframes shake {
        20%, 80% {
            transform: translate(calc( 10px - 2px ), 400px);
        }

        30%, 50%, 70% {
            transform: translate(calc( 10px + 4px ), 400px);
        }
    }
   
}
.sidebar-open{
    transform: translateX(0px);
    flex: 11;
    min-width: 300px;
}
</style>
