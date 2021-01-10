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
#sidebar {
    flex: 3;
    display: flex;
    // flex-direction: column;
    padding: 10px;
    min-height: 100vh;
    min-width: 150px;
    // max-width: 150px;
    flex-grow: 1;
    background-color: #001A26;
    justify-content: left;
    transition: 500ms;
    transform: translateX(-150px);
    &:hover{
       transform: translateX(0px);
       flex: 4;
    }
    #filter-icon{
        min-width: 50px;
        height: 30px;
        background-color: #001A26;
        transform: translate(20px, 150px);
        animation: shake 3s cubic-bezier(.36,.07,.19,.97);
        animation-iteration-count: infinite;
    }
    @keyframes shake {
        10%, 90% {
            transform: translate(22px, 151px);
        }
        
        20%, 80% {
            transform: translate(18px, 149px);
        }

        30%, 50%, 70% {
            transform: translate(24px, 151px);
        }

        40%, 60% {
            transform: translate(16px, 149px);
        }
    }
   
}
</style>
