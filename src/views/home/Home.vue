<template>
  <div class="home">  
  <showposts/>
  </div>
</template>

<script>
import showposts from "@/views/posts/showposts/showposts.vue"

export default {
  name: 'HomeView',
  components: {
   showposts
  }
}
</script>
