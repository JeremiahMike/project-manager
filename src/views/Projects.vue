<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container>
      <v-layout row wrap class="mb-4">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              outlined
              color="green"
              @click="sortBy('title')"
              class="mr-2"
              dark
              v-on="on"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project title</span>
            </v-btn>
          </template>
          <span>Sort by project title</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              outlined
              color="blue"
              @click="sortBy('title')"
              class="mr-2"
              dark
              v-on="on"
            >
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By name</span>
            </v-btn>
          </template>
          <span>Sort by name</span>
        </v-tooltip>
      </v-layout>
      <v-card
        flat
        v-for="project in projects"
        :key="project.title"
        class="mb-1"
      >
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{ project.due }}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "projects",
  components: {},
  data: () => ({
    projects: [
      {
        title: "Website 1",
        person: "Lorem Ipsum",
        due: "10/10/1987",
        status: "no",
      },
      {
        title: "Mobile app",
        person: "Lorem Ipsum",
        due: "02/07/1990",
        status: "complete",
      },
      {
        title: "Website 2",
        person: "Lorem Ipsum",
        due: "01/05/1987",
        status: "yes",
      },
      {
        title: "Website 3",
        person: "Lorem Ipsum",
        due: "02/09/1991",
        status: "up",
      },
    ],
  }),
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>
<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.no {
  border-left: 4px solid orange;
}
.project.up {
  border-left: 4px solid red;
}
.project.yes {
  border-left: 4px solid yellow;
}
.v-chip.complete {
  color: #3cd1c2;
}
.p.ovnored {
  color: orange;
}
.p.up {
  color: red;
}
.p.yes {
  color: yellow;
}
</style>
