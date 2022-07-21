<template>
  <div class="main">
    <h2>posts</h2>
   
      <div class="showposts">
        <div v-for="post in Posts" :key="Posts.id">

            <router-link :to="`/eachpost/${post.id}`">
              <b-card 
              :title="post.title"
              :img-src="post.img"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2 card">
     
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>
              </b-card>
            </router-link> 
       
        </div>
      </div>
  </div>
</template>

<script>
import "./showposts.scss"
import { mapState } from 'vuex';


export default {
  name: 'showposts',
  components: {
  },
  data(){
        return{
       
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
}
</script>