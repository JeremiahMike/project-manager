<template>
  <v-footer dark padless app inset>
    <v-card class="flex text-center" flat tile color="green" :elevation="10">
      <v-card-text calss="py-2 white--text">
        {{ new Date().getFullYear() }} - <strong>Project Manager</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
