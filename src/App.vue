
<template>
  <v-app>
 <v-toolbar>

<v-toolbar-side-icon>
  <!-- Adjust the height to your needs, mine is 40 -->
  <v-img class="ml-3"
     src="https://cmsnexa.s3-us-west-1.amazonaws.com/logozarium_130.png" width="130px" height="90px">
  </v-img>
  </v-toolbar-side-icon>
  <v-spacer></v-spacer>
  
    <v-btn text rounded to="/">Home</v-btn>
      <v-btn text rounded to="/Login">Login</v-btn>
      <v-btn text rounded to="/Chooser2">Choose File</v-btn>
      <v-btn text rounded to="/Aboutus">About Us</v-btn>
  
 </v-toolbar>
  

  <v-container>
    <v-content>
      <router-view></router-view>
    </v-content>
 </v-container> 
 </v-app>
</template>