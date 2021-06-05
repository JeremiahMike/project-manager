<template>
  <v-app>
    <Navbar />
    <v-main class="ma-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
  },
};
</script>
