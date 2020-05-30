<template>
<v-container>
<v-row>
<v-col  md='9' cols='12'>
<video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions">
 </video-player>                 
</v-col>



<v-col md='3' cols='12'>
  <h1></h1><br>
   
    <h1>{{video.title}}</h1><br>
    <h3>{{video.description}}</h3>
    
    
</v-col> 

  
</v-row>
</v-container> 
</template>
  
<script> 

import 'video.js/dist/video-js.css'
 
import { videoPlayer } from 'vue-video-player'
 
export default {

   components: {
    videoPlayer
  },

  computed: {
    video() {
        return this.$store.state.videos.find(vid => vid.id == this.$route.params.id)
    },
 playerOptions() {
    return{
          // videojs options
          
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: this.video.vidurl
          }],
          poster: "/static/images/author.jpg",
          //fluid: true,
          height:720
        }
      } 

  },

 

}

  
  
   


</script>

<style>

</style>