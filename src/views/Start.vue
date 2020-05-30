<template>
  <v-parallax
   height="900"
    dark
   
     img v-bind:src="backp"
  >

  
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-3 font-weight-thin mb-4"> The Nexa Content Site</h1>
        <h4 class="subheading">Click here to enter</h4><br>

        <router-link to= "/Login"> <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    icon color="deep-orange"
                     >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn></router-link>
      </v-col>
      
    </v-row>
  </v-parallax>
</template>

<script> 
export default {
  data() {
    return {
        backp: 'http://www.testoutcomes.com//vue/bloo_2.jpg'
        //backp: 'assets/bloo_2.jpg'

        
    }  
  }
};
</script>