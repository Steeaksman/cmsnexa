<template>
<v-container class="grey lighten-5">
  
    <v-system-bar
      dark color="purple"
    >
      <v-spacer></v-spacer>

      
    </v-system-bar>

    <v-app-bar
      dark color="purple"
    >
      

      <v-toolbar-title>Resources for Partners</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        
      </v-btn>
    </v-app-bar>

    <!-- <v-container> -->
        <v-card
    max-width="950"
    class="mx-auto"
    v-for="video in videos" :key= video.id
  >
  <router-link :to="{ name: 'WatchMe', params: { id: video.id }}" >
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">{{video.title}}</v-card-title>

            <v-card-subtitle>{{video.description}}</v-card-subtitle>

            <v-card-actions>
                <!-- <router-link to="/vidPlay">vidPlay</router-link>  -->
              <!-- <router-link to="/WatchMe"><v-btn text>View Video</v-btn></router-link> -->
              <!-- <router-link :to="{ name: 'WhatchMe', params: { id: video.id }}" ><v-btn text>View Video</v-btn></router-link> -->
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
       </router-link>
      
    <!-- </v-container> -->
  </v-card>
</v-container>
</template>

<script> 
export default {
  data() {
    return {
        //the datasource for the repeating card loop is sourced frome the vuex store.
        videos: this.$store.state.videos,
        //dothis: 'type vue to scaffold a new component!',
        link: 'https://nadia.s3.amazonaws.com/The-Listings-Lab-Guide.pdf' 
    }  
  }
};
</script>

