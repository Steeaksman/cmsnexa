<template>
  <v-app>
   <v-app-bar
      app
      color="white"
      height="75"
    >
    <!-- This is the side logo on the bar -->
      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="70"
      >

      
      <!-- This is the app bar logo  -->
        <v-img
          contain
          max-height="70%"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        ></v-img>
      </v-avatar>
      <!-- This is the title -->
      <v-toolbar-title class="font-weight-black headline">
        Nexa
      </v-toolbar-title>
      <v-spacer></v-spacer> 
      <v-btn text rounded to="/">Home</v-btn>
      <v-btn text rounded to="/Login">Login</v-btn>
      <v-btn text rounded to="/Chooser2">Choose File</v-btn>
      <v-btn text rounded to="/Aboutus">About Us</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  

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
