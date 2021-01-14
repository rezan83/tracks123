<template>
  <div id="navbar-wrap" class="card-shadow">
    <div id="navbar">
        <div id="logo">
            <router-link to="/"><h2>Tracks</h2></router-link>
        </div>
        <div id="navlinks" >
            <router-link to="/dashboard"> Dashboard </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  Name: 'Navbar',  
};
</script>

<style lang='scss' scoped>

@import "@/assets/css/variables.scss";

#navbar-wrap {
    color: $secondary-text-color;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 9999;

    #navbar {
        display: flex;
        padding: 15px;
        justify-content: space-between;
        background-color: $base-dark;
        a {
            text-decoration: none;
            color: $main-text-color;
            vertical-align: middle;
            
        }
        #logo {
            h2{
                margin: 0 1rem 0 0;
                color: $base-green;
                cursor: pointer;
            }
            
        }

        #navlinks {
            display: flex;
            padding: 0 20px;
            flex-grow: 2;
            justify-content: flex-end; 
            align-items: center;
            .router-link-active{
                text-shadow: 
                    1px 1px 2px rgb(40, 126, 6),
                    0 0 25px rgb(0, 255, 106),
                    0 0 5px rgb(205, 255, 208);
            }
        }
    }
}
</style>
