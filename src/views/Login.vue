<template>
  <v-container class="grey lighten-5">
    <v-row justify-center>
      <v-col cols="12">
        <div>
      <h1 class="text-center">Log in Here</h1>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
    <Login class="mt-5" />
      </v-col>
    </v-row>

   
  </v-container>
</template>


<script>
  import Login from "../components/Login";

  export default {
    components: {
      Login
    }
  };
</script>