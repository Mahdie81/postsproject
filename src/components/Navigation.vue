<template>

  <div class="navigation" dir="rtl">
   
      

        <b-nav-item> <router-link to="/">خانه</router-link></b-nav-item> 
    
    <div>
      <router-link to="/LoginPage">ورود</router-link>
        &nbsp;
      <router-link to="/register">ثبت نام</router-link> 

    </div>
       


    </div>
</template>



<script>

export default {

  name: "navigation",

};

</script>


<style lang="scss">

.navigation{
  
    list-style:none ;
    padding:1rem;
    background-color:var(--themcolor);
    display:flex;
    justify-content: space-between;
    font-size:1.5rem;
    a{
        color: aliceblue !important;;
    }
}

</style>