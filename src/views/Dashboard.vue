<template>
  <div class="team">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar color="green" tile class="mt-n7">
                <v-icon dark large>mdi-store</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Articles</div>
                <v-list-item-title class="headline mb-1 text-right"
                  >523614</v-list-item-title
                >
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">mdi-account</v-icon>
              <div class="overline">Lorem Ipsum</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar color="red" tile class="mt-n7">
                <v-icon dark large>mdi-youtube-subscription</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Subscribers</div>
                <v-list-item-title class="headline mb-1 text-right"
                  >700</v-list-item-title
                >
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">mdi-youtube-subscription</v-icon>
              <div class="overline">Lorem Ipsum</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar color="blue" tile class="mt-n7">
                <v-icon dark large>mdi-cart</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Sales</div>
                <v-list-item-title class="headline mb-1 text-right"
                  >$34,245</v-list-item-title
                >
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">mdi-credit-card</v-icon>
              <div class="overline">Lorem Ipsum</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar color="yellow" tile class="mt-n7">
                <v-icon dark large>mdi-folder</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Unfinished projects</div>
                <v-list-item-title class="headline mb-1 text-right"
                  >1730</v-list-item-title
                >
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">mdi-folder</v-icon>
              <div class="overline">Lorem Ipsum</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="red lighten-2">
                <img :src="person.avatar" alt="" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn outlined color="orange">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  components: {},
  data: () => ({
    team: [
      {
        name: "Lorem Ipsum",
        role: "web developer",
        avatar: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        name: "Lorem Ipsum",
        role: "web developer",
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
      },
      {
        name: "Lorem Ipsum",
        role: "Graphic designer",
        avatar: "https://randomuser.me/api/portraits/men/13.jpg",
      },
      {
        name: "Lorem Ipsum",
        role: "web developer",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      },
    ],
  }),
};
</script>
