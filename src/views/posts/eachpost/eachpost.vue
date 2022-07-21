<template >
  <div class="eachpost">
    <!-- <img :src="Posts[currentid].img" class="photo"/> -->
    <h2>................{{Posts[currentid].title}}</h2>
    <div >
         <h3>
        {{Posts[currentid].body}}
    </h3>
    <b-button-group class="button">
      <b-button variant="danger" @click.prevent="deletepost">delete</b-button>
      <b-button variant="warning" >edit</b-button>
    </b-button-group>
    </div>
  </div>
 
</template>

<script>
import "./eachpost.scss"
import { mapState } from 'vuex';


export default {
  name: 'showposts',
  components: {
  },
  data(){
        return{
                currentid:this.$route.params.id-1
        }

  },
  computed:{
   ...mapState(
    'Posts',['Posts']
   )
  }
  ,
  created() {
    
      this.$store.dispatch('Posts/loadPosts')
    
    },
    methods:{
      deletepost:()=>{
        let text;
if (confirm("Press a button!") == true) {
  text = "You pressed OK!";
} else {
  alert( "You canceled!");
}

      }}
}
</script>