<template>
  <v-app>
   <v-app-bar
      app
      color="white"
      height="75"
    >

<v-avatar 
right="true"
size="110" 
  >
  <v-img
     src="https://cmsnexa.s3-us-west-1.amazonaws.com/logozarium_3.png">
  </v-img>
  </v-avatar>

   <!-- <div >
        <v-img
        class="ml-0"
          contain
          max-height="100"
          src="https://cmsnexa.s3-us-west-1.amazonaws.com/logozarium_3.png"
        ></v-img>
   </div> -->
      
      <v-spacer></v-spacer> 
      <v-btn text rounded to="/">Home</v-btn>
      <v-btn text rounded to="/Login">Login</v-btn>
      <v-btn text rounded to="/Chooser2">Choose File</v-btn>
      <v-btn text rounded to="/Aboutus">About Us</v-btn>
    </v-app-bar>
<v-container>
    <v-content>
      <router-view></router-view>
    </v-content>
 </v-container> 

  <v-card height="150">
    <v-footer
    color="primary"
      fixed
      class="font-weight-medium"
      padless
    >
      <v-col
        class="primary  text-center white--text"
        cols="12"
      >
Copyright {{ new Date().getFullYear() }} — <strong>Nexa</strong>
      </v-col>
    </v-footer>
  </v-card>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  data () {
    return {
      links: [
        'Home',
        'Login',
        'Choose File',
        'Viewer'
      ]
    }
    
  }
};
</script>
