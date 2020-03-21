<template>
  <v-app>
    <v-app-bar app color="primary" dark dense flat>
      <memo-header></memo-header>
    </v-app-bar>

    <v-content>
      <memo-editor></memo-editor>
    </v-content>
  </v-app>
</template>

<script>
import MemoHeader from "./components/MemoHeader";
import MemoEditor from "./components/MemoEditor";

export default {
  name: "App",

  components: {
    MemoHeader,
    MemoEditor
  },

  data: () => ({
    //
  })
};
</script>
