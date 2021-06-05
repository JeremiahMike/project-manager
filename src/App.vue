<template>
  <v-app>
    <Navbar />
    <v-main class="ma-4">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import Footer from "../src/components/Footer.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
    Footer,
  },
};
</script>
